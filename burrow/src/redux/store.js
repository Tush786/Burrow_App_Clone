import { configureStore } from "@reduxjs/toolkit";
import { Reducer } from "./User/UserReducer";




export const store = configureStore({
    reducer: {
        data: Reducer,
    }
});
