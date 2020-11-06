import './styles.css'
import React from 'react'
import Transform from '../../Transform'

function Base({ position = [0, 0, 0], rotation = [0, 0, 0] }) {
  return (
    <Transform position={position} rotation={rotation}>
      <div className='plant'>
        <div className='plant face blade1' />
        <div className='plant face blade2' />
      </div>
    </Transform>
  )
}

export default Base
