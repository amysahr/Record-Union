import React, { useContext } from "react";
import { SearchContext } from "../../context/SearchState";
import SelectedItem from '../SelectedItem/SelectedItem'

export default function SelectedItemList() {
   const {selectedItemList} = useContext(SearchContext);

  return (
    <div>
      <h2>My List</h2>
      {selectedItemList.length > 0 &&
        selectedItemList.map((item) => {
          return (
            <div key={item.id}>
              <SelectedItem item={item} />
            </div>
          );
        })}
    </div>
  );
}
