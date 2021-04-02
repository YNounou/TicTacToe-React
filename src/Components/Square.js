import React from 'react'
import Circle from './Circle';
import Cross from './Cross';

const EMPTY = 'EMPTY';
const CIRCLE = 'CIRCLE';
const CROSS = 'CROSS';

const Square = ({ position, value, takeTurn }) => {
  function handleClick(){
    if (value === EMPTY) takeTurn(position)
  }
  return (
    <div className="square" onClick={handleClick}>
      { value === CIRCLE && <Circle /> }
      { value === CROSS && <Cross /> }
    </div>
  )
}

export default Square
