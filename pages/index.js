import Head from "next/head";
import Link from "next/link";
import { useRef, useState } from "react";
import CanvasConnections from "../components/CanvasConnections";
import ProjectCover from "../components/ProjectCover";
import { caseStudies } from "../data/cases";
import { profile } from "../data/profile";
import { projectCards } from "../data/projectCards.mjs";
import { publicPath } from "../lib/paths";

const layerColors = ["green", "green", "green", "green"];

const zoomSteps = [0.7, 0.8, 0.9, 1, 1.1];
const defaultZoomIndex = 1;
const canvasSize = { width: 1240, height: 820 };
const canvasNodes = {
  "personal-info": { left: 40, top: 44, width: 330, height: 286 },
  "ai-thread": { left: 40, top: 348, width: 330, height: 82 },
  methods: { left: 398, top: 44, width: 410, height: 386 },
  capabilities: { left: 836, top: 44, width: 364, height: 236 },
  timeline: { left: 836, top: 304, width: 364, height: 206 }
};
const canvasConnections = [
  {
    id: "personal-info-ai-thread",
    from: "personal-info",
    fromSide: "bottom",
    to: "ai-thread",
    toSide: "top",
    color: "#16a34a"
  },
  {
    id: "ai-thread-timeline",
    from: "ai-thread",
    fromSide: "right",
    to: "methods",
    toSide: "left",
    color: "#16a34a"
  },
  {
    id: "methods-capabilities",
    from: "methods",
    fromSide: "right",
    to: "capabilities",
    toSide: "left",
    color: "#16a34a"
  },
  {
    id: "capabilities-timeline",
    from: "capabilities",
    fromSide: "bottom",
    to: "timeline",
    toSide: "top",
    color: "#86efac"
  }
];

const methodSteps = [
  {
    number: "01",
    title: "识别场景，找到卡点",
    text: "从用户洞察与业务场景中定位真实问题。",
    tags: ["真实场景", "用户卡点", "成功标准"]
  },
  {
    number: "02",
    title: "定义任务，做成原型",
    text: "把需求拆成 AI 可协助完成的任务与交互。",
    tags: ["任务拆解", "AI输出", "人机接力"]
  },
  {
    number: "03",
    title: "验证反馈，判断放大",
    text: "用 MVP、行为信号和复盘数据决定是否迭代。",
    tags: ["MVP验证", "行为数据", "持续迭代"]
  }
];

const capabilityTags = [
  { label: "AI产品思维", tone: "green solid" },
  { label: "AI产品实践", tone: "yellow solid" },
  { label: "LLM应用开发", tone: "green" },
  { label: "Vibe Coding", tone: "yellow" },
  { label: "用户运营", tone: "green" },
  { label: "增长策略", tone: "green" },
  { label: "商家运营", tone: "green" },
  { label: "项目管理", tone: "yellow" }
];

const aiThreadSteps = [
  "用户洞察",
  "任务定义",
  "AI辅助原型",
  "数据复盘"
];

const layers = [
  { href: "#personal-info", label: "个人定位", color: "blue" },
  { href: "#methods", label: "AI方法论", color: "yellow" },
  ...caseStudies.map((item, index) => ({
    href: `#project-${item.slug}`,
    label: item.shortTitle,
    color: layerColors[index % layerColors.length]
  })),
  { href: "#timeline", label: "经历时间线", color: "blue" },
  { href: "#capabilities", label: "能力结构", color: "green" }
];

const mobileLayers = [
  { href: "#personal-info", label: "定位" },
  { href: "#methods", label: "方法" },
  { href: "#project-tiny-achievement-app", label: "项目" },
  { href: "#timeline", label: "经历" },
  { href: "#personal-info", label: "联系" }
];

function parseExperience(item) {
  const [meta, summary = ""] = item.split("：");
  const [period, company = "", role = ""] = meta.split("｜");

  return {
    period,
    title: [company, role].filter(Boolean).join(" · "),
    summary
  };
}

function isMobileCanvas() {
  return typeof window !== "undefined" && window.matchMedia("(max-width: 1023px)").matches;
}

