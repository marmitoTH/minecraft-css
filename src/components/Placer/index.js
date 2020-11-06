import React, { Fragment } from 'react'

function Placer({ component, origin = [0, 0, 0], amount = [0, 0, 0], spaceBetween }) {
  function drawComponents() {
    const elements = []
    const offset = [...origin]

    for (let i = 0; i < amount[0]; i++) {
      elements.push(React.createElement(component, { key: i, position: [...offset] }))

      for (let j = 0; j < amount[1]; j++) {
        offset[2] += spaceBetween
        elements.push(React.createElement(component, { key: `${i}-${j}`, position: [...offset] }))
      }

      offset[2] = origin[2]
      offset[0] += spaceBetween
    }

    return elements
  }

  return (
    <Fragment>
      {drawComponents()}
    </Fragment>
  )
}

export default Placer
