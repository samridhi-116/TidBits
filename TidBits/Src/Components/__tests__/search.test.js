// Integration Testing

import 'jest-matchmedia-mock';
import Body from "../Body"
import { render, waitFor, fireEvent } from "@testing-library/react"
import { Provider } from "react-redux";
import store from "../../utils/store";
import {StaticRouter} from "react-router-dom/server"
import { Restaraunt_Data } from "../../mocks/data.js";
import "../../../../node_modules/@testing-library/jest-dom";


window.matchMedia = window.matchMedia || function() {
    return {
      matches: false,
      addListener: function() {},
      removeListener: function() {}
    };
};

// since we used this global fetch, our code will automatically understand everything that is happening inside our fetch. 
global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json:()=> {
            return Promise.resolve(Restaraunt_Data)
        }
    })
});

test("Shimmer should load first on home-page", async ()=>{
    const body = render(
        <StaticRouter>
            <Provider store={store}>
                <Body/>
            </Provider>
        </StaticRouter>
    );
    const shimmerBody = body.getByTestId("shimmer-body");
    expect(shimmerBody).toBeInTheDocument();
});
test("Restaurants should load on home-page", async ()=>{
    const body = render(
        <StaticRouter>
            <Provider store={store}>
                <Body/>
            </Provider>
        </StaticRouter>
    );

    await waitFor(()=> expect(body.getByTestId("search-btn")));

    const restaurantList = body.getByTestId("res-list");
    expect(restaurantList.children.length).toBe(20);
});
test("Search for restraunts on home-page", async ()=>{
    const body = render(
        <StaticRouter>
            <Provider store={store}>
                <Body/>
            </Provider>
        </StaticRouter>
    );

    await waitFor(()=> expect(body.getByTestId("search-btn")));

    const searchInput = body.getByTestId("search-input");
    fireEvent.change(searchInput, {
        target: {
            value: "Fast Food",
        }
    });
    const searchBtn = body.getByTestId("search-btn");
    fireEvent.click(searchBtn);
    const restaurantList = body.getByTestId("res-list");
    expect(restaurantList.children.length).toBe(6);
});
