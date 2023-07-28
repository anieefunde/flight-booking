import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchFlights = createAsyncThunk('Flights/fetch', async () => {
    const response = await axios.get("http://localhost:3005/flights")
    console.log(response);
    return response.data
})

export const viewSearchedFlight = createAsyncThunk('Flight/search', async (searchedFlight) => {
    const response = await axios.get("http://localhost:3005/flights")
    let flightsData = response.data;
    console.log(flightsData);
    let finaldata = flightsData.filter((flight) => {
        return flight.origin.toLowerCase() === searchedFlight.from.toLowerCase() && flight.destination.toLowerCase() === searchedFlight.destination.toLowerCase() && flight.date === searchedFlight.date
    })
    if (finaldata.length !== 0) {
        console.log('hey');
        return finaldata
    }
    console.log(finaldata);
    console.log(flightsData);
    return []
})

const flightSlice = createSlice({
    name: 'Flight',
    initialState: {
        flights: [],
        flightSearchedFlag: false,
    },
    extraReducers(builder) {
        builder.addCase(fetchFlights.fulfilled, (state, action) => {
            state.flights = action.payload
        })
        builder.addCase(viewSearchedFlight.fulfilled, (state, action) => {
            state.flights = action.payload
        })
    }
})
export const flightReducer = flightSlice.reducer