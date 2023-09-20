import React, { Suspense, lazy, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Body from "./Components/Body";
import Offer from "./Components/Offer";
import Help from "./Components/Help";
import Cart from "./Components/Cart";
import Error from "./Components/Error";
import Profile from "./Components/Profile";
import RestaurantMenu from "./Components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import {Shimmer} from "./Components/Shimmer";
import UserContext from "./utils/userContext";
import { Provider } from "react-redux";
import store from "./utils/store";
// import Instamart from "./Components/Instamart";
const Instamart = lazy(()=> import("./Components/Instamart"))

const AppLayout = () => {
    const [user, setUser] = useState({
        name:"foodVilla",
        email:"support@foodVilla.in"
    })
    return (
        <> 
            {/* this is how we provide store to our entire app. */}
            <Provider store = {store}> 
                {/* <UserContext.Provider 
                    value={{
                        user: user,
                        setUser: setUser
                    }}> */}
                    <Header/>
                    {/* <Body /> */}
                    <Outlet/>
                    <Footer user={user}/> 
                {/* </UserContext.Provider> */}
            </Provider>
        </>
    )
}

const AppRouter = createBrowserRouter([
    // this wont work... why?? bcoz we create this app router.. but how to provide it to our app..?? how to make it accessable to the whole app?? Using react provider...
    {  
        path: '/',
        element: <AppLayout/>,
        errorElement: <Error/>,
        children: [
            {
                path: '/',
                element: <Body/>
            },
            {
                path: '/offer',
                element: <Offer/>,
                children: [
                    {
                        path: 'Profile',
                        element: <Profile/>
                    }
                ]
            },
            {
                path: '/instamart',
                element: 
                <Suspense fallback={<Shimmer/>}>
                    <Instamart/>
                </Suspense>
                
            },
            {
                path: '/help',
                element: <Help/>
            },
            {
                path: '/cart',
                element: <Cart/>
            },
            {
                path: '/restaurant/:resId',
                element: <RestaurantMenu/>
            },
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));

// Now, Do we always want to render our appLayout?? no right.. we have to rehder other components too.. 
// root.render( <AppLayout/> );

root.render(<RouterProvider router={AppRouter} />);