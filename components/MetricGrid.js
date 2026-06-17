export default function MetricGrid({ metrics, dense = false }) {
  if (dense) {
    return (
      <div className="inline-metrics">
        {metrics.map((metric) => (
          <span key={`${metric.value}-${metric.label}`}>
            <strong>{metric.value}</strong>
            {metric.label}
          </span>
        ))}
      </div>
    );
  }

  return (
    <div className="metric-grid">
      {metrics.map((metric) => (
        <div className="metric-card" key={`${metric.value}-${metric.label}`}>
          <strong>{metric.value}</strong>
          <span>{metric.label}</span>
        </div>
      ))}
    </div>
  );
}
