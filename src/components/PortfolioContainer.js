import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ myStocks, sellStock }) {

  // UTILITY CODE

  const myStockArr = myStocks.map(stock => <Stock key={stock.ticker} stockInfo={stock} onStockClick={sellStock} />);

  // JSX RETURN

  return (
    <div id="stock-portfolio">
      <h2>My Portfolio</h2>
      {
        myStocks.length > 0
         ? myStockArr
          : <h4>No stocks in your portfolio.</h4>
      }
    </div>
  );
}

export default PortfolioContainer;
