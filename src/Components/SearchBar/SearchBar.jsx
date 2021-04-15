import React, {useContext} from "react";
import {SearchContext} from "../../context/SearchState"
import SearchIcon from '@material-ui/icons/Search';

import './SearchBar.css'


export default function SearchBar() {
  const {setSearchKey} = useContext(SearchContext)

  const handleChange = (e) => {
    setSearchKey(e.target.value)
  };

  return (
    <div className="searchbar">
      <input
        type="text"
        className="inputbox"
        placeholder="Input artist name"
        onChange={handleChange}
      />
      <SearchIcon />
    </div>
  );
}
