import React from 'react';
import { MdKeyboardArrowDown } from "react-icons/md";
import './AddImageHeader.css';

const AddImageHeader = (props) => {
    return (
        <div>
            <button onClick={props.cancelButton}>Cancel</button>
            <div>
                <p>Recents</p>
                <MdKeyboardArrowDown />
            </div>
            <p>Next</p>
        </div>
    )
}

export default AddImageHeader;
