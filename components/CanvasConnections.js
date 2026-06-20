import { connectionPath, nodeAnchor } from "../lib/canvasGeometry.mjs";

export default function CanvasConnections({
  connections,
  nodes,
  positions,
  width = 2480,
  height = 1560
}) {
  return (
    <svg
      className="canvas-connections"
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      aria-hidden="true"
      focusable="false"
    >
      {connections.map((connection) => {
        const startBox = nodes[connection.from];
        const endBox = nodes[connection.to];

        if (!startBox || !endBox) return null;

        const start = nodeAnchor(
          startBox,
          positions[connection.from],
          connection.fromSide
        );
        const end = nodeAnchor(endBox, positions[connection.to], connection.toSide);

        return (
          <path
            key={connection.id || `${connection.from}-${connection.to}`}
            d={connectionPath(start, end)}
            stroke={connection.color}
          />
        );
      })}
    </svg>
  );
}
