import React from 'react';
import './SearchBar.scss';


const SearchBar = (props) => {

    const { handleChange , searchValue} = props

  return (
    <div className="search-bar">
      <input type="text" onChange={handleChange} value={searchValue} />
      {/*<MdSearch className="search" />*/}
    </div>
  );
}


export default SearchBar;
