import React from "react";

function Stock({ stockInfo, onStockClick }) {
  return (
    <div className="card" onClick={() => onStockClick(stockInfo)}>
      <div className="card-body">
        <h5 className="card-title">{stockInfo.name}</h5>
        <p className="card-text">{`${stockInfo.ticker}: ${stockInfo.price}`}</p>
      </div>
    </div>
  );
}
export default Stock;
