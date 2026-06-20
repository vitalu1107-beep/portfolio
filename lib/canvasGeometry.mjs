const minimumBend = 70;

export function nodeAnchor(box, offset = { x: 0, y: 0 }, side = "right") {
  const left = box.left + offset.x;
  const top = box.top + offset.y;
  const centerX = left + box.width / 2;
  const centerY = top + box.height / 2;

  switch (side) {
    case "left":
      return { x: left, y: centerY };
    case "top":
      return { x: centerX, y: top };
    case "bottom":
      return { x: centerX, y: top + box.height };
    default:
      return { x: left + box.width, y: centerY };
  }
}

export function connectionPath(start, end) {
  const deltaX = end.x - start.x;
  const deltaY = end.y - start.y;

  if (Math.abs(deltaX) >= Math.abs(deltaY)) {
    const direction = deltaX < 0 ? -1 : 1;
    const bend = Math.max(Math.abs(deltaX) / 2, minimumBend);
    return `M ${start.x} ${start.y} C ${start.x + bend * direction} ${start.y} ${
      end.x - bend * direction
    } ${end.y} ${end.x} ${end.y}`;
  }

  const direction = deltaY < 0 ? -1 : 1;
  const bend = Math.max(Math.abs(deltaY) / 2, minimumBend);
  return `M ${start.x} ${start.y} C ${start.x} ${start.y + bend * direction} ${end.x} ${
    end.y - bend * direction
  } ${end.x} ${end.y}`;
}
