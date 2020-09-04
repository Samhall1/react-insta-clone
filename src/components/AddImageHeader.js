import React from 'react';
import { MdKeyboardArrowDown } from "react-icons/md";
import './AddImageHeader.css';

const AddImageHeader = (props) => {
    
    return (
        <div className="container">
            <button className="button" onClick={props.cancelButton}>Cancel</button>
            <div className="iner-container">
                <p className="Recents">Recents</p>
                <MdKeyboardArrowDown />
            </div>
            <button className="Next">Next</button>
        </div>
    )
}

export default AddImageHeader;
