import React from 'react';
import { MdKeyboardArrowDown } from "react-icons/md";
import { BiMenu } from "react-icons/bi";
import './ProfileHeader.css';

const ProfileHeader = () => {
    return (
        <div>
            <div>
                <p>Code Nation </p> 
                <MdKeyboardArrowDown/>
            </div>
            <BiMenu/>
        </div>
    )
}

export default ProfileHeader;
