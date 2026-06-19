import Head from "next/head";
import Link from "next/link";
import { useRef, useState } from "react";
import AssetImage from "../components/AssetImage";
import { caseStudies } from "../data/cases";
import { profile } from "../data/profile";
import { publicPath } from "../lib/paths";

const layerColors = ["red", "blue", "yellow", "green"];

const zoomSteps = [0.1, 0.2, 0.35, 0.5, 0.72, 0.85, 1, 1.15, 1.3];
const canvasSize = { width: 2480, height: 1560 };

const projectCards = {
  "tiny-achievement-app": {
    type: "AI产品验证",
    headline: "用7天验证一个可上线的AI辅助产品闭环",
    copy: "从用户洞察、MVP、PWA上线到行为信号，验证“正反馈记录”是否成立。",
    steps: ["洞察", "MVP", "上线", "验证"],
    proofs: [
      { value: "0→1", label: "PWA上线" },
      { value: "第3天", label: "主动打开" }
    ]
  },
  "meituan-supply-growth": {
    type: "供给生态",
    headline: "把KOS达人、商家供给与爆品池串成GMV系统",
    copy: "从达人训练到供给分层，搭建可持续放大的供给增长飞轮。",
    steps: ["KOS", "商家", "爆品", "GMV"],
    proofs: [
      { value: "520人", label: "KOS生态" },
      { value: "120万", label: "单场GMV峰值" }
    ]
  },
  "community-growth": {
    type: "增长漏斗",
    headline: "用社群裂变跑通同城私域低成本获客模型",
    copy: "把线下信任、社群承接、裂变传播和复盘复制串成用户增长漏斗。",
    steps: ["触达", "沉淀", "裂变", "转化"],
    proofs: [
      { value: "100W+", label: "C端增量" },
      { value: "1元", label: "单粉成本" }
    ]
  },
  "campaign-marketing": {
    type: "战役操盘",
    headline: "用爆品、渠道和战报节奏完成618月度GMV目标",
    copy: "把目标拆解、活动节奏、跨部门协作和风险预案组织成一张作战地图。",
    steps: ["目标", "爆品", "渠道", "复盘"],
    proofs: [
      { value: "3天", label: "完成月度目标" },
      { value: "60%", label: "GMV提升" }
    ]
  }
};

const methodBriefs = {
  假设驱动: "先定义问题和验证指标",
  最小验证: "先跑通一个可用闭环",
  分层运营: "按价值匹配资源和动作",
  结果复盘: "把项目沉淀成下一次SOP"
};

const identityMetrics = [
  {
    label: "AI产品验证",
    value: "0→1上线",
    detail: "小成就APP / LLM辅助开发"
  },
  {
    label: "用户增长",
    value: "20W+新增",
    detail: "滴滴 / 3个月GMV 300W+"
  },
  {
    label: "生态运营",
    value: "520人KOS",
    detail: "美团 / 单场GMV峰值120W+"
  }
];

