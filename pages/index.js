import Head from "next/head";
import Link from "next/link";
import AssetImage from "../components/AssetImage";
import { caseStudies } from "../data/cases";
import { profile } from "../data/profile";
import { publicPath } from "../lib/paths";

const layers = [
  { href: "#personal-info", label: "个人信息", color: "blue" },
  { href: "#timeline", label: "经历时间线", color: "blue" },
  { href: "#capabilities", label: "核心能力", color: "yellow" },
  { href: "#project-experience", label: "项目经历", color: "red" },
  { href: "#contact", label: "联系方式", color: "green" }
];

function ProjectNode({ item, index }) {
  return (
    <article className="canvas-project">
      <div className="project-index">0{index + 1}</div>
      <AssetImage src={item.heroImage} alt={item.shortTitle} className="canvas-project-image" />
      <div className="canvas-project-copy">
        <span>{item.category}</span>
        <h3>{item.shortTitle}</h3>
        <p>{item.summary}</p>
        <div className="canvas-project-metrics">
          {item.metrics.slice(0, 2).map((metric) => (
            <b key={`${item.slug}-${metric.label}`}>
              {metric.value}
              <small>{metric.label}</small>
            </b>
          ))}
        </div>
        <Link href={`/cases/${item.slug}`}>查看完整案例</Link>
      </div>
    </article>
  );
}

export default function HomePage() {
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
            Scroll 浏览 · Click 跳转 · 先看全貌，再看细节
          </div>

          <div className="canvas-stage">
            <div className="os-line line-a" />
            <div className="os-line line-b" />
            <div className="os-line line-c" />
            <div className="os-line line-d" />

            <figure className="profile-polaroid">
              <img src={publicPath("/assets/profile-luqian.jpg")} alt="卢倩个人照片" />
              <figcaption>用户增长 · 私域运营 · 项目操盘</figcaption>
            </figure>

            <section className="canvas-card identity-card" id="personal-info">
              <div className="card-pin yellow" />
              <div className="avatar-mark">LQ</div>
              <h1>{profile.name}</h1>
              <p>{profile.headline}</p>
              <div className="os-tags">
                {profile.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <div className="contact-inline">
                <a href={`mailto:${profile.email}`}>Email</a>
                <a href={publicPath(profile.resumeUrl)} download>
                  下载简历
                </a>
              </div>
            </section>

            <section className="canvas-card timeline-card" id="timeline">
              <div className="card-pin blue" />
              <h2>经历时间线</h2>
              <div className="timeline-mini">
                {profile.experience.map((item, index) => (
                  <article key={item}>
                    <span>0{index + 1}</span>
                    <p>{item}</p>
                  </article>
                ))}
              </div>
            </section>

            <section className="sticky-note note-yellow">
              <b>核心叙事</b>
              <p>
                我擅长把业务问题拆成用户路径、运营动作和数据指标，再用小步验证把经验沉淀成可复用模型。
              </p>
            </section>

            <section className="quote-card">
              <p>找到用户会行动的理由，然后让路径变短。</p>
              <span>Growth note</span>
            </section>

            <section className="canvas-card capability-card" id="capabilities">
              <div className="card-pin yellow" />
              <h2>技能 & 能力</h2>
              <div className="capability-pills">
                {profile.capabilityMap.flatMap((block) =>
                  block.items.slice(0, 2).map((item) => <span key={item}>{item}</span>)
                )}
              </div>
            </section>

            <section className="canvas-card methods-card">
              <div className="card-pin blue" />
              <h2>我的方法论</h2>
              {profile.methods.map((method) => (
                <article key={method.title}>
                  <b>{method.title}</b>
                  <p>{method.text}</p>
                </article>
              ))}
            </section>

            <section className="canvas-card project-board" id="project-experience">
              <div className="card-pin red" />
              <div className="board-head">
                <span>Project Experience</span>
                <h2>3个项目经历</h2>
                <p>直接在一个画布里看项目全貌；需要深挖时，再进入单个案例详情。</p>
              </div>
              <div className="canvas-project-grid">
                {caseStudies.map((item, index) => (
                  <ProjectNode item={item} index={index} key={item.slug} />
                ))}
              </div>
            </section>

            <section className="canvas-card contact-card" id="contact">
              <div className="card-pin green" />
              <h2>联系我</h2>
              <p>求职方向：用户运营、增长运营、私域运营、社区电商/本地生活运营。</p>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
              <b>微信：{profile.wechat}</b>
            </section>
          </div>

          <div className="os-bottom-dock">
            <a href="#personal-info">01 个人信息</a>
            <a href="#project-experience">02 项目经历</a>
            <span>03 我的OS</span>
          </div>
        </section>
      </main>
    </>
  );
}
