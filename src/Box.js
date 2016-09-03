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
    transform: `translate3d(${ x }px, ${ y }px, 0)`,
    transition: `transform 600ms cubic-bezier(0.175, 0.885, 0.32, 1.275)`,
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
