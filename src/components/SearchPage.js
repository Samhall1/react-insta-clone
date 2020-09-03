import React from 'react';
import { FaShoppingBag } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
import { MdLiveTv } from "react-icons/md";
import Image1 from './img/post13.jpg';
import './SearchPage.css';

const SearchPage = () => {
    return (
        <div className='searchPageContainer'>
            <div className="searchPageButtons">
                <button className="button1">
                    <MdLiveTv />
                    <p>IGTV</p>
                </button>
                <button className="button2">
                    <FaShoppingBag />
                    <p>Shop</p> 
                </button>
                <button className="button3">
                    <AiFillHeart /> 
                    <p>Well-being</p>
                </button>
            </div>
            <img className="mainImage" src={Image1}/>
        </div>
    )
}

export default SearchPage;