const layers = [
  { href: "#personal-info", label: "个人信息", color: "blue" },
  { href: "#timeline", label: "经历时间线", color: "blue" },
  { href: "#capabilities", label: "核心能力", color: "yellow" },
  ...caseStudies.map((item, index) => ({
    href: `#project-${item.slug}`,
    label: item.shortTitle,
    color: layerColors[index % layerColors.length]
  })),
  { href: "#contact", label: "联系方式", color: "green" }
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

function ProjectNode({ item, index, dragProps }) {
  const card = projectCards[item.slug];
  const { style, ...eventProps } = dragProps;

  return (
    <section
      className={`canvas-card project-node-card project-node-${index + 1} project-card-${item.slug} draggable-node`}
      id={`project-${item.slug}`}
      style={{ ...style, "--project-accent": item.accent }}
      {...eventProps}
    >
      <div className="card-pin" />
      <div className="project-index">0{index + 1}</div>
      <div className="canvas-project-media">
        <AssetImage src={item.heroImage} alt={item.shortTitle} className="canvas-project-image" />
        <div className="project-model-strip" aria-label={`${item.shortTitle}核心模型`}>
          {(card?.steps || item.methods.slice(0, 4)).map((step) => (
            <span key={step}>{step}</span>
          ))}
        </div>
      </div>
      <div className="canvas-project-copy">
        <span>{card?.type || item.category}</span>
        <h3>{card?.headline || item.shortTitle}</h3>
        <p>{card?.copy || item.summary}</p>
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
  const [zoomIndex, setZoomIndex] = useState(6);
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

      <main className="os-page">
        <aside className="os-sidebar" aria-label="画布图层">
          <div className="os-brand">
            <span> L </span>
            <strong>LUQIAN Canvas</strong>
          </div>

          <nav className="layer-list">
            <h2>Layers</h2>
            {layers.map((layer) => (
              <a href={layer.href} key={layer.href}>
                <i className={layer.color} />
                {layer.label}
                <em>◎</em>
              </a>
            ))}
          </nav>

          <div className="os-create">+ 新建增长实验</div>

          <div className="mini-map">
            <h2>Minimap</h2>
            <div>
              <span className="mini-card one" />
              <span className="mini-card two" />
              <span className="mini-card three" />
            </div>
          </div>
        </aside>

        <section
          className="os-canvas"
          aria-label="卢倩个人OS画布"
          ref={canvasRef}
          onPointerDown={handleCanvasPointerDown}
          onPointerMove={handleCanvasPointerMove}
          onPointerUp={handleCanvasPointerUp}
          onPointerCancel={handleCanvasPointerUp}
        >

          <div className="canvas-stage-shell" style={scaledCanvasStyle}>
            <div className="canvas-stage" style={canvasStageStyle}>
            <div className="os-line line-a" />
            <div className="os-line line-b" />
            <div className="os-line line-c" />
            <div className="os-line line-d" />

            <figure className="profile-polaroid draggable-node" {...bindDrag("profile")}>
              <img src={publicPath("/assets/profile-luqian.jpg")} alt="卢倩个人照片" />
            </figure>

            <section
              className="canvas-card identity-card draggable-node"
              id="personal-info"
              {...bindDrag("personal-info")}
            >
              <div className="card-pin yellow" />
              <div className="identity-header">
                <div className="identity-title-block">
                  <div className="avatar-mark">LQ</div>
                  <div>
                    <h1>{profile.name}</h1>
                    <p>AI产品运营转型｜增长策略</p>
                    <span>0→1验证驱动</span>
                  </div>
                </div>
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
                  <a href={publicPath(profile.resumeUrl)} download>
                    简历
                  </a>
                </div>
              </div>
              <div className="identity-divider" />
              <p className="identity-note">1 person + AI = 1 growth team</p>
              <p className="identity-headline">
                把业务问题拆成可验证的产品 / 运营闭环。
              </p>
              <div className="identity-metric-grid">
                {identityMetrics.map((metric) => (
                  <article key={metric.label}>
                    <span>{metric.label}</span>
                    <strong>{metric.value}</strong>
                    <small>{metric.detail}</small>
                  </article>
                ))}
              </div>
              {visibleContact && (
                <div className="contact-popover" id="identity-contact-value">
                  {visibleContact === "email" ? (
                    <a href={`mailto:${profile.email}`}>{profile.email}</a>
                  ) : (
                    <a href={`tel:${profile.phone}`}>{profile.phone}</a>
                  )}
                </div>
              )}
            </section>

            <section
              className="canvas-card timeline-card draggable-node"
              id="timeline"
              {...bindDrag("timeline")}
            >
              <div className="card-pin blue" />
              <h2>
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
              <h2>技能 & 能力</h2>
              <div className="capability-list-mini">
                {profile.capabilityMap.map((block) => (
                  <article key={block.group}>
                    <b>{block.group}</b>
                    <span>{block.items.slice(0, 2).join(" · ")}</span>
                  </article>
                ))}
              </div>
            </section>

            <section className="canvas-card methods-card draggable-node" {...bindDrag("methods")}>
              <div className="card-pin blue" />
              <h2>我的方法论</h2>
              {profile.methods.map((method) => (
                <article key={method.title}>
                  <b>{method.title}</b>
                  <p>{methodBriefs[method.title] || method.text}</p>
                </article>
              ))}
              <div className="method-flow">问题定义 → MVP验证 → 数据复盘 → 规模化运营</div>
            </section>

            {caseStudies.map((item, index) => (
              <ProjectNode
                item={item}
                index={index}
                key={item.slug}
                dragProps={bindDrag(`project-${item.slug}`)}
              />
            ))}

            <section
              className="canvas-card contact-card draggable-node"
              id="contact"
              {...bindDrag("contact")}
            >
              <div className="card-pin green" />
              <h2>联系我</h2>
              <p>求职方向：AI产品运营、用户增长、私域增长。</p>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
              <a href={`tel:${profile.phone}`}>电话：{profile.phone}</a>
            </section>
            </div>
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

          <div className="canvas-toolbar" aria-label="画布操作提示">
            <span>Scroll</span>
            <em>缩放</em>
            <b>·</b>
            <span>Drag</span>
            <em>移动画布</em>
            <b>·</b>
            <span className="toolbar-icon">⌗</span>
            <em>拖拽卡片</em>
            <b>·</b>
            <span>Double</span>
            <em>双击修改</em>
          </div>
        </section>
      </main>
    </>
  );
}
