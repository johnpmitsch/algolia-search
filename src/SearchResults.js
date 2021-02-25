import React from 'react';
import ResultCard from './ResultCard';
import './SearchResults.css';

const SearchResults = ({ results }) => {
  if (results.length > 0) {
    return (
      <div className="flex-container">
        {results.map((result, i) => {
          return <ResultCard key={i} result={result} />;
        })}
      </div>
    );
  } else {
    return <div>{'No results found!'}</div>;
  }
};

export default SearchResults;
