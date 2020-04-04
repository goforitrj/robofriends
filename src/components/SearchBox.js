import React from 'react';

const SearchBox = ({ searchText, onSearchChange }) => {
    return <input type="text" onChange={onSearchChange} value={searchText} />;
};

export default SearchBox;
