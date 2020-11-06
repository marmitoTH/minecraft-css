import React from 'react'
import Dirt from '../components/Blocks/Dirt'
import Grass from '../components/Blocks/Grass'
import Transform from '../components/Transform'
import Placer from '../components/Placer'
import Rotator from '../components/Rotator'
import Birch from '../components/Prefabs/Trees/Birch'
import Oak from '../components/Prefabs/Trees/Oak'
import OakLog from '../components/Blocks/Logs/Oak'
import Stone from '../components/Blocks/Stone'
import Plants from '../components/Prefabs/Plants'

function Minecraft() {
  return (
    <Transform position={[0, 10, -220]} rotation={[-15, 0, 0]}>
      <Rotator>
        <Transform position={[-80, 0, -80]}>
          <Placer origin={[20, 40, 20]} component={Dirt} amount={[8, 8]} spaceBetween={20} />
          <Placer origin={[0, 20, 0]} component={Dirt} amount={[10, 10]} spaceBetween={20} />
          <Placer origin={[-20, 40, 20]} component={Stone} amount={[2, 6]} spaceBetween={20} />
          <Placer origin={[180, 40, 20]} component={Stone} amount={[2, 6]} spaceBetween={20} />
          <Placer origin={[40, 40, 200]} component={Stone} amount={[7, 1]} spaceBetween={20} />
          <Placer origin={[-20, 20, 20]} component={Dirt} amount={[1, 4]} spaceBetween={20} />
          <Placer origin={[40, 20, 220]} component={Dirt} amount={[6, 0]} spaceBetween={20} />
          <Placer origin={[20, -20, 20]} component={Grass} amount={[8, 3]} spaceBetween={20} />
          <Placer origin={[200, 20, 20]} component={Grass} amount={[1, 4]} spaceBetween={20} />
          <Placer origin={[-20, 0, 20]} component={Grass} amount={[1, 2]} spaceBetween={20} />
          <Placer component={Grass} amount={[10, 10]} spaceBetween={20} />
          <Grass position={[120, 0, 220]} />
          <Grass position={[40, 0, 220]} />
          <Grass position={[60, 0, 220]} />
          <Birch position={[20, 0, 100]} />
          <Birch position={[100, -20, 40]} />
          <Oak position={[160, 0, 120]} />
          <Plants position={[40, -40, 80]} addFlowers={false} />
          <Plants position={[80, -40, 40]} addFlowers={false} />
          <Plants position={[100, -40, 60]} />
          <Plants position={[-10, -20, 40]} addFlowers={false} />
          <Plants position={[0, -20, 80]} />
          <Plants position={[80, -20, 100]} addFlowers={false} />
          <Plants position={[140, -20, 100]} addFlowers={false} />
          <Plants position={[180, -20, 140]} />
          <OakLog position={[80, -20, 160]} />
          <Plants position={[40, -20, 120]} />
          <Plants position={[20, -20, 120]} />
          <Plants position={[60, -20, 180]} />
          <Plants position={[80, -20, 180]} addFlowers={false} />
        </Transform>
      </Rotator>
    </Transform>
  )
}

export default Minecraft
