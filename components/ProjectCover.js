import { publicPath } from "../lib/paths";

const coverHeadings = {
  "product-validation": { kicker: "AI PRODUCT BUILD", stat: "7 DAYS" },
  "supply-flywheel": { kicker: "SUPPLY FLYWHEEL", stat: "520 KOS" },
  "growth-funnel": { kicker: "GROWTH FUNNEL", stat: "100W+ USERS" },
  "campaign-map": { kicker: "618 WAR MAP", stat: "+60% GMV" },
  "ai-apply-assistant": { kicker: "AI APPLY WORKBENCH", stat: "0→1 TOOL" }
};

function CoverHeading({ kicker, stat }) {
  return (
    <header className="project-cover-heading">
      <span>{kicker}</span>
      <strong>{stat}</strong>
    </header>
  );
}

function ProductValidationCover() {
  return (
    <div className="project-cover-product">
      <div className="project-cover-phone" aria-hidden="true">
        <i />
        <span />
        <span />
        <b />
      </div>
      <ol className="project-cover-flow" aria-label="产品验证流程">
        {["洞察", "MVP", "上线", "验证"].map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ol>
    </div>
  );
}

function SupplyFlywheelCover() {
  return (
    <div
      className="project-cover-flywheel"
      aria-label="供给飞轮：达人到商家、爆品和GMV"
    >
      <div className="project-cover-flywheel-ring" aria-hidden="true">
        <i />
        <i />
        <i />
        <i />
      </div>
      <span className="flywheel-node flywheel-node-talent">达人</span>
      <span className="flywheel-node flywheel-node-merchant">商家</span>
      <span className="flywheel-node flywheel-node-product">爆品</span>
      <span className="flywheel-node flywheel-node-gmv">GMV</span>
    </div>
  );
}

function GrowthFunnelCover() {
  return (
    <ol className="project-cover-funnel" aria-label="增长漏斗">
      {["触达", "沉淀", "裂变", "转化"].map((step) => (
        <li key={step}>{step}</li>
      ))}
    </ol>
  );
}

function CampaignMapCover() {
  return (
    <div className="project-cover-campaign" aria-label="618大促作战地图">
      <svg viewBox="0 0 240 88" aria-hidden="true">
        <line x1="120" y1="44" x2="50" y2="18" />
        <line x1="120" y1="44" x2="190" y2="18" />
        <line x1="120" y1="44" x2="190" y2="70" />
        <line x1="120" y1="44" x2="50" y2="70" />
      </svg>
      <strong className="campaign-command">
        <small>618</small>
        指挥
      </strong>
      <span className="campaign-node campaign-node-goal">目标</span>
      <span className="campaign-node campaign-node-product">爆品</span>
      <span className="campaign-node campaign-node-channel">渠道</span>
      <span className="campaign-node campaign-node-report">战报</span>
    </div>
  );
}

const coverBodies = {
  "product-validation": ProductValidationCover,
  "supply-flywheel": SupplyFlywheelCover,
  "growth-funnel": GrowthFunnelCover,
  "campaign-map": CampaignMapCover
};

export default function ProjectCover({ variant, accent, title, image, imageAlt }) {
  const heading = coverHeadings[variant] || coverHeadings["product-validation"];
  const CoverBody = coverBodies[variant] || ProductValidationCover;

  if (image) {
    return (
      <figure
        className={`project-cover project-cover-${variant} project-cover-screenshot`}
        style={{ "--cover-accent": accent }}
        aria-label={imageAlt || `${title}界面截图`}
      >
        <img
          src={publicPath(image)}
          alt={imageAlt || `${title}界面截图`}
          loading="lazy"
          decoding="async"
        />
        <figcaption className="project-cover-screenshot-caption">
          <span>{heading.kicker}</span>
          <strong>{heading.stat}</strong>
        </figcaption>
      </figure>
    );
  }

  return (
    <figure
      className={`project-cover project-cover-${variant}`}
      style={{ "--cover-accent": accent }}
      aria-label={`${title}业务模型：${heading.kicker}`}
    >
      <CoverHeading {...heading} />
      <CoverBody />
    </figure>
  );
}
