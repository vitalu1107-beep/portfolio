import Head from "next/head";
import Link from "next/link";
import { GrowthLine, FunnelChart } from "../../components/Charts";
import ImageGallery from "../../components/ImageGallery";
import { caseStudies, getCaseBySlug } from "../../data/cases";
import { profile } from "../../data/profile";
import { publicPath } from "../../lib/paths";

const caseNav = [
  { href: "#overview", label: "项目概览" },
  { href: "#problem", label: "背景问题" },
  { href: "#strategy", label: "策略判断" },
  { href: "#actions", label: "执行路径" },
  { href: "#results", label: "数据结果" },
  { href: "#review", label: "复盘沉淀" },
  { href: "#gallery", label: "项目截图" }
];

export default function CaseDetailPage({ item }) {
  const pageTitle = `${item.shortTitle} | 卢倩作品集`;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={item.summary} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="case-reading-page" style={{ "--case-accent": item.accent }}>
        <Link className="case-back" href="/">
          返回我的OS
        </Link>
        <img className="case-avatar" src={publicPath("/assets/profile-luqian.jpg")} alt={profile.name} />

        <article className="case-report">
          <header className="case-report-hero" id="overview">
            <div className="case-hero-copy">
              <div className="case-kicker">{item.company} · {item.category}</div>
              <h1>{item.title}</h1>
              <p>{item.summary}</p>
              {item.externalLinks && (
                <div className="case-link-row">
                  {item.externalLinks.map((link) => (
                    <a href={link.href} target="_blank" rel="noreferrer" key={link.href}>
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <aside className="case-snapshot" aria-label="项目摘要">
              <span>Case Snapshot</span>
              <dl>
                <div>
                  <dt>项目阶段</dt>
                  <dd>{item.period}</dd>
                </div>
                <div>
                  <dt>我的角色</dt>
                  <dd>{item.category} / 项目操盘</dd>
                </div>
                <div>
                  <dt>核心方法</dt>
                  <dd>{item.methods.slice(0, 3).join(" · ")}</dd>
                </div>
              </dl>
            </aside>
          </header>

          <section className="case-metric-strip" aria-label="关键结果">
            {item.metrics.map((metric) => (
              <div className="case-metric" key={`${metric.value}-${metric.label}`}>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </div>
            ))}
          </section>

          <div className="case-report-layout">
            <aside className="case-toc" aria-label="案例目录">
              <b>{item.shortTitle}</b>
              <nav>
                {caseNav.map((nav) => (
                  <a href={nav.href} key={nav.href}>
                    {nav.label}
                  </a>
                ))}
              </nav>
            </aside>

            <div className="case-report-body">
              <section className="case-panel case-question-panel" id="problem">
                <span className="case-section-label">01 / Problem</span>
                <h2>背景问题</h2>
                <p>{item.problem}</p>
              </section>

              <section className="case-panel case-strategy-panel" id="strategy">
                <div>
                  <span className="case-section-label">02 / Strategy</span>
                  <h2>我的策略判断</h2>
                  <p>{item.strategy}</p>
                </div>
                <div className="case-method-card">
                  <span>使用的方法论</span>
                  <div>
                    {item.methods.map((method) => (
                      <b key={method}>{method}</b>
                    ))}
                  </div>
                </div>
              </section>

              <section className="case-panel" id="actions">
                <span className="case-section-label">03 / Execution</span>
                <h2>执行路径</h2>
                <div className="case-step-list">
                  {item.actions.map((action, index) => (
                    <article key={action}>
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <p>{action}</p>
                    </article>
                  ))}
                </div>
              </section>

              <section className="case-panel" id="results">
                <span className="case-section-label">04 / Data</span>
                <h2>数据结果</h2>
                <p>{item.result}</p>
                <div className="case-chart-grid">
                  <GrowthLine data={item.chart.points} title={item.chart.title} />
                  <FunnelChart data={item.funnel} />
                </div>
              </section>

              <section className="case-panel case-review-panel" id="review">
                <span className="case-section-label">05 / Review</span>
                <h2>复盘总结</h2>
                <p>{item.review}</p>
              </section>

              <section className="case-panel case-gallery-panel" id="gallery">
                <span className="case-section-label">06 / Evidence</span>
                <h2>项目截图</h2>
                <ImageGallery items={item.gallery} />
              </section>
            </div>
          </div>
        </article>
      </main>
    </>
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
