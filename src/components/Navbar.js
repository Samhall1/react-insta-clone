import React from 'react';
import { FaHome } from "react-icons/fa";
import { CgAddR } from "react-icons/cg";
import { FiSearch } from "react-icons/fi";
import { HiOutlineHeart } from "react-icons/hi";
import { AiOutlineUser } from "react-icons/ai";
import './Navbar.css';


const Navbar = (props) => {
    return (
        <footer onClick={props.clickedBtn}>
            <button className={`home ${props.activeBtn === 'home' ? 'active' : ''}`}>
                <FaHome />
            </button>
            <button className={`search ${props.activeBtn === 'search' ? 'active' : ''}`}>
                <FiSearch />
            </button>
            <button className={`addImage ${props.activeBtn === 'addImage' ? 'active' : ''}`}>
                <CgAddR />
            </button>
            <button className={`activity ${props.activeBtn === 'activity' ? 'active' : ''}`}>
                <HiOutlineHeart />
            </button>
            <button className={`userProfile ${props.activeBtn === 'userProfile' ? 'active' : ''}`}>
                <AiOutlineUser />
            </button>
        </footer>
    );
}

export default Navbar;
