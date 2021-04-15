/* eslint-disable import/no-anonymous-default-export */

export default (state, action) => {
  switch (action.type) {
    case "NEXT_PAGE":
      return {
        ...state,
        currentPageNumber: state.currentPageNumber + 1
      };
    case "PREVIOUS_PAGE":
      return {
        ...state,
        currentPageNumber: state.currentPageNumber - 1,
      };
    case "SET_SEARCH_KEY":
        return {
          ...state,
          searchKey: action.payload.searchKey,
          currentPageNumber: 0
        };
    case "SEARCH_RESULT":
        return {
            ...state,
            searchResult: action.payload.searchResult
        }
    case "SELECT_ARTIST":
        return {
            ...state,
            selectedItemList: [action.payload.item, ...state.selectedItemList]
        }
    case "DELETE_ARTIST":
       return {
        ...state,
        selectedItemList: state.selectedItemList.filter( entry => entry.id !== action.payload.item.id)
    }
    default:
      return state;
  }
};
