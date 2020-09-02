import React from 'react';
import { AiOutlineCamera } from "react-icons/ai";
import { GrWaypoint } from "react-icons/gr";
import './HomeHeader.css';

const HomeHeader = (props) => {
    return (
        <header>
            <AiOutlineCamera/>
            <p className="instagram">Instagram</p>
            <GrWaypoint/>
        </header>
    )
}

export default HomeHeader;
