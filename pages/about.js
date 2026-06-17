import CapabilityMap from "../components/CapabilityMap";
import SectionHeader from "../components/SectionHeader";
import SiteShell from "../components/SiteShell";
import { profile } from "../data/profile";

export default function AboutPage() {
  return (
    <SiteShell title="About" description="卢倩的运营背景、增长方法论与能力结构">
      <section className="page-hero">
        <div className="eyebrow">About</div>
        <h1>从一线运营到增长模型，把复杂项目拆成可执行动作</h1>
        <p>{profile.summary}</p>
      </section>

      <section className="section-block two-column">
        <SectionHeader title="运营经历">
          我的经历集中在电商、社区团购、内容增长和私域成交，既做过冷启动，也做过大规模用户池运营。
        </SectionHeader>
        <div className="timeline">
          {profile.experience.map((item, index) => (
            <article key={item}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block">
        <SectionHeader eyebrow="Methodology" title="我的方法论">
          用 AARRR 拆增长，用 RFM 做分层，用 MVP 先验证关键链路，再把有效动作复制成 SOP。
        </SectionHeader>
        <div className="method-grid">
          {profile.methods.map((item) => (
            <article key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block">
        <SectionHeader eyebrow="Capability Map" title="能力结构图">
          这不是单点技能列表，而是一套围绕业务结果组织的运营能力栈。
        </SectionHeader>
        <CapabilityMap items={profile.capabilityMap} />
      </section>
    </SiteShell>
  );
}