function ProjectNode({ item, index, dragProps }) {
  const card = projectCards[item.slug];
  const { style, ...eventProps } = dragProps;

  return (
    <section
      className={`canvas-card project-node-card project-node-${index + 1} project-card-${item.slug} draggable-node`}
      id={`project-${item.slug}`}
      style={{
        ...style,
        "--project-accent": "var(--portfolio-primary)",
        "--project-ink": "var(--portfolio-deep)"
      }}
      {...eventProps}
    >
      <div className="card-pin" />
      <div className="project-index">0{index + 1}</div>
      <div className="project-label-row">
        <div className="project-badge-stack">
          <div>
            <span className="project-owner-label">{card.owner}</span>
            <span className="project-type-label">{card.project}</span>
          </div>
          <p className="project-evidence-line">{card.evidenceType}</p>
          <p className="project-role-line">我的角色：{card.role}</p>
        </div>
      </div>
      <div className="canvas-project-media">
        <ProjectCover variant={card.cover} accent="var(--portfolio-primary)" title={card.project} />
      </div>
      <div className="canvas-project-copy">
        <h3 title={card?.headline || item.shortTitle}>{card?.headline || item.shortTitle}</h3>
        <div className="canvas-project-steps" aria-label={`${card.project}项目路径`}>
          {card.steps.map((step) => (
            <span key={`${item.slug}-${step}`}>{step}</span>
          ))}
        </div>
        <div className="canvas-project-metrics">
          {(card?.proofs || item.metrics.slice(0, 2)).map((metric) => (
            <b key={`${item.slug}-${metric.label}`}>
              {metric.value}
              <small>{metric.label}</small>
            </b>
          ))}
        </div>
        <div className="project-link-row">
          <Link href={`/cases/${item.slug}`}>查看完整案例</Link>
          {item.externalLinks?.map((link) => (
            <a href={link.href} target="_blank" rel="noreferrer" key={link.href}>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  const canvasRef = useRef(null);
  const dragRef = useRef(null);
  const panRef = useRef(null);
  const [positions, setPositions] = useState({});
  const [zoomIndex, setZoomIndex] = useState(defaultZoomIndex);
  const [visibleContact, setVisibleContact] = useState(null);
  const zoom = zoomSteps[zoomIndex];
  const scaledCanvasStyle = {
    width: `${canvasSize.width * zoom}px`,
    height: `${canvasSize.height * zoom}px`
  };
  const canvasStageStyle = {
    width: `${canvasSize.width}px`,
    height: `${canvasSize.height}px`,
    transform: `scale(${zoom})`
  };

  function getNodeStyle(id) {
    const position = positions[id] || { x: 0, y: 0 };
    return {
      transform: `translate(${position.x}px, ${position.y}px)`
    };
  }

  function handlePointerDown(event, id) {
    if (isMobileCanvas()) return;
    if (event.button !== 0 || event.target.closest("a, button")) return;
    const position = positions[id] || { x: 0, y: 0 };
    dragRef.current = {
      id,
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      originX: position.x,
      originY: position.y
    };
    event.currentTarget.setPointerCapture(event.pointerId);
    event.currentTarget.classList.add("is-dragging");
  }

  function handlePointerMove(event) {
    const drag = dragRef.current;
    if (!drag) return;
    const next = {
      x: drag.originX + (event.clientX - drag.startX) / zoom,
      y: drag.originY + (event.clientY - drag.startY) / zoom
    };
    setPositions((current) => ({
      ...current,
      [drag.id]: next
    }));
  }

  function handlePointerUp(event) {
    const drag = dragRef.current;
    if (!drag) return;
    event.currentTarget.releasePointerCapture(drag.pointerId);
    event.currentTarget.classList.remove("is-dragging");
    dragRef.current = null;
  }

  function handleCanvasPointerDown(event) {
    if (isMobileCanvas()) return;
    if (
      event.button !== 0 ||
      event.target.closest(".draggable-node, .canvas-toolbar, .zoom-controls, a, button")
    ) {
      return;
    }
    const canvas = canvasRef.current;
    if (!canvas) return;
    panRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      scrollLeft: canvas.scrollLeft,
      scrollTop: canvas.scrollTop
    };
    event.currentTarget.setPointerCapture(event.pointerId);
    event.currentTarget.classList.add("is-panning");
  }

  function handleCanvasPointerMove(event) {
    const pan = panRef.current;
    const canvas = canvasRef.current;
    if (!pan || !canvas) return;
    canvas.scrollLeft = pan.scrollLeft - (event.clientX - pan.startX);
    canvas.scrollTop = pan.scrollTop - (event.clientY - pan.startY);
  }

  function handleCanvasPointerUp(event) {
    const pan = panRef.current;
    if (!pan) return;
    event.currentTarget.releasePointerCapture(pan.pointerId);
    event.currentTarget.classList.remove("is-panning");
    panRef.current = null;
  }

  function bindDrag(id) {
    return {
      style: getNodeStyle(id),
      onPointerDown: (event) => handlePointerDown(event, id),
      onPointerMove: handlePointerMove,
      onPointerUp: handlePointerUp,
      onPointerCancel: handlePointerUp
    };
  }

  function toggleContact(type) {
    setVisibleContact((current) => (current === type ? null : type));
  }

  function zoomOut() {
    setZoomIndex((current) => Math.max(0, current - 1));
  }

  function zoomIn() {
    setZoomIndex((current) => Math.min(zoomSteps.length - 1, current + 1));
  }

  return (
    <>
      <Head>
        <title>卢倩 Growth OS</title>
        <meta name="description" content={profile.headline} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="portfolio-page os-page">
        <aside className="os-sidebar" aria-label="作品集阅读路径">
          <div className="os-brand">
            <span> L </span>
            <strong>LUQIAN Canvas</strong>
          </div>

          <nav className="layer-list">
            <h2>阅读路径</h2>
            {layers.map((layer) => (
              <a href={layer.href} key={layer.href}>
                <i className={layer.color} />
                {layer.label}
                <em>◎</em>
              </a>
            ))}
          </nav>

          <nav className="mobile-layer-list" aria-label="手机端阅读路径">
            {mobileLayers.map((layer) => (
              <a href={layer.href} key={`${layer.href}-${layer.label}`}>
                {layer.label}
              </a>
            ))}
          </nav>

          <div className="os-create reading-cue">
            <b>3分钟阅读建议</b>
            <span>先看 AI 定位与方法，再进入小成就和3个增长案例。</span>
          </div>

          <div className="mini-map">
            <h2>画布概览</h2>
            <div>
              <span className="mini-card one" />
              <span className="mini-card two" />
              <span className="mini-card three" />
            </div>
          </div>
        </aside>

        <section className="main-area os-canvas" aria-label="卢倩个人OS画布">
          <div className="top-toolbar">
            <div className="canvas-toolbar" aria-label="画布操作提示">
              <span>Scroll</span>
              <em>缩放</em>
              <b>·</b>
              <span>Swipe</span>
              <em>左右滑动</em>
              <b>·</b>
              <span>Click</span>
              <em>查看案例</em>
            </div>

            <div className="zoom-controls" aria-label="画布缩放控制">
              <button
                type="button"
                onClick={zoomOut}
                aria-label="缩小画布"
                disabled={zoomIndex === 0}
              >
                -
              </button>
              <span>{Math.round(zoom * 100)}%</span>
              <button
                type="button"
                onClick={zoomIn}
                aria-label="放大画布"
                disabled={zoomIndex === zoomSteps.length - 1}
              >
                +
              </button>
            </div>
          </div>

          <div
            className="canvas-viewport"
            ref={canvasRef}
            onPointerDown={handleCanvasPointerDown}
            onPointerMove={handleCanvasPointerMove}
            onPointerUp={handleCanvasPointerUp}
            onPointerCancel={handleCanvasPointerUp}
          >
          <div className="stage-shell canvas-stage-shell" style={scaledCanvasStyle}>
            <div className="canvas-stage" style={canvasStageStyle}>
            <CanvasConnections
              connections={canvasConnections}
              nodes={canvasNodes}
              positions={positions}
              width={canvasSize.width}
              height={canvasSize.height}
            />

            <section
              className="canvas-card identity-card draggable-node"
              id="personal-info"
              {...bindDrag("personal-info")}
            >
              <div className="card-pin yellow" />
              <div className="identity-glass-card identity-hero-card">
                <img
                  className="identity-avatar-photo"
                  src={publicPath("/assets/profile-luqian.jpg")}
                  alt="卢倩头像"
                />
                <div className="identity-title-block">
                  <span className="identity-eyebrow">LU QIAN</span>
                  <div>
                    <h1>{profile.name} Lu Qian</h1>
                    <p>AI产品运营｜用户运营</p>
                  </div>
                </div>
              </div>
              <div className="identity-glass-card identity-slogan-card">
                <span>Slogan</span>
                <strong>用 AI 把用户洞察变成可验证的增长闭环</strong>
              </div>
              <div className="identity-glass-card identity-contact-card">
                <div className="identity-actions">
                  <button
                    type="button"
                    onClick={() => toggleContact("email")}
                    aria-expanded={visibleContact === "email"}
                    aria-controls="identity-contact-value"
                  >
                    邮箱
                  </button>
                  <button
                    type="button"
                    onClick={() => toggleContact("phone")}
                    aria-expanded={visibleContact === "phone"}
                    aria-controls="identity-contact-value"
                  >
                    电话
                  </button>
                  <button
                    type="button"
                    onClick={() => toggleContact("wechat")}
                    aria-expanded={visibleContact === "wechat"}
                    aria-controls="identity-contact-value"
                  >
                    微信
                  </button>
                  <a href={publicPath(profile.resumeUrl)} download>
                    简历
                  </a>
                </div>
              </div>
              {visibleContact && (
                <div className="contact-popover" id="identity-contact-value">
                  {visibleContact === "email" ? (
                    <a href={`mailto:${profile.email}`}>邮箱：{profile.email}</a>
                  ) : visibleContact === "phone" ? (
                    <a href={`tel:${profile.phone}`}>电话：{profile.phone}</a>
                  ) : (
                    <span>微信：{profile.wechat}</span>
                  )}
                </div>
              )}
            </section>

            <section
              className="canvas-card ai-thread-card draggable-node"
              id="ai-thread"
              {...bindDrag("ai-thread")}
            >
              <div className="card-pin green" />
              <span className="ai-thread-eyebrow">AI PRODUCT OPS THREAD</span>
              <strong>把运营经验迁移到 AI 产品闭环</strong>
              <div className="ai-thread-steps">
                {aiThreadSteps.map((step) => (
                  <span key={step}>{step}</span>
                ))}
              </div>
            </section>

            <section
              className="canvas-card timeline-card draggable-node"
              id="timeline"
              {...bindDrag("timeline")}
            >
              <div className="card-pin blue" />
              <h2 className="canvas-section-heading">
                <span>📍</span>
                经历时间线
              </h2>
              <div className="timeline-mini">
                {profile.experience.map((item, index) => {
                  const experience = parseExperience(item);

                  return (
                    <article key={item}>
                      <i />
                      <div>
                        <span>{experience.period}</span>
                        <b>{experience.title}</b>
                        {experience.summary && <small>{experience.summary}</small>}
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>

            <section
              className="canvas-card capability-card draggable-node"
              id="capabilities"
              {...bindDrag("capabilities")}
            >
              <div className="card-pin yellow" />
              <h2 className="capability-heading">
                <span>🛠</span>
                技能 & 能力
              </h2>
              <div className="capability-pill-grid">
                {capabilityTags.map((tag) => (
                  <span className={`capability-pill ${tag.tone}`} key={tag.label}>
                    {tag.label}
                  </span>
                ))}
              </div>
            </section>

            <section
              className="canvas-card methods-card draggable-node"
              id="methods"
              {...bindDrag("methods")}
            >
              <div className="card-pin blue" />
              <h2 className="canvas-section-heading">
                <span>🧭</span>
                我的方法论
              </h2>
              <p className="method-lead">从用户需求到 AI 任务闭环</p>
              <div className="method-process">
                {methodSteps.map((step) => (
                  <article className={`method-step step-${step.number}`} key={step.number}>
                    <span>{step.number}</span>
                    <div>
                      <b>{step.title}</b>
                      <p>{step.text}</p>
                      <div className="method-tags-compact">
                        {step.tags.map((tag) => (
                          <em key={tag}>{tag}</em>
                        ))}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
              <div className="method-flow">
                从用户洞察与业务场景出发，把 AI 能力落到可完成、可验证、可复盘的任务闭环。
              </div>
            </section>

            <div className="mobile-case-heading" aria-label="项目案例">
              <span>Case Evidence</span>
              <strong>4个项目案例</strong>
              <p>从 AI 产品验证到增长、供给和活动操盘。</p>
            </div>

            {caseStudies.map((item, index) => (
              <ProjectNode
                item={item}
                index={index}
                key={item.slug}
                dragProps={bindDrag(`project-${item.slug}`)}
              />
            ))}

            </div>
          </div>
          </div>
        </section>
      </main>
    </>
  );
}
