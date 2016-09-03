import React from 'react';

function Rectangle({
  x = 0, y = 0,
  width, height,
  r = 0,
  dasharray = [],
  stroke = 'none', fill,
  opacity = 1,
}) {
  const strokeDasharray = dasharray.join(' ');

  return (
    <rect x={ x } y={ y }
      width={ width } height={ height }
      rx={ r } ry={ r }
      strokeDasharray={ strokeDasharray }
      stroke={ stroke }
      strokeWidth={ 4 }
      fill={ fill }
      opacity={ opacity } />
  );
}

Rectangle.propTypes = {
  x: React.PropTypes.number,
  y: React.PropTypes.number,
  width: React.PropTypes.number.isRequired,
  height: React.PropTypes.number.isRequired,
  r: React.PropTypes.number,
  dasharray: React.PropTypes.array,
  stroke: React.PropTypes.string,
  fill: React.PropTypes.string.isRequired,
  opacity: React.PropTypes.number,
};

export default Rectangle;
