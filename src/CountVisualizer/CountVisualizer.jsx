import React, { useState, useEffect } from "react";
import numberFormater from 'number-formatter'
import dateformat from 'dateformat'
import './CountVisualizer.css'

const CountVisualizer = () => {
  const [positiveCount, setPositiveCount] = useState(0);
  const [caseDate, setCaseDate] = useState(0)

  useEffect(() => {
    covidAPI();
  });

  const covidAPI = async () => {
    const currentDataUrl = `https://api.covidtracking.com/v1/us/current.json`;
    const data = await fetch(currentDataUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCaseDate(data[0].dateChecked)
        setPositiveCount(data[0].positive);
      });
  };

  return (
    <>
      <div className='centerDiv'>
        <h1 className='lgr-text'>{numberFormater("#,###." ,positiveCount)}</h1>
        <p>Cumulative positive cases of covid as of {dateformat(caseDate, "dddd, mmmm dS, yyyy")} (US)</p>
      </div>
    </>
  );
};

export default CountVisualizer;
