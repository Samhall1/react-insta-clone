import React from 'react';
import './ProfileUserPageBottomImages.css';

const ProfileUserPageBottomImages = (props) => {
    return (
        <div className='ProfileUserPageBottomImages'>
            <img src={props.images}/>
        </div>
    )
}

export default ProfileUserPageBottomImages;
