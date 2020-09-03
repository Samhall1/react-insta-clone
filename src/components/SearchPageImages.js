import React from 'react';
import './SearchPageImages.css';

const SearchPageImages = (props) => {
    return (
        <div className='SearchPageImagesContainer'>
            <img src={props.searchPageImg}/>
        </div>
    )
}

export default SearchPageImages;
