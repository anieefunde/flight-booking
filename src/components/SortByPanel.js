import React, { useState } from "react";
import { showSortedFlights } from "../store/slices/flightSlice";
import { useDispatch } from "react-redux";

function SortByPanel({ onSortChange }) {
  const [sortBy, setSortBy] = useState("");
  const dispatch = useDispatch();

  const handleSortChange = (option) => {
    if (option === "cheapest") {
      dispatch(showSortedFlights(option));
    }
    setSortBy(option);
    onSortChange(option);
  };

  return (
    <div>
      <h4 className="sortByHeading">Sort By:</h4>
      <select value={sortBy} onChange={(e) => handleSortChange(e.target.value)}>
        <option value="">Select an option</option>
        <option value="cheapest">Cheapest</option>
        <option value="earliest">Earliest</option>
      </select>
    </div>
  );
}

export default SortByPanel;
