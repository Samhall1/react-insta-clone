import React from 'react';
import './InstaStories.css';

const InstaStories = (props) => {
    return (
        <div className="instaContainer">
            <img className="personalImage" src={props.images}/>
            <p>{props.userName}</p>
        </div>
    )
}

export default InstaStories;
