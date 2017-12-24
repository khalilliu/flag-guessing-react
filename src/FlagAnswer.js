import React, {Component} from 'react';
import StyledButton from './StyledButton';
import './FlagAnswer.css';

const FlagAnswer = ({correct,answer, onNext}) => {
  return(
    <div className='flag-answer'>
      {correct 
        ? `correct!: ${answer}`
        : `Incorrect! correct Answer : ${answer}`}
      <StyledButton text="Next" onClick={onNext} />
    </div>
  )
}

export default FlagAnswer;
