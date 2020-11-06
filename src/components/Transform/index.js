import './styles.css'
import React from 'react'

function Transform({ children, position = [0, 0, 0], rotation = [0, 0, 0] }) {
  return (
    <div
      className='transform'
      style={{
        transform: `
          translate3d(${position[0]}rem, ${position[1]}rem, ${position[2]}rem) 
          rotateX(${rotation[0]}deg) rotateY(${rotation[1]}deg) rotateZ(${rotation[2]}deg)
        `,
      }}
    >
      {children}
    </div>
  )
}

export default Transform
