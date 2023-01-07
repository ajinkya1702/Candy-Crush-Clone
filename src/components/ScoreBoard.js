import React from 'react'

const ScoreBoard = ({score}) => {
  return (
    <div className='score-board'>
      <div className='text'>
      <h2>
      Score:   <br/>
             {score}</h2>
      </div>
    </div>
  )
}

export default ScoreBoard
