export function onPanStart(props) {
  return e => {
    if (e.type === 'dragstart') {
      e.dataTransfer.setDragImage(getImage(), 0, 0);
    }

    const boundingRect = e.currentTarget.parentNode.getBoundingClientRect();
    props.setOffset(boundingRect);
  };
}

export function onPan(props) {
  return e => {
    const pan = getPan(e, props.offset, props.size);
    props.setPan(pan.raw);
    props.onChange(pan.normalized);
  };
}

export function onPanEnd(props) {
  return e => {
    props.setPan(
      { x: 0, y: 0 },
      () => props.onChange({ x: 0, y: 0 })
    );
  }
}

function getPan(e, offset, size) {
  if (e.type === 'drag') {
    return withOffset(offset, size, { x: e.clientX, y: e.clientY });
  }

  const touch = e.targetTouches[0] ? e.targetTouches[0] : e.changedTouches[0];
  return withOffset(offset, size, { x: touch.clientX, y: touch.clientY });
}

function withOffset({ top, left, width, height }, { w, h }, { x, y }) {
  const panX = constrainedTo(width, w / 4, x - (left + width / 2));
  const panY = constrainedTo(height, h / 4, y - (top + height / 2));
  return {
    raw: {
      x: panX,
      y: panY,
    },
    normalized: {
      x: panX / (width * 0.5 - w / 4),
      y: panY / (height * 0.5 - h / 4),
    },
  };
}

function constrainedTo(delta, size, value) {
  return Math.min( Math.max(-delta / 2 + size, value), delta / 2 - size);
}

function getImage() {
  let img = new Image();
  img.src = 'data:image/gif;base64' +
    ',R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';
  return img;
}
