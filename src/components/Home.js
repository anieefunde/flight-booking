import React, { useState } from "react";

import Body from "./Body";
import About from "./About";

import Card from "./Card";

function Home({ selectedFlightFlag, setSelectedFlightFlag }) {
  return (
    <div>
      <Body />
      <Card
        selectedFlightFlag={selectedFlightFlag}
        setSelectedFlightFlag={setSelectedFlightFlag}
      />
      <About />
    </div>
  );
}

export default Home;
