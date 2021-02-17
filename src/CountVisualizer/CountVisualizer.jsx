import React, { useState, useEffect } from "react";
import numberFormater from "number-formatter";
import dateformat from "dateformat";
import "./CountVisualizer.css";

const CountVisualizer = () => {
  const [positiveCount, setPositiveCount] = useState(0);
  const [caseDate, setCaseDate] = useState(0);
  const [positiveIncrease, setPositiveIncrease] = useState(0);

  useEffect(() => {
    covidAPI();
  });

  const covidAPI = async () => {
    const currentDataUrl = `https://api.covidtracking.com/v1/us/current.json`;
    const data = await fetch(currentDataUrl)
      .then((response) => response.json())
      .then((data) => {
        setCaseDate(data[0].dateChecked);
        setPositiveCount(data[0].positive);
        setPositiveIncrease(data[0].positiveIncrease);
      });
  };

  return (
    <>
      <div className="centerDiv">
        <div className='pad-b-100 bld-txt'>
          <h1 className="lgr-text mar-b-0">
            {numberFormater("#,###.", positiveCount)}
          </h1>
          <p className='md-txt'>+ {numberFormater("#,###." ,positiveIncrease)} from yesterday</p>
        </div>
        <p>
          Cumulative positive cases of covid as of{" "}
          {dateformat(caseDate, "dddd, mmmm dS, yyyy")} (US)
        </p>
      </div>
    </>
  );
};

export default CountVisualizer;
