import { configureStore } from "@reduxjs/toolkit";
import carsReducer from "../features/snippet/carsSlice";

const myStore = configureStore({
    reducer: {
        carsReducer
    }
});

export default myStore;