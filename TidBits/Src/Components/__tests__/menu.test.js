// Integration Testing
import RestaurantMenu from "../RestaurantMenu";
import Header from "../Header";
import { render, waitFor, fireEvent } from "@testing-library/react"
import { Provider } from "react-redux";
import store from "../../utils/store";
import {StaticRouter} from "react-router-dom/server"
import "../../../../node_modules/@testing-library/jest-dom";
import { Menu_Data } from "../../mocks/menuData.js";

// since we used this global fetch, our code will automatically understand everything that is happening inside our fetch. 
global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json:()=> {
            return Promise.resolve(Menu_Data)
        }
    })
});


test("Shimmer should load first on restaurant menu page", async ()=>{
    const menu = render(
        <StaticRouter>
            <Provider store={store}>
                <RestaurantMenu/>
            </Provider>
        </StaticRouter>
    );
    const shimmerMenu = menu.getByTestId("shimmer-menu");
    expect(shimmerMenu).toBeInTheDocument();
});

test("Add items to cart", async ()=>{
    const menu = render(
        <StaticRouter>
            <Provider store={store}>
                <Header/>
                <RestaurantMenu/>
            </Provider>
        </StaticRouter>
    );

    await waitFor(()=> expect(menu.getByTestId("menu")));

    // const menuList = menu.getByTestId("menu");
    const addBtn = menu.getAllByTestId("add-btn");
    fireEvent.click(addBtn[0]);
    fireEvent.click(addBtn[2]);
    const cart = menu.getByTestId("cart-item")

    expect(cart.innerHTML).toBe("Cart-2");
});