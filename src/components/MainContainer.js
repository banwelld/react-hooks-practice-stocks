import React, { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {

  const [stocks, setStocks] = useState([]);
  const [myStocks, setMyStocks] = useState([]);
  const [stockSort, setStockSort] = useState('');
  const [stockFilter, setStockFilter] = useState('');

  // CALLBACK FUNCTIONS

  const getStocks = () => {
    fetch('http://localhost:3001/stocks')
      .then(r => r.json())
      .then(data => setStocks(sortFilter(data)));
  };

  const buyStock = stockInfo => setMyStocks(Array.from(new Set([...myStocks, stockInfo])));
  const sellStock = stockInfo => setMyStocks([...myStocks].filter(stock => stock.name !== stockInfo.name));
  
  const onSortFilterChange = (e) => {
    switch (e.target.name) {
      case'sort':
        setStockSort(e.target.value);
        break;
      case 'filter':
        setStockFilter(e.target.value);
        break;
      default:
        break;
    }
  }
 
  const typeFilter = stock => stockFilter ? stock.type === stockFilter : true;
  const flexSort = (a, b) => stockSort.toLowerCase() === 'alphabetically' ? a.name.localeCompare(b.name) : a.price - b.price;
  const sortFilter = (arr) => stockSort || stockFilter ? arr.filter(typeFilter).sort(flexSort) : arr;

  // UTILITY CODE

  useEffect(getStocks, [stockSort, stockFilter]);

  // JSX RETURN

  return (
    <div>
      <SearchBar onSortFilterChange={onSortFilterChange} />
      <div className="row">
        <div className="col-8">
          <StockContainer stockData={stocks} buyStock={buyStock} />
        </div>
        <div className="col-4">
          <PortfolioContainer myStocks={myStocks} sellStock={sellStock} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
