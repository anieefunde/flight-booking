import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useSelector } from "react-redux";

export const fetchFlights = createAsyncThunk("Flights/fetch", async () => {
  const response = await axios.get("http://localhost:3005/flights");
  console.log(response);
  return response.data;
});

export const viewSearchedFlight = createAsyncThunk(
  "Flight/search",
  async (searchedFlight) => {
    const response = await axios.get("http://localhost:3005/flights");
    let flightsData = response.data;
    console.log(flightsData);
    let finaldata = flightsData.filter((flight) => {
      return (
        flight.origin.toLowerCase() === searchedFlight.from.toLowerCase() &&
        flight.destination.toLowerCase() ===
          searchedFlight.destination.toLowerCase() &&
        flight.date === searchedFlight.date
      );
    });
    if (finaldata.length !== 0) {
      console.log("hey");
      return finaldata;
    }
    console.log(finaldata);
    console.log(flightsData);
    return [];
  }
);

export const fetchUsers = createAsyncThunk("Flights/fetch", async () => {
  const response = await axios.get("http://localhost:3005/users");
  console.log(response);
  return response.data;
});

export const bookFlight = createAsyncThunk(
  "flight/book",
  async (bookThisFlight) => {
    try {
      const response = await axios.post(
        "http://localhost:3005/bookings",
        bookThisFlight
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      throw new Error("Failed to add data to server");
    }
  }
);

export const showBookings = createAsyncThunk("bookings/show", async () => {
  const response = await axios.get("http://localhost:3005/bookings");
  return response.data;
});

const flightSlice = createSlice({
  name: "Flight",
  initialState: {
    flights: [],
    bookedFlights: [],
    flightSearchedFlag: false,
    bookings: [],
  },
  extraReducers(builder) {
    builder.addCase(fetchFlights.fulfilled, (state, action) => {
      state.flights = action.payload;
    });
    builder.addCase(viewSearchedFlight.fulfilled, (state, action) => {
      state.flights = action.payload;
    });
    builder.addCase(bookFlight.fulfilled, (state, action) => {
      state.bookedFlights.push(action.payload);
    });
    builder.addCase(showBookings.fulfilled, (state, action) => {
      state.bookings = action.payload;
    });
  },
});
// export const { bookFlight } = flightSlice.actions
export const flightReducer = flightSlice.reducer;
