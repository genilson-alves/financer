import React from "react";
import { Link } from "react-router-dom";

function Home() {
  const stocks = [
    { name: "Apple Inc.", ticker: "AAPL" },
    { name: "Microsoft Corp.", ticker: "MSFT" },
    { name: "Alphabet Inc. (Google)", ticker: "GOOGL" },
    { name: "Amazon.com, Inc.", ticker: "AMZN" },
  ];
  return (
    <div className="flex-grow p-4">
      <h1>Finance Dashboard</h1>
      <h2>Popular Stocks</h2>
      <button className="btn btn-primary mb-8">Get Started</button>
      <ul>
        {stocks.map((stock) => (
          <li key={stocks.ticker}>
            <Link to={`/company/${stock.ticker}`}>
              {stock.name} ({stock.ticker})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
