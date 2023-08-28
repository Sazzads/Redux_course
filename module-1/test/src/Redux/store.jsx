import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./featurers/counter/counterSlice"
import cartSlice from "./featurers/Cart/cartSlice";
import formSlice from "./featurers/Form/formSlice";
import logger from "./middlewares/Logger";


const store = configureStore({
    reducer: {
        counter: counterReducer,
        calc: cartSlice,
        formdata: formSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

export default store;