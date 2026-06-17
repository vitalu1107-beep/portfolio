import Link from "next/link";
import { GrowthLine, FunnelChart } from "../../components/Charts";
import ImageGallery from "../../components/ImageGallery";
import MetricGrid from "../../components/MetricGrid";
import SectionHeader from "../../components/SectionHeader";
import SiteShell from "../../components/SiteShell";
import { caseStudies, getCaseBySlug } from "../../data/cases";

export default function CaseDetailPage({ item }) {
  return (
    <SiteShell title={item.shortTitle} description={item.summary}>
      <article className="case-detail" style={{ "--case-accent": item.accent }}>
        <section className="case-hero">
          <Link className="text-link" href="/cases">
            返回案例列表
          </Link>
          <div className="eyebrow">{item.company} · {item.category}</div>
          <h1>{item.title}</h1>
          <p>{item.summary}</p>
          <MetricGrid metrics={item.metrics} />
        </section>

        <section className="case-section">
          <SectionHeader title="背景问题" />
          <p className="large-text">{item.problem}</p>
        </section>

        <section className="case-section two-column">
          <div>
            <SectionHeader title="我的策略" />
            <p>{item.strategy}</p>
          </div>
          <div className="method-box">
            <span>使用的方法论</span>
            <div className="method-tags">
              {item.methods.map((method) => (
                <b key={method}>{method}</b>
              ))}
            </div>
          </div>
        </section>

        <section className="case-section">
          <SectionHeader title="执行动作" />
          <div className="action-list">
            {item.actions.map((action, index) => (
              <article key={action}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{action}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="case-section chart-grid">
          <GrowthLine data={item.chart.points} title={item.chart.title} />
          <FunnelChart data={item.funnel} />
        </section>

        <section className="case-section two-column">
          <div>
            <SectionHeader title="数据结果" />
            <p>{item.result}</p>
          </div>
          <div>
            <SectionHeader title="复盘总结" />
            <p>{item.review}</p>
          </div>
        </section>

        <section className="case-section">
          <SectionHeader title="项目截图" />
          <ImageGallery items={item.gallery} />
        </section>
      </article>
    </SiteShell>
  );
}

export function getStaticPaths() {
  return {
    paths: caseStudies.map((item) => ({ params: { slug: item.slug } })),
    fallback: false
  };
}

export function getStaticProps({ params }) {
  const item = getCaseBySlug(params.slug);
  return {
    props: {
      item
    }
  };
}
