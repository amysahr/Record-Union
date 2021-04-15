import React, { createContext, useReducer } from "react";
import SearchReducer from "./SearchReducer";

const initialState = {
  currentPageNumber: 0,
  numberOfItemsPerPage: 10,
  searchResult: [],
  searchKey: "",
  selectedItemList: []
};

export const SearchContext = createContext(initialState);

export const SearchProvider = ({ children }) => {
  const [state, dispatch] = useReducer(SearchReducer, initialState);

  const nextPage = () => {
    dispatch({
      type: "NEXT_PAGE",
    });
  };

  const previousPage = () => {
    dispatch({
      type: "PREVIOUS_PAGE",
    });
  };

  const setSearchKey = (searchKey) => {
    dispatch({
      type: "SET_SEARCH_KEY",
      payload: {
        searchKey: searchKey
      }
    });
  };

  const selectItem = (item) => {
    dispatch({
      type: "SELECT_ARTIST",
      payload: {
        item: item
      }
    });
  };

  const deleteItem = (item) => {
    dispatch({
      type: "DELETE_ARTIST",
      payload: {
        item: item
      }
    });
  };

  const search = async () => {
    const res = await fetch(
        encodeURI(`https://dev-assignment.ew.r.appspot.com/search?q=${state.searchKey}&limit=${state.numberOfItemsPerPage}&offset=${state.currentPageNumber * state.numberOfItemsPerPage}`)
      ); 
      res.json()
      .then((res) => {
        dispatch({
            type: "SEARCH_RESULT",
            payload: {
              searchResult: res.artists? res.artists.items : []
            }
          });;
      }).catch((err) => console.log(err));
  };

  return (
    <SearchContext.Provider
      value={{ 
        searchKey: state.searchKey, 
        searchResult: state.searchResult,
        currentPageNumber: state.currentPageNumber,
        numberOfItemsPerPage: state.numberOfItemsPerPage,
        selectedItemList: state.selectedItemList,
        nextPage, previousPage, search, setSearchKey, selectItem, deleteItem }}
    >
      {children}
    </SearchContext.Provider>
  );
};
