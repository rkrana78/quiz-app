import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import './ProgressBar.css'

const ProgressBar = ({ next, prev, submit, progress}) => {
    return (
        <div className='progressBar'>
            <div className='backButton' onClick={prev}>
                <span className="material-icons-outlined"> arrow_back </span>
            </div>
            <div className='rangeArea'>
                <div className='tooltip'>{progress}% Complete!</div>
                <div className='rangeBody'>
                    <div className='progress' style={{ width: `${progress}%` }}></div>
                </div>
            </div>
            
                <Button className='next' onClick={ progress === 100 ? submit : next}>
                    <span>Next Question</span>
                    <span className="material-icons-outlined"> arrow_forward </span>
                </Button>
            
        </div>
    );
};

export default ProgressBar;