import React from 'react';
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { BsBookmark } from "react-icons/bs";
import './ProfileInfo.css';


const ProfileInfo = (props) => {
    return (
        <div className='profileInfo'>
            <div className='userDetails'>
                <img src={props.imageUser}/>
                <div className='userNameAndLocation'>
                    <p>{props.userName}</p>
                    <p>{props.location}</p>
                </div>
                <BiDotsHorizontalRounded />
            </div>
            <img className="imagePost" src={props.imagePost}/>
            <div className="profileIcons">
                <div className="icons">
                    <AiOutlineHeart onClick={props.likeButtonHandle}/>
                    <FaRegComment />
                    <FaTelegramPlane />
                </div>
                <BsBookmark />
            </div>
            <div className='postLikes'>
                <p>Liked by <span>{props.firstPerson}</span> and <span>{props.allLikes}</span></p>
            </div>
            <div className='postComments'>
                <p>
                    <span>{props.userNameWhoLeftTheComment}</span> &nbsp; {props.randomComment}
                </p>
            </div>
        </div>
    )
}

export default ProfileInfo;
