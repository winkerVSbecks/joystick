import { compose, withState, withHandlers } from 'recompose';
import React from 'react';
import * as pannableService from './Pannable.service';

function Pannable({ onPanStart, onPan, onPanEnd, pan, children }) {
  return (
    <div className="p2"
      draggable="true"
      onTouchStart={ onPanStart }
      onDragStart={ onPanStart }
      onDrag={ onPan }
      onTouchMove={ onPan }
      onTouchEnd={ onPanEnd }
      onDragEnd={ onPanEnd}>
      {
        React.cloneElement(children, { ...pan })
      }
    </div>
  );
}

Pannable.propTypes = {
  size: React.PropTypes.shape({
    w: React.PropTypes.number,
    h: React.PropTypes.number,
  }).isRequired,
  onPan: React.PropTypes.func.isRequired,
  onPanStart: React.PropTypes.func.isRequired,
  onPanEnd: React.PropTypes.func.isRequired,
  children: React.PropTypes.node.isRequired,
  onChange: React.PropTypes.func.isRequired,
  pan: React.PropTypes.shape({
    x: React.PropTypes.number,
    y: React.PropTypes.number,
    xNorm: React.PropTypes.number,
    yNorm: React.PropTypes.number,
  }).isRequired,
};

const enhance = compose(
  withState('offset', 'setOffset', { top: 0, left: 0 }),
  withState('pan', 'setPan', { x: 0, y: 0 }),
  withHandlers({
    onPanStart: pannableService.onPanStart,
    onPan: pannableService.onPan,
    onPanEnd: pannableService.onPanEnd,
  })
);

export default enhance(Pannable);
