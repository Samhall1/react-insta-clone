import React from 'react';
import { CgNametag } from "react-icons/cg";
import { FiSearch } from "react-icons/fi";
import './SearchHeader.css';

const SearchHeader = () => {
    return (
        <header className='searchHeader'>
            <input  type="text" placeholder='Search'/>
            <CgNametag />
        </header>
    )
}

export default SearchHeader;
