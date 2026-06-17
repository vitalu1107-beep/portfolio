import Head from "next/head";
import Link from "next/link";
import { useRef, useState } from "react";
import AssetImage from "../components/AssetImage";
import { caseStudies } from "../data/cases";
import { profile } from "../data/profile";
import { publicPath } from "../lib/paths";

const layerColors = ["red", "blue", "yellow", "green"];

const zoomSteps = [0.1, 0.2, 0.35, 0.5, 0.72, 0.85, 1, 1.15, 1.3];

const projectBriefs = {
  "tiny-achievement-app": "7天跑通从问题定义到上线验证的产品闭环。",
  "meituan-supply-growth": "搭建KOS、商家供给和爆品成交增长体系。",
  "community-growth": "冷启动同城私域流量池，把裂变活动复制成模型。",
  "campaign-marketing": "用爆品、渠道和战报节奏拉升活动GMV。"
};

const methodBriefs = {
  假设驱动: "先定义问题和验证指标",
  最小验证: "先跑通一个可用闭环",
  分层运营: "按价值匹配资源和动作",
  结果复盘: "把项目沉淀成下一次SOP"
};

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
  return (
    <section
      className={`canvas-card project-node-card project-node-${index + 1} draggable-node`}
      id={`project-${item.slug}`}
      {...dragProps}
    >
      <div className="card-pin red" />
      <div className="project-index">0{index + 1}</div>
      <AssetImage src={item.heroImage} alt={item.shortTitle} className="canvas-project-image" />
      <div className="canvas-project-copy">
        <span>{item.category}</span>
        <h3>{item.shortTitle}</h3>
        <p>{projectBriefs[item.slug] || item.summary}</p>
        <div className="canvas-project-metrics">
          {item.metrics.slice(0, 2).map((metric) => (
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
  const dragRef = useRef(null);
  const [positions, setPositions] = useState({});
  const [zoomIndex, setZoomIndex] = useState(6);
  const [visibleContact, setVisibleContact] = useState(null);
  const zoom = zoomSteps[zoomIndex];

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

        <section className="os-canvas" aria-label="卢倩个人OS画布">
          <div className="canvas-helper">
            Scroll 浏览 · Drag 移动卡片 · 右下角缩放
          </div>

          <div className="canvas-stage" style={{ "--canvas-zoom": zoom }}>
            <div className="canvas-zone zone-intro">
              <span>01 个人定位</span>
            </div>
            <div className="canvas-zone zone-system">
              <span>02 方法与经历</span>
            </div>
            <div className="canvas-zone zone-projects">
              <span>03 项目证据</span>
            </div>
            <div className="canvas-zone zone-contact">
              <span>04 联系方式</span>
            </div>

            <div className="os-line line-a" />
            <div className="os-line line-b" />
            <div className="os-line line-c" />
            <div className="os-line line-d" />

            <figure className="profile-polaroid draggable-node" {...bindDrag("profile")}>
              <img src={publicPath("/assets/profile-luqian.jpg")} alt="卢倩个人照片" />
              <figcaption>AI产品运营 · 增长策略</figcaption>
            </figure>

            <section
              className="canvas-card identity-card draggable-node"
              id="personal-info"
              {...bindDrag("personal-info")}
            >
              <div className="card-pin yellow" />
              <div className="avatar-mark">LQ</div>
              <h1>{profile.name}</h1>
              <p>{profile.headline}</p>
              <div className="os-tags os-tags-compact">
                {profile.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <div className="identity-proof-list">
                <span>小成就APP：AI产品0→1上线｜LLM辅助开发</span>
                <span>滴滴：2个月新增20W+用户｜3个月GMV 300W+</span>
                <span>美团：KOS生态520人｜单场GMV峰值120W+</span>
              </div>
              <div className="contact-inline contact-reveal">
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
                  下载简历
                </a>
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
              <h2>经历时间线</h2>
              <div className="timeline-mini">
                {profile.experience.map((item, index) => {
                  const experience = parseExperience(item);

                  return (
                    <article key={item}>
                      <span>0{index + 1}</span>
                      <p>
                        <b>{experience.period}</b>
                        {experience.title}
                      </p>
                    </article>
                  );
                })}
              </div>
            </section>

            <section className="sticky-note note-yellow draggable-node" {...bindDrag("story")}>
              <b>核心叙事</b>
              <p>拆路径、配动作、看数据，把经验沉淀成可复用模型。</p>
            </section>

            <section className="quote-card draggable-node" {...bindDrag("quote")}>
              <p>让用户愿意行动，再让路径变短。</p>
              <span>Growth note</span>
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

          <div className="zoom-controls" aria-label="画布缩放控制">
            <button type="button" onClick={zoomOut} aria-label="缩小画布">
              -
            </button>
            <span>{Math.round(zoom * 100)}%</span>
            <button type="button" onClick={zoomIn} aria-label="放大画布">
              +
            </button>
          </div>
        </section>
      </main>
    </>
  );
}
