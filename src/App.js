import React from 'react';
import { compose, withState, lifecycle } from 'recompose';
import './index.css';
import Joystick from './Joystick';
import Box from './Box';

const size = 128;

const styles = {
  borderRadius: 6,
  border: '1px solid #444',
  margin: '0 auto',
  background: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='5' height='4'><circle cx='0' cy='1' r='0.5' fill='#444' /><circle cx='2.5' cy='3' r='0.5' fill='#444' /><circle cx='5' cy='1' r='0.5' fill='#444' /></svg>")`,
  backgroundSize: '7.5px 6px',
};

function App({
  size: { w, h },
  joyStick1, setJoyStick1,
  joyStick2, setJoyStick2,
}) {
  return (
    <div className="bg-white vh-100 max-width-2 mx-auto flex flex-column">

      <header className="px2 mt2 monospace flex items-center">
        <h1 className="h2 regular m0 flex-auto">Joystick</h1>
        <p className="px2">
          <a className="caps text-decoration-none h6 black"
            href="https://github.com/winkerVSbecks/joystick">
            github
          </a>
        </p>
      </header>

      <div className="flex-auto flex items-center">
        <Box style={ styles }
          x={ joyStick2.x * 64 }
          y={ joyStick2.y * 64 }
          width={ 64 + 32 * joyStick1.x }
          height={ 64 + 32 * joyStick1.y } />
      </div>

      <div className="flex">
        <div className="col-6 flex justify-center">
          <pre>{ JSON.stringify(joyStick2, round, 2) }</pre>
        </div>
        <div className="col-6 flex justify-center">
          <pre>{ JSON.stringify(joyStick1, round, 2) }</pre>
        </div>
      </div>

      <div className="flex items-center justify-between p3">
        <Joystick w={ size } h={ size } onChange={ setJoyStick2 } />
        <Joystick w={ size } h={ size } onChange={ setJoyStick1 } />
      </div>

    </div>
  );
}

const enhance = compose(
  withState('size', 'setSize', { w: 0, h: 0 }),
  withState('joyStick1', 'setJoyStick1', { x: 0, y: 0 }),
  withState('joyStick2', 'setJoyStick2', { x: 0, y: 0 }),
  lifecycle({
    componentWillMount(e) {
      window.addEventListener('resize', () => {
        this.props.setSize({
          w: window.innerWidth,
          h: window.innerHeight,
        });
      })
    }
  })
);

export default enhance(App);

function round(key, val) {
  return val.toFixed ? Number(val.toFixed(3)) : val;
}
