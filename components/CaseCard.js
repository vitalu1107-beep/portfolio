import Link from "next/link";
import AssetImage from "./AssetImage";
import MetricGrid from "./MetricGrid";

export default function CaseCard({ item, compact = false }) {
  return (
    <article className={compact ? "case-card compact" : "case-card"}>
      <Link href={`/cases/${item.slug}`} aria-label={`查看${item.title}`}>
        <AssetImage src={item.heroImage} alt={item.title} className="case-card-image" />
      </Link>
      <div className="case-card-body">
        <div className="eyebrow">{item.category}</div>
        <h3>
          <Link href={`/cases/${item.slug}`}>{item.title}</Link>
        </h3>
        <p>{item.summary}</p>
        {!compact && <MetricGrid metrics={item.metrics.slice(0, 3)} dense />}
        <Link className="text-link" href={`/cases/${item.slug}`}>
          查看案例分析
        </Link>
      </div>
    </article>
  );
}
