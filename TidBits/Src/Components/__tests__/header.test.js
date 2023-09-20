// Unit Testing on Header component

import { render } from "@testing-library/react"
import Header from "../Header";
import { Provider } from "react-redux";
import store from "../../utils/store";
import {StaticRouter} from "react-router-dom/server"

test("Logo should load on rendering header", ()=>{
    //load header
    const header = render(
        <StaticRouter>
            <Provider store = {store}> 
                <Header /> 
            </Provider>
        </StaticRouter>
    )
    //check if logo is loaded
    const logo = header.getByTestId("logo");
    expect(logo.src).toBe("http://localhost/dummy.png");
})

// test("Status should be green on rendering header", ()=>{
//     //load header
//     const header = render(
//         <StaticRouter>
//             <Provider store = {store}> 
//                 <Header /> 
//             </Provider>
//         </StaticRouter>
//     )
//     //check if logo is loaded
//     const onlineStatus = header.getByTestId("online-status");
//     expect(onlineStatus.innerHTML).toBe("🟢");
// })

test("Cart should have 0-items on rendering header", ()=>{
    //load header
    const header = render(
        <StaticRouter>
            <Provider store = {store}> 
                <Header /> 
            </Provider>
        </StaticRouter>
    )
    //check if logo is loaded
    const cartItem = header.getByTestId("cart-item");
    expect(cartItem.innerHTML).toBe("Cart-0");
})