import { configureStore } from "@reduxjs/toolkit";
import { flightReducer } from "./slices/flightSlice";
import { usersReducer } from "./slices/usersSlice";

const store = configureStore({
    reducer: {
        flights: flightReducer,
        users: usersReducer
    }
})

export { store }