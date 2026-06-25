export const tinyAchievementCase = {
  slug: "tiny-achievement-app",
  title: "小成就 APP｜从0到1交付可安装PWA并完成首轮验证",
  shortTitle: "小成就 APP",
  category: "AI产品实践",
  company: "独立AI项目",
  role: "产品策划 / AI辅助开发 / 体验验证",
  period: "2026.01.31 - 2026.02.15",
  summary:
    "围绕“如何让行动记录更少压力、更有正反馈”这一问题，独立完成需求定义、MVP取舍、AI辅助开发、PWA部署与首轮个人自测，并持续迭代为可安装、支持离线的产品。",
  hero: {
    layout: "narrative-product",
    index: "01",
    label: "小成就 APP · SMALL WINS",
    title: "从行为假设到可安装产品的0→1实践",
    summary:
      "用最小产品闭环验证“低压力记录能否增强完成感”，独立完成原型、AI辅助开发、部署与首轮自测。",
    visual: "/assets/cases/app-real-record.png",
    validationNote:
      "已验证产品交付与核心路径；使用反馈来自个人自测，不外推为多用户留存结论。",
    metrics: [
      { value: "7天", label: "首轮MVP" },
      { value: "5个", label: "核心功能模块" },
      { value: "PWA", label: "可安装 · 可离线" }
    ]
  },
  heroImage: "/assets/cases/app-hero.jpg",
  accent: "#16a34a",
  metrics: [
    { value: "7天", label: "首轮MVP周期" },
    { value: "5个", label: "核心功能模块" },
    { value: "PWA", label: "可安装 · 可离线" },
    { value: "V2", label: "持续版本迭代" }
  ],
  problem:
    "传统任务工具通常从待办与未完成出发，容易放大压力。项目将核心假设定义为：如果只记录已经完成的小行动，并通过成就墙和随机回顾持续反馈，能否降低记录阻力并增强完成感。",
  strategy:
    "把MVP从任务管理器收敛为正反馈闭环：记录微光 → 选择情绪 → 沉淀成就墙 → 随机回顾。首轮不做账号、社交、积分和云同步，采用本地存储，以最小成本验证核心路径。",
  executionIntro:
    "每一步都对应一个可核验的产品页面：先跑通低负担记录，再让历史行动可沉淀、可检索、可回看，最后补齐真实使用所需的PWA能力。",
  actions: [
    "将核心输入收敛为“一句记录 + 情绪标签 + 封存”，降低每次记录的操作负担。",
    "搭建成就墙与标签搜索，让零散行动形成可回看、可检索的个人成长档案。",
    "加入随机回顾机制，把历史记录重新呈现为即时正反馈，强化产品差异点。",
    "完成PWA安装、离线缓存、本地存储与文本导出，确保产品可真实使用并尊重数据隐私。"
  ],
  executionVisuals: [
    "/assets/cases/app-real-record.png",
    "/assets/cases/app-real-wall.png",
    "/assets/cases/app-real-review.png",
    "/assets/cases/app-real-settings.png"
  ],
  methods: ["MVP最小验证", "行为设计", "AI辅助开发", "PWA交付", "证据分层"],
  result:
    "完成可访问、可安装并支持离线使用的PWA，跑通“记录 → 成就墙 → 随机回顾”核心闭环。N=1个人连续自测中观察到主动记录行为；这一结果仅作为产品可用性与下一轮实验的初步信号，不代表已验证多用户留存。",
  review:
    "本次实践验证了独立完成AI产品0→1交付的能力，也暴露了验证样本不足：现阶段证据能证明产品可用与核心路径成立，尚不能证明规模化留存。下一步将招募5-10名目标用户，跟踪7日记录率、主动打开频次和随机回顾使用率。",
  sectionVisuals: {
    problem: "/assets/cases/app-prototype.jpg",
    strategy: "/assets/cases/app-process.jpg",
    result: "/assets/cases/app-real-home.png",
    review: "/assets/cases/app-next-model.jpg"
  },
  sectionEvidenceLabels: {
    problem: "假设回应",
    strategy: "策略产出",
    result: "产品实证",
    review: "下一轮计划"
  },
  validationStatus: [
    {
      status: "已验证",
      title: "产品交付与核心路径",
      detail: "线上版本可访问、可安装、可离线；记录、成就墙、搜索和随机回顾均可实际操作。",
      evidence: "真实页面截图 + PWA配置 + 公开仓库"
    },
    {
      status: "初步信号",
      title: "低负担记录体验",
      detail: "N=1个人连续自测中出现主动记录和历史回看行为，说明核心路径具备继续测试的价值。",
      evidence: "个人自测记录，不外推为多用户结论"
    },
    {
      status: "待验证",
      title: "多用户留存与分享",
      detail: "仍需通过目标用户测试验证7日记录率、主动打开频次及回顾功能使用率。",
      evidence: "下一轮计划招募5-10名目标用户"
    }
  ],
  developmentTimeline: [
    {
      date: "2026.01.31",
      title: "首个PWA原型提交",
      detail: "完成HTML/CSS/JS、manifest与Service Worker的首轮可运行原型。",
      href: "https://github.com/vitalu1107-beep/xiaochengji-pwa/commit/64056826252c887186cb86adadd100387f8bbf46"
    },
    {
      date: "2026.02.12",
      title: "V2体验迭代",
      detail: "重构页面结构与核心交互，进入第二轮产品体验优化。",
      href: "https://github.com/vitalu1107-beep/xiaochengji-pwa/commit/acfaa67d8eab8fbd05dc849a9fe42a87122f7a32"
    },
    {
      date: "2026.02.14-15",
      title: "补齐离线与安装能力",
      detail: "增加离线页面并完善缓存与更新策略，使产品具备完整PWA使用能力。",
      href: "https://github.com/vitalu1107-beep/xiaochengji-pwa/commit/7414fbc3ff754091031512ba6284d15847c12bfa"
    }
  ],
  gallery: [
    {
      src: "/assets/cases/app-real-home.png",
      title: "首页与即时反馈",
      caption: "首页呈现连续记录、成就数量与最近行动，形成轻量反馈入口。",
      kind: "product-screen"
    },
    {
      src: "/assets/cases/app-prototype.jpg",
      title: "MVP核心路径",
      caption: "原型阶段把核心流程收敛为记录、保存、回看。"
    },
    {
      src: "/assets/cases/app-real-record.png",
      title: "记录微光",
      caption: "一句记录与情绪标签构成最低操作成本的输入单元。",
      kind: "product-screen"
    },
    {
      src: "/assets/cases/app-real-wall.png",
      title: "成就墙与搜索",
      caption: "通过标签搜索和记录聚合，让历史行动可检索、可沉淀。",
      kind: "product-screen"
    },
    {
      src: "/assets/cases/app-real-review.png",
      title: "随机回顾",
      caption: "随机抽取历史记录，把过去的行动转化为当下的正反馈。",
      kind: "product-screen"
    },
    {
      src: "/assets/cases/app-real-settings.png",
      title: "PWA与数据设置",
      caption: "支持安装到桌面、本地存储、文本导出和数据清除。",
      kind: "product-screen"
    },
    {
      src: "/assets/cases/app-process.jpg",
      title: "首轮MVP路径",
      caption: "首轮MVP在7天内完成，随后持续迭代PWA体验。"
    },
    {
      src: "/assets/cases/app-next-model.jpg",
      title: "下一轮验证计划",
      caption: "从个人自测进入目标用户验证，重点关注留存、频次与分享。"
    }
  ],
  evidenceStrip: [
    "/assets/cases/app-real-home.png",
    "/assets/cases/app-real-record.png",
    "/assets/cases/app-real-wall.png",
    "/assets/cases/app-real-review.png",
    "/assets/cases/app-real-settings.png"
  ],
  externalLinks: [
    {
      label: "体验产品",
      href: "https://vitalu1107-beep.github.io/xiaochengji-pwa/"
    },
    {
      label: "查看代码",
      href: "https://github.com/vitalu1107-beep/xiaochengji-pwa"
    }
  ]
};
