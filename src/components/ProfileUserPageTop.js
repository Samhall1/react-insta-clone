import React from 'react';
import './ProfileUserPageTop.css';

const ProfileUserPageTop = (props) => {
    return (
        <div className='ProfileUserPageTop'>
            <div className='containerProfile'>
                <div className='container11'>
                    <img src={props.userImageProfile}/>
                    <p>{props.usernameProfile}</p>
                </div>
                <div className='container2'>
                    <p className='profile'><span>{props.postsProfile}</span> &nbsp; Posts </p>
                    <p className='profile'><span>{props.followersProfile}</span> &nbsp; Followers </p>
                    <p className='profile'><span>{props.followingProfile}</span> &nbsp; Following </p>
                </div>
            </div>
            <button className="editProfileButton">Edit Profile</button>
        </div>
    )
}

export default ProfileUserPageTop;

