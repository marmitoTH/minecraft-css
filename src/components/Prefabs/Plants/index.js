import React, { Fragment } from 'react'
import Grass from '../../Plants/Grass'
import YellowFlower from '../../Plants/Flowers/Yellow'
import RedFlower from '../../Plants/Flowers/Red'
import Transform from '../../Transform'

function Plants({ position = [0, 0, 0], rotation = [0, 0, 0], addFlowers = true }) {
  return (
    <Transform position={position} rotation={rotation}>
      {addFlowers &&
        <Fragment>
          <RedFlower />
          <YellowFlower position={[10, 0, 10]} />
          <YellowFlower position={[-10, 0, -10]} />
        </Fragment>
      }
      <Grass position={[12, 0, 0]} rotation={[0, 30, 0]} />
      <Grass position={[-12, 0, 0]} />
      <Grass position={[0, 0, 12]} rotation={[0, 30, 0]} />
      <Grass position={[0, 0, -12]} />
    </Transform>
  )
}

export default Plants
