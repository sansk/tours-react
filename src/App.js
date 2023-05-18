import React, { useState, useEffect } from "react";
import Loading from "./components/loading/loading";
import Tours from "./components/tours/tours";

const url = "https://course-api.com/react-tours-project";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const toursData = await response.json();

      setIsLoading(false);
      setTours(toursData);
    } catch (e) {
      setIsLoading(false);
      console.log("Error: ", e);
    }
  };

  const removeTour = (id) => {
    const nTours = tours.filter((tour) => tour.id !== id);
    setTours(nTours);
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>No tours left</h2>
          <button className="btn" onClick={fetchTours}>
            Refresh
          </button>
        </div>
      </main>
    );
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}

export default App;
