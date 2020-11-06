import './styles.css'
import React from 'react'
import Base from '../../Base'

function RedFlower({ position = [0, 0, 0], rotation = [0, 0, 0] }) {
  return (
    <div className='plant-flower-red'>
      <Base position={position} rotation={rotation} />
    </div>
  )
}

export default RedFlower
