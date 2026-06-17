export function GrowthLine({ data, title }) {
  const width = 520;
  const height = 220;
  const pad = 32;
  const max = Math.max(...data.map((item) => item.value), 100);
  const points = data.map((item, index) => {
    const x = pad + (index * (width - pad * 2)) / (data.length - 1);
    const y = height - pad - (item.value / max) * (height - pad * 2);
    return { ...item, x, y };
  });
  const line = points.map((point) => `${point.x},${point.y}`).join(" ");

  return (
    <div className="chart-panel">
      <div className="chart-title">{title}</div>
      <svg viewBox={`0 0 ${width} ${height}`} role="img" aria-label={title}>
        <line x1={pad} y1={height - pad} x2={width - pad} y2={height - pad} />
        <line x1={pad} y1={pad} x2={pad} y2={height - pad} />
        <polyline points={line} />
        {points.map((point) => (
          <g key={point.label}>
            <circle cx={point.x} cy={point.y} r="5" />
            <text x={point.x} y={height - 10} textAnchor="middle">
              {point.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}

export function FunnelChart({ data }) {
  return (
    <div className="funnel-panel">
      <div className="chart-title">转化漏斗</div>
      <div className="funnel-list">
        {data.map((item) => (
          <div className="funnel-item" key={item.label}>
            <div className="funnel-meta">
              <span>{item.label}</span>
              <b>{item.value}%</b>
            </div>
            <div className="funnel-track">
              <i style={{ width: `${item.value}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
