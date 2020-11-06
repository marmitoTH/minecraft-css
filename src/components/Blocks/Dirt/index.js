import './styles.css'
import React from 'react'
import Block from '../Base'

function Dirt({ position = [0, 0, 0] }) {
  return (
    <div className='dirt'>
      <Block position={position} />
    </div>
  )
}

export default Dirt
