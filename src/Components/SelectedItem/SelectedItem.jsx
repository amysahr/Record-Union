import React, { useContext } from "react";
import { SearchContext } from "../../context/SearchState";

import Avatar from '@material-ui/core/Avatar';
import DeleteIcon from '@material-ui/icons/Delete';

import './SelectedItem.css'

export default function SelectedItem({item}) {
    const {deleteItem} = useContext(SearchContext);

    return (
        <div className="container">
        <div className="selecteditem">
            {item.images.length > 0 ? <Avatar src={item.images[0].url}/> : <Avatar />}
            <div className="selectedname">{item.name}</div>
            <DeleteIcon onClick={() => deleteItem(item)}>
                </DeleteIcon> 
        </div>
        </div>
    )
}
