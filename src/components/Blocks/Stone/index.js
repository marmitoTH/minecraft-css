import './styles.css'
import React from 'react'
import Block from '../Base'

function Stone({ position = [0, 0, 0] }) {
  return (
    <div className='stone'>
      <Block position={position} />
    </div>
  )
}

export default Stone
