import CaseCard from "../../components/CaseCard";
import SectionHeader from "../../components/SectionHeader";
import SiteShell from "../../components/SiteShell";
import { caseStudies } from "../../data/cases";

export default function CasesPage() {
  return (
    <SiteShell title="Case Study" description="小成就APP、美团团买买、社群裂变与活动营销案例">
      <section className="page-hero">
        <div className="eyebrow">Case Study</div>
        <h1>把真实项目拆成商业案例：问题、策略、动作、结果与复盘</h1>
        <p>
          四个案例覆盖产品验证、供给运营、用户增长和活动营销。每个案例都围绕一个业务问题展开，展示如何从目标拆解进入执行。
        </p>
      </section>

      <section className="section-block">
        <SectionHeader title="重点案例" />
        <div className="case-list">
          {caseStudies.map((item) => (
            <CaseCard item={item} key={item.slug} />
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
