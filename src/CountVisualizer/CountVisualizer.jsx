import React, { useState, useEffect } from "react";
import './CountVisualizer.css'

const CountVisualizer = () => {
  const [positiveCount, setPositiveCount] = useState(0);

  useEffect(() => {
    covidAPI();
  });

  const covidAPI = async () => {
    const currentDataUrl = `https://api.covidtracking.com/v1/us/current.json`;
    const data = await fetch(currentDataUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPositiveCount(data[0].positive);
      });
  };

  return (
    <>
      <div className='centerDiv'>
        <h1 className='lgr-text'>{positiveCount}</h1>
      </div>
    </>
  );
};

export default CountVisualizer;
