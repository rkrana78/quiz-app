import React from 'react';
import './Video.css'


const Video = ({ title, id, noq }) => {
    return (
        <div className='video'>
            <img src={`https://img.youtube.com/vi/${id}/maxresdefault.jpg`} alt={title} />
            <p>{title}</p>
            <div className="qmeta">
                <p>{noq} Questions</p>
                <p>Total points : {noq * 5}</p>
            </div>
        </div>
    );
};

export default Video;