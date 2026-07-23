import Head from "next/head";
import Link from "next/link";
import { GrowthLine, FunnelChart } from "../../components/Charts";
import AssetImage from "../../components/AssetImage";
import { caseStudies, getCaseBySlug } from "../../data/cases";
import { caseDecisionContent } from "../../data/caseDecisionContent.mjs";
import { profile } from "../../data/profile";
import { findVisualBySrc, selectEvidenceStrip } from "../../lib/casePresentation.mjs";
import { publicPath } from "../../lib/paths";

const caseNav = [
  { href: "#overview", label: "项目概览" },
  { href: "#model", label: "核心模型" },
  { href: "#problem", label: "问题判断" },
  { href: "#strategy", label: "方案取舍" },
  { href: "#actions", label: "执行难点" },
  { href: "#results", label: "结果证据" },
  { href: "#review", label: "方法迁移" },
  { href: "#gallery", label: "证据链" }
];

const caseBlueprints = {
  "tiny-achievement-app": {
    eyebrow: "Product Validation Map",
    title: "小成就 APP 的 AI 产品验证路径",
    summary: "以“低压力记录能否降低行动阻力”为核心假设，把运营洞察拆成AI任务、MVP交付和下一轮指标验证。",
    nodes: ["运营洞察", "AI任务", "MVP取舍", "PWA交付", "指标扩样"],
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
    summary: "把线下BD、团长信任、社群承接、标签分层、裂变传播和复盘复制串成冷启动增长漏斗。",
    nodes: ["BD获客", "团长承接", "社群沉淀", "标签分层", "裂变放大", "复盘复制"],
    proof: "核心证据：C端增量100W+，单粉成本约1元。"
  },
  "campaign-marketing": {
    eyebrow: "Campaign War Map",
    title: "618活动的战役执行地图",
    summary: "用目标拆解、爆品组合、渠道分发和风险预案组织一次跨部门活动战役。",
    nodes: ["目标拆解", "爆品组合", "渠道分发", "实时战报", "风险预案"],
    proof: "核心证据：3天完成月度GMV目标，GMV实际提升60%。"
  },
  "ai-apply-assistant": {
    eyebrow: "AI Apply Workbench",
    title: "AI 投递助手的判断-表达-记录闭环",
    summary: "把求职投递前最重复的动作拆成结构化输入、AI岗位判断、分对象表达、简历建议和投递记录。",
    nodes: ["岗位输入", "结构化分析", "优先级判断", "分对象话术", "投递记录"],
    proof: "当前证据：静态原型、流程图、Prompt矩阵、架构边界和公开代码；不包装真实转化结果。"
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
  if (!model || item.hideModel) return null;

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

function CaseDecisionSnapshot({ decision }) {
  if (!decision?.roleGoal) return null;

  return (
    <section className="case-metric-strip" aria-label="案例速读">
      <div className="case-metric">
        <strong>角色</strong>
        <span>{decision.roleGoal.role}</span>
      </div>
      <div className="case-metric">
        <strong>目标</strong>
        <span>{decision.roleGoal.goal}</span>
      </div>
      <div className="case-metric">
        <strong>边界</strong>
        <span>{decision.roleGoal.boundary}</span>
      </div>
    </section>
  );
}

function CaseDecisionOptions({ options, selectedOptionId }) {
  if (!options?.length) return null;

  return (
    <div className="case-validation-grid" aria-label="方案推演">
      {options.map((option) => (
        <article key={option.id}>
          <span>{option.id === selectedOptionId ? "优先执行" : `方案${option.id}`}</span>
          <h3>{option.title}</h3>
          <p>{option.summary}</p>
          <small>{option.tradeoff}</small>
        </article>
      ))}
    </div>
  );
}

function CaseSelectedReason({ selected }) {
  if (!selected) return null;

  return (
    <div className="case-method-card">
      <span>为什么选择这个方案</span>
      <p>{selected.summary}</p>
      <div>
        {selected.reasons.map((reason) => (
          <b key={reason}>{reason}</b>
        ))}
      </div>
    </div>
  );
}

function CaseChallengeList({ items }) {
  if (!items?.length) return null;

  return (
    <div className="case-validation-area">
      <div className="case-validation-grid" aria-label="执行难点与解决">
        {items.map((item, index) => (
          <article key={item.challenge}>
            <span>{String(index + 1).padStart(2, "0")} / 难点</span>
            <h3>{item.challenge}</h3>
            <p>{item.solution}</p>
            <small>{item.learning}</small>
          </article>
        ))}
      </div>
    </div>
  );
}

function CaseResultScope({ resultScope }) {
  if (!resultScope) return null;

  return (
    <div className="case-method-card">
      <span>结果口径与证据边界</span>
      <p>{resultScope.scope}</p>
      <p>{resultScope.caveat}</p>
      <div>
        {resultScope.evidence.map((proof) => (
          <b key={proof}>{proof}</b>
        ))}
      </div>
    </div>
  );
}

function CaseTransferMethod({ method }) {
  if (!method) return null;

  return (
    <div className="case-review-transfer">
      <div className="case-board-head case-transfer-head">
        <span className="case-section-label">Method Transfer</span>
        <h3>{method.name}</h3>
        <p>{method.summary}</p>
      </div>
      <div className="case-transfer-grid" aria-label="方法论与迁移场景">
        <article className="case-transfer-card case-transfer-steps">
          <span>方法步骤</span>
          <h3>我会如何复用这套方法</h3>
          <ol>
            {method.steps.map((step, index) => (
              <li key={step}>
                <b>{String(index + 1).padStart(2, "0")}</b>
                <small>{step}</small>
              </li>
            ))}
          </ol>
        </article>
        <article className="case-transfer-card case-transfer-scenarios">
          <span>迁移场景</span>
          <h3>还能迁移到哪里</h3>
          <div>
            {method.scenarios.map((scenario) => (
              <b key={scenario}>{scenario}</b>
            ))}
          </div>
        </article>
      </div>
    </div>
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

function CaseConversionEvidencePanel({ items }) {
  if (!items?.length) return null;

  return (
    <section className="case-panel case-conversion-evidence">
      <div className="case-board-head">
        <span className="case-section-label">02B / Segmentation</span>
        <h2>分层触达与转化路径</h2>
        <p>把PPT中的标签分层和用户转化路径放回案例中，补上从“用户进入社群”到“被持续触达、参与裂变和下单”的中间链路。</p>
      </div>
      <div className="case-conversion-grid">
        {items.map((visual) => (
          <EvidenceFigure visual={visual} badge="路径证据" key={visual.src} />
        ))}
      </div>
    </section>
  );
}

function CaseExecutionMatrix({ stages }) {
  if (!stages?.length) return null;

  return (
    <div className="case-execution-matrix">
      {stages.map((stage, index) => (
        <article key={stage.stage}>
          <div className="case-execution-visual">
            <AssetImage src={stage.visual} alt={stage.stage} />
          </div>
          <div className="case-execution-copy">
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{stage.stage}</h3>
            <p>{stage.goal}</p>
            <ul>
              {stage.deliverables.map((deliverable) => (
                <li key={deliverable}>{deliverable}</li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </div>
  );
}

function CaseResultHighlights({ highlights, evidence }) {
  if (!highlights?.length) return null;

  return (
    <div className="case-result-evidence-area">
      <div className="case-result-highlight-grid" aria-label="增长结果拆解">
        {highlights.map((item) => (
          <article key={`${item.value}-${item.label}`}>
            <span>{item.label}</span>
            <strong>{item.value}</strong>
            <p>{item.detail}</p>
          </article>
        ))}
      </div>
      {evidence?.length > 0 && (
        <div className="case-result-evidence-grid">
          {evidence.map((visual) => (
            <EvidenceFigure visual={visual} badge="结果证据" key={visual.src} />
          ))}
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

        <div className="case-hero-role" aria-label="我的角色">
          <span>我的角色</span>
          <strong>{item.role}</strong>
        </div>

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
  const decision = caseDecisionContent[item.slug];
  const gallery = item.gallery || [];
  const visibleCaseNav = caseNav.filter(
    (nav) => nav.href !== "#model" || (caseBlueprints[item.slug] && !item.hideModel)
  );
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

          <CaseDecisionSnapshot decision={decision} />

          <CaseModelPanel item={item} />

          <div className="case-report-layout">
            <aside className="case-toc" aria-label="案例目录">
              <b>{item.shortTitle}</b>
              <nav>
                {visibleCaseNav.map((nav) => (
                  <a href={nav.href} key={nav.href}>
                    {item.validationStatus && nav.href === "#results" ? "验证结果" : nav.label}
                  </a>
                ))}
              </nav>
            </aside>

            <div className="case-report-body">
              <section className="case-story-panel case-question-panel" id="problem">
                <div className="case-story-copy">
                  <span className="case-section-label">01 / Judgement</span>
                  <h2>{decision ? "关键问题判断" : "背景问题"}</h2>
                  {decision ? (
                    <>
                      <p><strong>表面问题：</strong>{decision.problemJudgement.surface}</p>
                      <p><strong>真正卡点：</strong>{decision.problemJudgement.core}</p>
                      <div className="case-method-card">
                        <span>判断依据</span>
                        <div>
                          {decision.problemJudgement.reasoning.map((reason) => (
                            <b key={reason}>{reason}</b>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <p>{item.problem}</p>
                  )}
                </div>
                <EvidenceFigure
                  visual={problemVisual}
                  badge={item.sectionEvidenceLabels?.problem || "问题证据"}
                />
              </section>

              <section className="case-panel" id="strategy">
                <div className="case-board-head">
                  <span className="case-section-label">02 / Options</span>
                  <h2>{decision ? "方案推演与选择理由" : "我的策略判断"}</h2>
                  <p>{decision ? decision.selected.summary : item.strategy}</p>
                </div>
                {decision ? (
                  <>
                    <CaseDecisionOptions
                      options={decision.options}
                      selectedOptionId={decision.selected.optionId}
                    />
                    <CaseSelectedReason selected={decision.selected} />
                    <div className="case-result-evidence-grid">
                      <EvidenceFigure
                        visual={strategyVisual}
                        badge={item.sectionEvidenceLabels?.strategy || "方案证据"}
                      />
                    </div>
                  </>
                ) : (
                  <div className="case-story-panel case-story-panel-reverse">
                    <EvidenceFigure
                      visual={strategyVisual}
                      badge={item.sectionEvidenceLabels?.strategy || "策略证据"}
                    />
                    <div className="case-story-copy">
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
                  </div>
                )}
              </section>

              <CaseConversionEvidencePanel items={item.conversionEvidence} />

              <section className="case-panel case-execution-panel" id="actions">
                <div className="case-board-head">
                  <span className="case-section-label">03 / Execution</span>
                  <h2>{decision ? "执行路径与难点解决" : "执行路径"}</h2>
                  <p>{item.executionIntro || "将关键动作与对应产出放在同一条执行路径中。"}</p>
                </div>
                {item.executionMatrix ? (
                  <CaseExecutionMatrix stages={item.executionMatrix} />
                ) : (
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
                )}
                <CaseChallengeList items={decision?.challenges} />
              </section>

              <section className="case-panel case-results-panel" id="results">
                <div className={`case-result-top${item.resultHighlights ? " is-summary-only" : ""}`}>
                  <div>
                    <span className="case-section-label">
                      {item.validationStatus ? "04 / Validation" : "04 / Data"}
                    </span>
                    <h2>{item.validationStatus ? "验证结果与证据" : "结果、口径与证据"}</h2>
                    <p>{item.result}</p>
                  </div>
                  {!item.resultHighlights && (
                    <EvidenceFigure
                      visual={resultVisual}
                      badge={item.sectionEvidenceLabels?.result || "结果证据"}
                    />
                  )}
                </div>
                <CaseResultScope resultScope={decision?.resultScope} />
                {item.resultHighlights ? (
                  <CaseResultHighlights
                    highlights={item.resultHighlights}
                    evidence={item.resultEvidence}
                  />
                ) : item.validationStatus ? (
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
                  <span className="case-section-label">05 / Transfer</span>
                  <h2>{decision ? "方法沉淀与迁移场景" : "复盘总结"}</h2>
                  <p>{decision?.methodTransfer?.summary || item.review}</p>
                </div>
                <EvidenceFigure
                  visual={reviewVisual}
                  badge={item.sectionEvidenceLabels?.review || "复盘证据"}
                />
                <CaseTransferMethod method={decision?.methodTransfer} />
              </section>

              <section className="case-panel case-gallery-panel" id="gallery">
                <span className="case-section-label">06 / Evidence</span>
                <h2>证据链总览</h2>
                <p>
                  这些材料不是单独展示的图片，而是支撑前面问题判断、方案取舍、执行难点、结果口径和方法沉淀的项目证据。
                </p>
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
