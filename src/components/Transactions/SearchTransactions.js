import React, { useState } from 'react';
import api from '../../services/api';
import './SearchTransactions.css';

const SearchTransactions = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    const res = await api.get(`/transactions/search`, { params: { query } });
    setResults(res.data);
  };

  return (
    <div className="search-transactions">
      <h1>Search Transactions</h1>
      <input
        type="text"
        placeholder="Enter Customer ID or Account Number"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {results.map((result) => (
          <li key={result.id}>
            {result.date} - {result.type} - ${result.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchTransactions;
