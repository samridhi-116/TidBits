import {configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

// idhr humne slice ko store pe add kr dia
const store = configureStore({
    reducer:{
        cart: cartSlice
    }
});

export default store;