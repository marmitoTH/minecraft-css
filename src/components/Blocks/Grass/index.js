import './styles.css'
import React from 'react'
import Block from '../Base'

function Grass({ position = [0, 0, 0] }) {
  return (
    <div className='grass'>
      <Block position={position} />
    </div>
  )
}

export default Grass
