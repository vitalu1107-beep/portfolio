export const tinyAchievementCase = {
  slug: "tiny-achievement-app",
  title: "小成就 APP｜运营洞察与AI协作驱动的产品验证",
  shortTitle: "小成就 APP",
  category: "AI产品实践",
  company: "独立AI项目",
  role: "AI产品验证 / 运营洞察 / AI协作交付",
  period: "2026.01.31 - 2026.02.15",
  summary:
    "把传统用户运营中对低压力正反馈的观察，转译成可验证的AI产品假设；通过AI任务拆解、MVP取舍、PWA部署和首轮自测，完成从洞察到产品证据的闭环。",
  hero: {
    layout: "narrative-product",
    visualStyle: "phone",
    index: "01",
    meta: ["Independent AI Product", "Case Study"],
    label: "小成就 APP · SMALL WINS",
    title: "用运营洞察和AI协作验证一个正反馈记录产品",
    summary:
      "把用户运营中的低压力正反馈洞察，拆成AI可协作的MVP任务，完成可安装PWA并建立下一轮指标验证口径。",
    visual: "/assets/cases/app-real-record.png",
    visualAlt: "小成就 APP 记录页面",
    visualCaption: "真实产品界面 · 记录页",
    validationNote:
      "已验证产品交付与核心路径；使用反馈来自个人自测，不外推为多用户留存结论。",
    metrics: [
      { value: "7天", label: "首轮MVP" },
      { value: "4步", label: "AI协作链路" },
      { value: "3层", label: "验证证据" }
    ]
  },
  heroImage: "/assets/cases/app-hero.jpg",
  accent: "#16a34a",
  metrics: [
    { value: "7天", label: "首轮MVP周期" },
    { value: "4步", label: "AI协作链路" },
    { value: "3层", label: "证据分层" },
    { value: "4项", label: "下一轮指标" }
  ],
  problem:
    "传统任务工具通常从待办与未完成出发，容易放大压力。基于过往用户运营经验，我把问题从“缺少一个记录工具”重写为“用户需要更低压力的正反馈机制”：如果只记录已经完成的小行动，并通过成就墙和随机回顾持续反馈，能否降低记录阻力并增强完成感。",
  strategy:
    "把MVP从任务管理器收敛为“运营洞察 -> AI任务拆解 -> 最小产品闭环 -> 指标验证”的路径：记录微光 → 选择情绪 → 沉淀成就墙 → 随机回顾。首轮不做账号、社交、积分和云同步，采用本地存储，以最小成本验证核心路径。",
  executionIntro:
    "执行中把AI协作拆成可验收的四步：先定义用户行为假设，再把页面与状态拆成AI任务，随后逐页验收真实路径，最后补齐PWA安装、离线和数据边界。",
  actions: [
    "用运营洞察定义低压力记录假设，将核心输入收敛为“一句记录 + 情绪标签 + 封存”，降低每次记录的操作负担。",
    "把成就墙、标签搜索和空状态拆成AI可交付的页面任务，让零散行动形成可回看、可检索的个人成长档案。",
    "加入随机回顾机制，并逐一验收AI生成页面的真实可用性，把历史记录重新呈现为即时正反馈。",
    "完成PWA安装、离线缓存、本地存储与文本导出，把产品交付证据和下一轮指标验证边界同时补齐。"
  ],
  executionVisuals: [
    "/assets/cases/app-real-record.png",
    "/assets/cases/app-real-wall.png",
    "/assets/cases/app-real-review.png",
    "/assets/cases/app-real-settings.png"
  ],
  methods: ["运营洞察", "AI任务拆解", "MVP最小验证", "PWA交付", "指标验证", "证据分层"],
  result:
    "完成可访问、可安装并支持离线使用的PWA，跑通“记录 → 成就墙 → 随机回顾”核心闭环。N=1个人连续自测中观察到主动记录和历史回看行为；这一结果仅作为产品可用性与下一轮实验的初步信号，不代表已验证多用户留存。下一轮指标验证将重点观察7日记录率、主动打开频次、随机回顾使用率和记录完成率。",
  review:
    "本次实践验证了我能把传统运营经验迁移到AI产品运营：先用运营洞察定义假设，再用AI协作压缩原型与开发周期，最后用证据分层控制结论口径。现阶段证据能证明产品可用与核心路径成立，尚不能证明规模化留存。下一步将招募5-10名目标用户，跟踪7日记录率、主动打开频次、随机回顾使用率和记录完成率。",
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
      detail: "线上版本可访问、可安装、可离线；记录、成就墙、搜索、随机回顾和数据设置均可实际操作。",
      evidence: "真实页面截图 + PWA配置 + 公开仓库提交"
    },
    {
      status: "初步信号",
      title: "低负担记录体验",
      detail: "N=1个人连续自测中出现主动记录和历史回看行为，说明低压力正反馈路径具备继续扩样测试的价值。",
      evidence: "个人自测信号，不外推为多用户留存结论"
    },
    {
      status: "待验证",
      title: "多用户指标验证",
      detail: "仍需通过目标用户测试验证7日记录率、主动打开频次、随机回顾使用率和记录完成率。",
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
      caption: "首页呈现连续记录、成就数量与最近行动，承接低压力正反馈的运营洞察。",
      kind: "product-screen"
    },
    {
      src: "/assets/cases/app-prototype.jpg",
      title: "MVP核心路径",
      caption: "原型阶段把AI任务拆解为记录、保存、回看三个可验收步骤。"
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
      caption: "首轮MVP在7天内完成，随后围绕PWA体验和指标验证继续迭代。"
    },
    {
      src: "/assets/cases/app-next-model.jpg",
      title: "下一轮验证计划",
      caption: "从个人自测进入目标用户验证，重点关注7日记录率、主动打开频次、随机回顾使用率和记录完成率。"
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
