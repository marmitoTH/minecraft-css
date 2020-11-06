import './styles.css'
import React from 'react'
import Base from '../../Base'

function YellowFlower({ position = [0, 0, 0], rotation = [0, 0, 0] }) {
  return (
    <div className='plant-flower-yellow'>
      <Base position={position} rotation={rotation} />
    </div>
  )
}

export default YellowFlower
