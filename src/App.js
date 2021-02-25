import React, { useEffect, useState } from 'react';
import search from './search';
import SearchBar from './SearchBar';
import SearchResultsDisplay from './SearchResultsDisplay';
import './App.css';

function App() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (query) {
      setError(null); // reset error state before sending new query
      search(query, setResults, (e) => setError(e));
    }
  }, [query]);

  return (
    <div className="App">
      <h1>Algolia Search</h1>
      <SearchBar query={query} setQuery={setQuery} />
      <div className={'results-container'}>
        <SearchResultsDisplay results={results} query={query} error={error} />
      </div>
    </div>
  );
}

export default App;
