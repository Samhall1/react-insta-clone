import React from 'react';
import './ActivityPage.css';

const ActivityPage = (props) => {
    return (
        <div className='activityPageContainer'>
            <div className='activityPageContainerLeft'>
                <img className='img1' src={props.activityUserImage}/>
                <div className='acrivityPageParagraphs'>
                    <p>
                        <span>{props.activityUserName}</span> &nbsp;
                        {props.activityText} <br/>
                    </p>
                    <p>{props.activityCommentText}</p>
                </div>
            </div>
            
            <img className='img2' src={props.activityPostImage}/>
        </div>
    )
}

export default ActivityPage;
