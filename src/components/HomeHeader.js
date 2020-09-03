import React from 'react';
import { AiOutlineCamera } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import './HomeHeader.css';

const HomeHeader = (props) => {
    return (
        <header>
            <AiOutlineCamera/>
            <p className="instagram">Instagram</p>
            <FaTelegramPlane/>
        </header>
    )
}

export default HomeHeader;
