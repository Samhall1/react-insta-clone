import React from 'react';
import './AddImagePageTop.css';

const AddImagePageTop = (props) => {
    return (
        <div>
            <img className="ImageOnFeed" src={props.addImageOnFeed}/>
            <div>
                <div className="ImageTopContainer">
                    <p>DRAFTS</p>
                    <p>MANAGE(1)</p>
                </div>
                <img className="draftImage" src={props.addImageDraft} />
            </div>
            <p className="recent">RECENTS</p>
        </div>
    )
}

export default AddImagePageTop;
