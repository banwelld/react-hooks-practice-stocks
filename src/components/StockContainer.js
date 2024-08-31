import React from "react";
import Stock from "./Stock";

function StockContainer({ stockData, buyStock }) {

  // UTILITY CODE

  const stockArr = stockData.map(stock => <Stock key={stock.ticker} stockInfo={stock} onStockClick={buyStock} />);

  // JSX RETURN

  return (
    <div id="stock-menu">
      <h2>Stocks</h2>
      {stockArr}
    </div>
  );
}

export default StockContainer;
