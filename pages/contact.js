import Link from "next/link";
import SectionHeader from "../components/SectionHeader";
import SiteShell from "../components/SiteShell";
import { profile } from "../data/profile";
import { publicPath } from "../lib/paths";

export default function ContactPage() {
  return (
    <SiteShell title="Contact" description="联系卢倩">
      <section className="page-hero">
        <div className="eyebrow">Contact</div>
        <h1>期待和你聊聊用户增长、私域运营与电商业务增长</h1>
        <p>欢迎通过邮箱或微信联系我，进一步了解项目细节、业务方法和岗位匹配度。</p>
      </section>

      <section className="section-block contact-grid">
        <article>
          <SectionHeader title="联系方式" />
          <div className="contact-list">
            <div>
              <span>邮箱</span>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </div>
            <div>
              <span>微信</span>
              <b>{profile.wechat}</b>
            </div>
          </div>
        </article>
        <article>
          <SectionHeader title="简历下载" />
          <p>下载完整简历，了解工作经历、项目职责与更多补充信息。</p>
          <a className="button primary" href={publicPath(profile.resumeUrl)} download>
            下载简历
          </a>
        </article>
      </section>

      <section className="section-block next-step">
        <span>Looking for</span>
        <p>用户运营、增长运营、私域运营、社区电商/本地生活运营相关岗位。</p>
        <Link className="text-link" href="/cases">
          回看项目案例
        </Link>
      </section>
    </SiteShell>
  );
}
