import React from 'react';
import Box from './Box';
import Pannable from './Pannable';

const styles = {
  container: {
    borderColor: '#444',
    borderRadius: 8,
    borderWidth: 1,
    borderStyle: 'solid',
    cursor: 'pointer',
  },
  pad: {
    borderColor: '#444',
    borderRadius: '50%',
    borderWidth: 1,
    opacity: 0.9,
    borderStyle: 'solid',
    background: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='5' height='4'><circle cx='0' cy='1' r='0.5' fill='#444' /><circle cx='2.5' cy='3' r='0.5' fill='#444' /><circle cx='5' cy='1' r='0.5' fill='#444' /></svg>")`,
    backgroundSize: '7.5px 6px',
    backgroundColor: '#fff',
  }
};

function Joystick({ w, h, onChange }) {
  return (
    <div>
      <Box className="relative flex items-center justify-center"
        width={ w }
        height={ h }
        style={ styles.container }>

      <Pannable size={{ w: w / 4, h: h / 4 }} onChange={ onChange }>
        <Box style={ styles.pad }
          width={ w / 3 }
          height={ w / 3 } />
      </Pannable>

      </Box>
    </div>
  );
}

Joystick.propTypes = {
  w: React.PropTypes.number.isRequired,
  h: React.PropTypes.number.isRequired,
  onChange: React.PropTypes.func.isRequired,
};

export default Joystick;
