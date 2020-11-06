import './styles.css'
import React from 'react'

function Rotator({ children }) {
  return (
    <div className='rotator'>
      {children}
    </div>
  )
}

export default Rotator
