import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchFlights = createAsyncThunk('Flights/fetch', async () => {
    const response = await axios.get("http://localhost:3005/flights")
    console.log(response);
    return response.data
})

const flightSlice = createSlice({
    name: 'Flight',
    initialState: {
        flights: [],
    },
    extraReducers(builder) {
        builder.addCase(fetchFlights.fulfilled, (state, action) => {
            state.flights = action.payload
        })
    }
})
export const flightReducer = flightSlice.reducer