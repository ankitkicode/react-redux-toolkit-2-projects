import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./Slices/CounterSlice";
import BlogSlice from "./Slices/BlogSlice";

const Store = configureStore({
    reducer: {
        counter: CounterSlice,
        blog : BlogSlice
    }
});

export default Store;
