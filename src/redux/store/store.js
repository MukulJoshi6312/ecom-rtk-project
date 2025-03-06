import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "../slices/cartSlice";

const store = configureStore({
    reducer:{
        cart:CartSlice
    }
})

export default store;