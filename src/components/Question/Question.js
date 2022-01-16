import React from 'react';
import Answers from '../Answers/Answers';
import './Question.css'

const Question = () => {
    return (
        <div className='question'>
      <div className='qtitle'>
        <span className="material-icons-outlined"> help_outline </span>
        Here goes the question from Learn with Sumit?
      </div>
      <Answers/>
    </div>
    );
};

export default Question;