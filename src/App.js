import React, { useState, useEffect } from "react";
import Loading from "./components/loading/loading";

const url = "https://course-api.com/react-tours-project";

function App() {
  return (
    <h2>
      <Loading />
    </h2>
  );
}

export default App;
