import React, { useState } from "react";
import "./index.css";

export default function StockData() {

  const [date, setDate] = useState('');
  const [data, setData] = useState();
  const [isClicked, setClicked] = useState(false);

  const fetchData = () => {
    let url = `https://jsonmock.hackerrank.com/api/stocks?date=${date}`
    fetch(url)
    .then(res => res.json())
    .then(res =>{
      console.log(res.data)
      setData(res.data[0])
      setClicked(true)
    })
      // setData(res.data[0]))
    .catch(err => console.log(err))
  }

  return (
    <div className="layout-column align-items-center mt-50">
      <section className="layout-row align-items-center justify-content-center">
        <input type="text" className="large" placeholder="5-January-2000" id="app-input" data-testid="app-input" value={date} onChange={e => {setDate(e.target.value)}}/>
        <button className="" id="submit-button" data-testid="submit-button" onClick={() => fetchData()}>Search</button>
      </section>
      {
        data && data.open &&
        <ul className="mt-50 slide-up-fade-in styled" id="stockData" data-testid="stock-data">
          <li className="py-10">Open: {data.open}</li>
          <li className="py-10">Close: {data.close}</li>
          <li className="py-10">High: {data.high}</li>
          <li className="py-10">Low: {data.low}</li>
        </ul>
      }
      {
        !data && isClicked &&
        <div className="mt-50 slide-up-fade-in" id="no-result" data-testid="no-result">
          No Results Found
        </div>
      }
    </div>
  );
}
