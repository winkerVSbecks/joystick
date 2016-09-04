import React from 'react';

function Box({
  x = 0, y = 0,
  width, height,
  className,
  children,
  style,
}) {
  const baseStyles = {
    width,
    height,
    transformOrigin: '50% 50%',
    willChange: 'transform, width, height',
    transform: `translate3d(${ x }px, ${ y }px, 0)`,
  };

  return (
    <div className={ className } style={{ ...baseStyles, ...style }}>
      { children }
    </div>
  );
}

Box.propTypes = {
  x: React.PropTypes.number,
  y: React.PropTypes.number,
  width: React.PropTypes.number.isRequired,
  height: React.PropTypes.number.isRequired,
  style: React.PropTypes.object,
  className: React.PropTypes.string,
  children: React.PropTypes.node,
};

export default Box;
