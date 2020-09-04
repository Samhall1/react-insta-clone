import React from 'react';
import './AddImagePage.css';

const AddImagePage = (props) => {
    return (
            <img className='groupImage' src={props.addImageGroup} />
    )
}

export default AddImagePage;

