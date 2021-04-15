import React from "react";
import { SearchProvider } from "../../context/SearchState";

import SearchBar from "../SearchBar/SearchBar";
import SearchResultList from "../SearchResultList/SearchResultList";
import SelectedItemList from "../SelectedItemList/SelectedItemList";

import './SearchContainer.css'

export default function SearchContainer() {
  return (
    <div>
      <SearchProvider>
        <div className="containerbox">
          <div className="searchresult">
            <SearchBar />
            <SearchResultList />
          </div>
          <div className="selectedItem">
            <SelectedItemList />
          </div>
        </div>
      </SearchProvider>
    </div>
  );
}
