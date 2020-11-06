import './styles.css'
import React from 'react'
import Block from '../../Base'

function Birch({ position = [0, 0, 0] }) {
  return (
    <div className='birch'>
      <Block position={position} />
    </div>
  )
}

export default Birch
