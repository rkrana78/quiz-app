import React from 'react';
import './Video.css'
import image from '../../assets/images/3.jpg'

const Video = ({ title, id, noq }) => {
    return (
        <div className='video'>
            <img src={image} alt="" />
            <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
            <div className="qmeta">
                <p>10 Questions</p>
                <p>Score : Not taken yet</p>
            </div>
        </div>
    );
};

export default Video;