import React from 'react';
import SearchResults from './SearchResults';

const SearchResultsDisplay = ({ query, error, results }) => {
  if (!query) return <div>{'Please enter a search term above'}</div>;
  if (error) return <div>{error}</div>;
  return <SearchResults results={results} />;
};

export default SearchResultsDisplay;
