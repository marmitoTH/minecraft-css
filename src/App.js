import './App.css'
import Minecraft from './scenes/Minecraft'

import logo from './assets/images/logo.png'
import { Fragment } from 'react';

function App() {
  return (
    <Fragment>
      <img className='logo' src={logo} alt='logo' />
      <div className='viewport'>
        <Minecraft />
      </div>
    </Fragment>
  );
}

export default App
