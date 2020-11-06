import React from 'react'
import Transform from '../../../Transform'
import Log from '../../../Blocks/Logs/Birch'
import Leaves from '../../../Blocks/Leaves'
import Placer from '../../../Placer'

function Birch({ position = [0, 0, 0], rotation = [0, 0, 0] }) {
  return (
    <Transform position={position} rotation={rotation}>
      <Log position={[0, -100, 0]} />
      <Log position={[0, -80, 0]} />
      <Log position={[0, -60, 0]} />
      <Log position={[0, -40, 0]} />
      <Log position={[0, -20, 0]} />
      <Log position={[0, 0, 0]} />
      <Transform position={[0, -80, 0]}>
        <Placer origin={[-40, 20, -40]} component={Leaves} amount={[5, 4]} spaceBetween={20} />
        <Placer origin={[-40, 0, -40]} component={Leaves} amount={[5, 4]} spaceBetween={20} />
        <Placer origin={[-20, -20, -20]} component={Leaves} amount={[3, 2]} spaceBetween={20} />
        <Leaves position={[0, -40, 0]} />
        <Leaves position={[0, -40, 20]} />
        <Leaves position={[0, -40, -20]} />
        <Leaves position={[20, -40, 0]} />
        <Leaves position={[-20, -40, 0]} />
      </Transform>
    </Transform>
  )
}

export default Birch
