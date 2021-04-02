import React from 'react'

const EMPTY = 'EMPTY';
const CIRCLE = 'CIRCLE';
const CROSS = 'CROSS';

const Result = ({winner, reset}) => {
  return (
    <div className="result">
      {winner === CIRCLE && 'Circle won the game'}
      {winner === CROSS && 'Cross won the game'}
      {winner === 'IT is a tie' && 'It is a tie'}
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Result
