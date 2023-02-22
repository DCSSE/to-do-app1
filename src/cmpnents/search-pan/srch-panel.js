import React from 'react'
import "./srch-pan.css"

const SearchPan = () => {
    return (
        <input type = "text"
               className = {"form-control search-input"}
               placeholder={"type to search"} />
    );
}
export default SearchPan;