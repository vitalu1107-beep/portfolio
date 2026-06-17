import Link from "next/link";
import CaseCard from "../components/CaseCard";
import SectionHeader from "../components/SectionHeader";
import SiteShell from "../components/SiteShell";
import { caseStudies, featuredCaseSlugs } from "../data/cases";
import { profile } from "../data/profile";

const featuredCases = featuredCaseSlugs.map((slug) =>
  caseStudies.find((item) => item.slug === slug)
);

export default function HomePage() {
  return (
    <SiteShell title="Home" description={profile.headline}>
      <section className="hero-section">
        <div className="hero-copy">
          <div className="eyebrow">用户运营作品集 2026</div>
          <h1>{profile.headline}</h1>
          <p>{profile.summary}</p>
          <div className="tag-row">
            {profile.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          <div className="hero-actions">
            <Link className="button primary" href="/cases">
              查看案例
            </Link>
            <Link className="button secondary" href="/contact">
              联系我
            </Link>
          </div>
        </div>
        <aside className="hero-terminal" aria-label="核心结果">
          <div className="window-chrome">
            <span className="dot red" />
            <span className="dot yellow" />
            <span className="dot green" />
            <b>growth-os / dashboard</b>
          </div>
          <div className="terminal-body">
            <p>
              <span>$</span> whoami
            </p>
            <strong>{profile.role}</strong>
            <p>
              <span>$</span> cat core-metrics.json
            </p>
            <div className="terminal-metrics">
              {profile.highlights.map((item) => (
                <div key={item.label}>
                  <b>{item.value}</b>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </section>

      <section className="section-block">
        <SectionHeader eyebrow="Featured Work" title="3个重点项目入口">
          从小成就 APP 的产品验证，到社群裂变和618活动营销，把项目经历拆成可阅读的商业案例。
        </SectionHeader>
        <div className="case-grid">
          {featuredCases.map((item) => (
            <CaseCard item={item} key={item.slug} />
          ))}
        </div>
      </section>

      <section className="section-block split-band">
        <div>
          <div className="eyebrow">Operating Model</div>
          <h2>我的工作方式：先拆模型，再跑闭环</h2>
        </div>
        <div className="workflow">
          <span>业务目标</span>
          <span>用户分层</span>
          <span>转化路径</span>
          <span>执行SOP</span>
          <span>数据复盘</span>
        </div>
      </section>
    </SiteShell>
  );
}
