import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./featurers/counter/counterSlice"
import cartSlice from "./featurers/Cart/cartSlice";


const store = configureStore({
    reducer: {
        counter: counterReducer,
        calc: cartSlice,
    }
})

export default store;