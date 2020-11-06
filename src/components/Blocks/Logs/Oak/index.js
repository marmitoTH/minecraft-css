import './styles.css'
import React from 'react'
import Block from '../../Base'

function Oak({ position = [0, 0, 0] }) {
  return (
    <div className='oak'>
      <Block position={position} />
    </div>
  )
}

export default Oak
