import './styles.css'
import React from 'react'
import Transform from '../../Transform'

function Base({ position = [0, 0, 0] }) {
  return (
    <Transform position={position}>
      <div className='cube'>
        <div className='cube face top' />
        <div className='cube face bottom' />
        <div className='cube face left' />
        <div className='cube face right' />
        <div className='cube face front' />
        <div className='cube face back' />
      </div>
    </Transform>
  )
}

export default Base
