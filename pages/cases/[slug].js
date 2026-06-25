import Head from "next/head";
import Link from "next/link";
import { GrowthLine, FunnelChart } from "../../components/Charts";
import AssetImage from "../../components/AssetImage";
import { caseStudies, getCaseBySlug } from "../../data/cases";
import { profile } from "../../data/profile";
import { findVisualBySrc, selectEvidenceStrip } from "../../lib/casePresentation.mjs";
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
    title: "小成就 APP 的 0→1 交付路径",
    summary: "以“低压力记录能否降低行动阻力”为核心假设，独立完成需求定义、MVP取舍、AI辅助开发、PWA部署与首轮个人自测。",
    nodes: ["行为假设", "MVP取舍", "PWA交付", "首轮自测"],
    proof: "交付证据可核验；使用信号来自N=1个人连续自测，不外推为多用户结论。"
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
        <AssetImage
          src={visual.src}
          alt={visual.title}
          className={`case-evidence-image${visual.kind === "product-screen" ? " is-product-screen" : ""}`}
        />
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

function CaseValidationPanel({ statuses, timeline }) {
  if (!statuses?.length && !timeline?.length) return null;

  return (
    <div className="case-validation-area">
      {statuses?.length > 0 && (
        <div className="case-validation-grid" aria-label="验证结论分层">
          {statuses.map((item) => (
            <article key={item.status}>
              <span>{item.status}</span>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
              <small>{item.evidence}</small>
            </article>
          ))}
        </div>
      )}

      {timeline?.length > 0 && (
        <div className="case-development-timeline">
          <div>
            <span className="case-section-label">Repository Evidence</span>
            <h3>开发与部署记录</h3>
            <p>公开提交记录对应产品从原型、V2迭代到PWA能力完善的过程。</p>
          </div>
          <ol>
            {timeline.map((milestone) => (
              <li key={`${milestone.date}-${milestone.title}`}>
                <time>{milestone.date}</time>
                <div>
                  <strong>{milestone.title}</strong>
                  <p>{milestone.detail}</p>
                  <a href={milestone.href} target="_blank" rel="noreferrer">
                    查看提交记录
                  </a>
                </div>
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}

function NarrativeCaseHero({ item }) {
  const hero = item.hero;
  const actions = hero.actions || item.externalLinks || [];
  const visualStyle = hero.visualStyle || "board";

  return (
    <header
      className={`case-report-hero case-report-hero-narrative case-report-hero-${visualStyle}`}
      id="overview"
    >
      <aside className="case-hero-index" aria-label="案例编号">
        <strong>{hero.index}</strong>
        <span className="case-hero-meta">
          {(hero.meta || ["Business Case", "Study"]).map((line) => (
            <b key={line}>{line}</b>
          ))}
        </span>
        <time>{hero.period || item.period}</time>
      </aside>

      <div className="case-narrative-copy">
        <div className="case-kicker">{hero.label}</div>
        <h1>{hero.title}</h1>
        <p className="case-narrative-lead">{hero.summary}</p>

        <div className="case-hero-proof-grid" aria-label="项目核心成果">
          {hero.metrics.map((metric) => (
            <div key={`${metric.value}-${metric.label}`}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </div>
          ))}
        </div>

        <p className="case-validation-note">{hero.validationNote}</p>

        {actions.length > 0 && (
          <div className="case-link-row case-narrative-links">
            {actions.map((link) => (
              <a
                href={link.href}
                target={link.href.startsWith("#") ? undefined : "_blank"}
                rel={link.href.startsWith("#") ? undefined : "noreferrer"}
                key={link.href}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>

      <figure className={`case-hero-visual case-hero-visual-${visualStyle}`}>
        <div>
          <AssetImage src={hero.visual} alt={hero.visualAlt || item.shortTitle} loading="eager" />
        </div>
        <figcaption>{hero.visualCaption || "项目证据"}</figcaption>
      </figure>
    </header>
  );
}

export default function CaseDetailPage({ item }) {
  const pageTitle = `${item.shortTitle} | 卢倩作品集`;
  const gallery = item.gallery || [];
  const problemVisual =
    findVisualBySrc(gallery, item.sectionVisuals?.problem) || gallery[0];
  const strategyVisual =
    findVisualBySrc(gallery, item.sectionVisuals?.strategy) ||
    findVisual(item, ["流程", "原型", "路径", "方案", "活动节奏"], 1);
  const resultVisual =
    findVisualBySrc(gallery, item.sectionVisuals?.result) ||
    findVisual(item, ["结果", "效果", "看板", "目标"], 3);
  const reviewVisual =
    findVisualBySrc(gallery, item.sectionVisuals?.review) || gallery[gallery.length - 1];
  const executionVisuals = (item.executionVisuals || [])
    .map((src) => findVisualBySrc(gallery, src))
    .filter(Boolean);
  const evidenceStrip = selectEvidenceStrip(gallery, item.evidenceStrip);
  const hasNarrativeCaseHero = Boolean(item.hero?.layout?.startsWith("narrative"));

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
          {hasNarrativeCaseHero ? (
            <NarrativeCaseHero item={item} />
          ) : (
            <>
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
                      <dd>{item.role || `${item.category} / 项目操盘`}</dd>
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
            </>
          )}

          <CaseModelPanel item={item} />

          <div className="case-report-layout">
            <aside className="case-toc" aria-label="案例目录">
              <b>{item.shortTitle}</b>
              <nav>
                {caseNav.map((nav) => (
                  <a href={nav.href} key={nav.href}>
                    {item.validationStatus && nav.href === "#results" ? "验证结果" : nav.label}
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
                <EvidenceFigure
                  visual={problemVisual}
                  badge={item.sectionEvidenceLabels?.problem || "问题证据"}
                />
              </section>

              <section className="case-story-panel case-story-panel-reverse" id="strategy">
                <EvidenceFigure
                  visual={strategyVisual}
                  badge={item.sectionEvidenceLabels?.strategy || "策略证据"}
                />
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
                  <p>{item.executionIntro || "将关键动作与对应产出放在同一条执行路径中。"}</p>
                </div>
                <div className="case-action-board">
                  {item.actions.map((action, index) => {
                    const visual =
                      executionVisuals[index] || gallery[index + 1] || gallery[index] || gallery[0];

                    return (
                      <article key={action}>
                        {visual && (
                          <AssetImage
                            src={visual.src}
                            alt={visual.title}
                            className={`case-action-image${visual.kind === "product-screen" ? " is-product-screen" : ""}`}
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
                    <span className="case-section-label">
                      {item.validationStatus ? "04 / Validation" : "04 / Data"}
                    </span>
                    <h2>{item.validationStatus ? "验证结果与证据" : "数据结果"}</h2>
                    <p>{item.result}</p>
                  </div>
                  <EvidenceFigure
                    visual={resultVisual}
                    badge={item.sectionEvidenceLabels?.result || "结果证据"}
                  />
                </div>
                {item.validationStatus ? (
                  <CaseValidationPanel
                    statuses={item.validationStatus}
                    timeline={item.developmentTimeline}
                  />
                ) : (
                  <div className="case-chart-grid">
                    <GrowthLine data={item.chart.points} title={item.chart.title} />
                    <FunnelChart data={item.funnel} />
                  </div>
                )}
              </section>

              <section className="case-story-panel case-review-panel" id="review">
                <div className="case-story-copy">
                  <span className="case-section-label">05 / Review</span>
                  <h2>复盘总结</h2>
                  <p>{item.review}</p>
                </div>
                <EvidenceFigure
                  visual={reviewVisual}
                  badge={item.sectionEvidenceLabels?.review || "复盘证据"}
                />
              </section>

              <section className="case-panel case-gallery-panel" id="gallery">
                <span className="case-section-label">06 / Evidence</span>
                <h2>证据链总览</h2>
                <p>这些不是单独展示的图片，而是支撑前面判断、策略、执行和结果的项目材料。</p>
                <div className="case-evidence-strip">
                  {evidenceStrip.map((visual, index) => (
                    <figure key={visual.src}>
                      <AssetImage
                        src={visual.src}
                        alt={visual.title}
                        className={`case-strip-image${visual.kind === "product-screen" ? " is-product-screen" : ""}`}
                      />
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
