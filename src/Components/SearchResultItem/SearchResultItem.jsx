import React, { useContext } from "react";
import { SearchContext } from "../../context/SearchState";
import Avatar from '@material-ui/core/Avatar';
import { Button } from '@material-ui/core';

import './SearchResultItem.css'

export default function SearchResultItem({item}) {
    const {selectItem, selectedItemList} = useContext(SearchContext);

    // Check if this item is added before and the list items is less than 5
    const isItemSelectable = () => {
        const filtered = selectedItemList.filter(entry => entry.id === item.id)
        
        return selectedItemList.length < 5 && filtered.length === 0 
    }

    return (
        <div className="resultitem">
            {item.images.length > 0 ? <Avatar src={item.images[0].url}/> : <Avatar />}
            <div className="resultname">{item.name}</div>
            <Button variant="contained" color="primary" disabled={!isItemSelectable()} onClick={() => selectItem(item)}>Select</Button>
        </div>
    )
}
