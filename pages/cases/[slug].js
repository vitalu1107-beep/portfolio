import Head from "next/head";
import Link from "next/link";
import { GrowthLine, FunnelChart } from "../../components/Charts";
import AssetImage from "../../components/AssetImage";
import { caseStudies, getCaseBySlug } from "../../data/cases";
import { profile } from "../../data/profile";
import { publicPath } from "../../lib/paths";

const caseNav = [
  { href: "#overview", label: "项目概览" },
  { href: "#model", label: "核心模型" },
  { href: "#problem", label: "背景问题" },
  { href: "#strategy", label: "策略判断" },
  { href: "#actions", label: "执行路径" },
  { href: "#results", label: "数据结果" },
  { href: "#review", label: "复盘沉淀" },
  { href: "#gallery", label: "证据链" }
];

const caseBlueprints = {
  "tiny-achievement-app": {
    eyebrow: "Product Validation Map",
    title: "小成就 APP 的 0→1 验证路径",
    summary: "这个项目不是功能练习，而是用 AI 辅助开发验证一个真实行为假设：低压力记录能否形成持续正反馈。",
    nodes: ["痛点洞察", "功能减法", "PWA上线", "行为验证"],
    proof: "核心证据：第3天出现主动打开，说明产品有初步自驱信号。"
  },
  "meituan-supply-growth": {
    eyebrow: "Supply Growth Flywheel",
    title: "团买买的供给增长飞轮",
    summary: "把达人训练、商家供给、爆品运营和GMV放大串成一套系统，而不是依赖单次招商或活动。",
    nodes: ["KOS训练", "商家评估", "爆品池", "直播种草", "GMV放大"],
    proof: "核心证据：KOS生态520人，单场GMV峰值120万。"
  },
  "community-growth": {
    eyebrow: "Private Traffic Funnel",
    title: "社群裂变的低成本获客漏斗",
    summary: "把线下信任、社群承接、裂变传播和下单转化串成冷启动增长漏斗。",
    nodes: ["线下触达", "社群沉淀", "裂变传播", "下单转化", "复盘复制"],
    proof: "核心证据：C端增量100W+，单粉成本约1元。"
  },
  "campaign-marketing": {
    eyebrow: "Campaign War Map",
    title: "618活动的战役执行地图",
    summary: "用目标拆解、爆品组合、渠道分发和风险预案组织一次跨部门活动战役。",
    nodes: ["目标拆解", "爆品组合", "渠道分发", "实时战报", "风险预案"],
    proof: "核心证据：3天完成月度GMV目标，GMV实际提升60%。"
  }
};

function findVisual(item, keywords, fallbackIndex = 0) {
  const gallery = item.gallery || [];
  const matched = gallery.find((visual) =>
    keywords.some((keyword) => `${visual.title}${visual.caption}`.includes(keyword))
  );
  return matched || gallery[fallbackIndex] || gallery[0];
}

function EvidenceFigure({ visual, badge }) {
  if (!visual) return null;

  return (
    <figure className="case-evidence-figure">
      <div className="case-evidence-frame">
        <AssetImage src={visual.src} alt={visual.title} className="case-evidence-image" />
      </div>
      <figcaption>
        <span>{badge}</span>
        <strong>{visual.title}</strong>
        <small>{visual.caption}</small>
      </figcaption>
    </figure>
  );
}

function CaseModelPanel({ item }) {
  const model = caseBlueprints[item.slug];
  if (!model) return null;

  return (
    <section className="case-model-panel" id="model">
      <div className="case-model-copy">
        <span className="case-section-label">{model.eyebrow}</span>
        <h2>{model.title}</h2>
        <p>{model.summary}</p>
        <b>{model.proof}</b>
      </div>
      <div className="case-model-map" aria-label={`${item.shortTitle}核心模型`}>
        {model.nodes.map((node, index) => (
          <div className="case-model-node" key={node}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{node}</strong>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function CaseDetailPage({ item }) {
  const pageTitle = `${item.shortTitle} | 卢倩作品集`;
  const gallery = item.gallery || [];
  const problemVisual = gallery[0];
  const strategyVisual = findVisual(item, ["流程", "原型", "路径", "方案", "活动节奏"], 1);
  const resultVisual = findVisual(item, ["结果", "效果", "看板", "目标"], 3);
  const reviewVisual = gallery[gallery.length - 1];
  const evidenceStrip = gallery.slice(0, 5);

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

          <CaseModelPanel item={item} />

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
              <section className="case-story-panel case-question-panel" id="problem">
                <div className="case-story-copy">
                  <span className="case-section-label">01 / Problem</span>
                  <h2>背景问题</h2>
                  <p>{item.problem}</p>
                </div>
                <EvidenceFigure visual={problemVisual} badge="问题证据" />
              </section>

              <section className="case-story-panel case-story-panel-reverse" id="strategy">
                <EvidenceFigure visual={strategyVisual} badge="策略证据" />
                <div className="case-story-copy">
                  <span className="case-section-label">02 / Strategy</span>
                  <h2>我的策略判断</h2>
                  <p>{item.strategy}</p>
                  <div className="case-method-card">
                    <span>使用的方法论</span>
                    <div>
                      {item.methods.map((method) => (
                        <b key={method}>{method}</b>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              <section className="case-panel case-execution-panel" id="actions">
                <div className="case-board-head">
                  <span className="case-section-label">03 / Execution</span>
                  <h2>执行路径</h2>
                  <p>把动作和产出物放在同一张板上，招聘方可以直接看到每一步对应的交付。</p>
                </div>
                <div className="case-action-board">
                  {item.actions.map((action, index) => {
                    const visual = gallery[index + 1] || gallery[index] || gallery[0];

                    return (
                      <article key={action}>
                        {visual && (
                          <AssetImage
                            src={visual.src}
                            alt={visual.title}
                            className="case-action-image"
                          />
                        )}
                        <div>
                          <span>{String(index + 1).padStart(2, "0")}</span>
                          <p>{action}</p>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </section>

              <section className="case-panel case-results-panel" id="results">
                <div className="case-result-top">
                  <div>
                    <span className="case-section-label">04 / Data</span>
                    <h2>数据结果</h2>
                    <p>{item.result}</p>
                  </div>
                  <EvidenceFigure visual={resultVisual} badge="结果证据" />
                </div>
                <div className="case-chart-grid">
                  <GrowthLine data={item.chart.points} title={item.chart.title} />
                  <FunnelChart data={item.funnel} />
                </div>
              </section>

              <section className="case-story-panel case-review-panel" id="review">
                <div className="case-story-copy">
                  <span className="case-section-label">05 / Review</span>
                  <h2>复盘总结</h2>
                  <p>{item.review}</p>
                </div>
                <EvidenceFigure visual={reviewVisual} badge="复盘证据" />
              </section>

              <section className="case-panel case-gallery-panel" id="gallery">
                <span className="case-section-label">06 / Evidence</span>
                <h2>证据链总览</h2>
                <p>这些不是单独展示的图片，而是支撑前面判断、策略、执行和结果的项目材料。</p>
                <div className="case-evidence-strip">
                  {evidenceStrip.map((visual, index) => (
                    <figure key={visual.src}>
                      <AssetImage src={visual.src} alt={visual.title} className="case-strip-image" />
                      <figcaption>
                        <span>{String(index + 1).padStart(2, "0")}</span>
                        <strong>{visual.title}</strong>
                      </figcaption>
                    </figure>
                  ))}
                </div>
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
