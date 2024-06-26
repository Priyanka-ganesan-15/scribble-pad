import React from 'react';
import SearchIcon from '../../../assets/icons/SearchIcon';
import XIcon from '../../../assets/icons/XIcon';

export default function SearchField(props) {
  const { setQuery, query } = props;

  return (
    <div className="w-full flex items-center">
      <label htmlFor="search-field" className="sr-only">
        Search
      </label>
      <div className="relative w-full text-gray-400 focus-within:text-gray-600">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3">
          <SearchIcon className="h-5 w-5 text-gray-500" />
        </div>
        <input
          id="search-field"
          className="block w-full py-2 pl-10 pr-3 rounded-full shadow-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent sm:text-sm"
          placeholder="Search"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {query && (
          <button
            className="absolute inset-y-0 right-0 flex items-center pr-3 focus:outline-none"
            onClick={() => setQuery("")}
          >
            <XIcon className="h-5 w-5 text-gray-500" />
          </button>
        )}
      </div>
    </div>
  );
}
