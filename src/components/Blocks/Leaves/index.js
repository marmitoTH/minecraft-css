import './styles.css'
import React from 'react'
import Block from '../Base'

function Leaves({ position = [0, 0, 0] }) {
  return (
    <div className='leaves'>
      <Block position={position} />
    </div>
  )
}

export default Leaves
