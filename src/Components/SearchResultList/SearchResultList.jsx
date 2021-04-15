import React, { useContext, useEffect } from "react";
import { SearchContext } from "../../context/SearchState";
import SearchResultItem from "../SearchResultItem/SearchResultItem";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import IconButton from "@material-ui/core/IconButton";

import './SearchResultList.css'

export default function SearchResultList() {
  const {
    numberOfItemsPerPage,
    currentPageNumber,
    searchKey,
    searchResult,
    nextPage,
    previousPage,
    search,
  } = useContext(SearchContext);

  useEffect(() => {
    search();
  }, [currentPageNumber, searchKey]);

  return (
    <div>
      {searchResult.length > 0 &&
        searchResult.map((item) => {
          return (
            <div key={item.id}>
              <SearchResultItem item={item} />
            </div>
          );
        })}
        {" "}
      <div className="arrowicons">
        <IconButton
          onClick={() => previousPage()}
          disabled={currentPageNumber === 0}
        >
          <ArrowBackIcon />
        </IconButton>
        <IconButton>{currentPageNumber + 1}</IconButton>
        <IconButton
          onClick={() => nextPage()}
          disabled={searchResult.length < numberOfItemsPerPage}
        >
          <ArrowForwardIcon />
        </IconButton>
      </div>
    </div>
  );
}
