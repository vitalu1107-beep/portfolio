export const aiApplyAssistantCase = {
  slug: "ai-apply-assistant",
  title: "AI 智能投递助手｜高频求职投递流程的 AI 工作台实践",
  shortTitle: "AI 投递助手",
  category: "AI产品实践",
  company: "独立 AI 工具",
  role: "产品设计 / Prompt 设计 / AI 辅助开发",
  period: "2026.07",
  summary:
    "面向高频求职投递场景，将岗位 JD 分析、岗位筛选判断、分对象打招呼话术、简历微调建议和投递记录整合到一个工作台中，减少重复判断与文案整理成本。",
  hero: {
    layout: "narrative-product",
    visualStyle: "board",
    index: "05",
    meta: ["Independent AI Tool", "Practice Project"],
    label: "AI 智能投递助手 · APPLY ASSISTANT",
    title: "把高频求职投递流程做成 AI 工作台",
    summary:
      "把岗位输入、AI 判断、话术生成和投递记录串成可筛选、可生成、可记录的投递前工作台。",
    visual: "/assets/cases/ai-apply-assistant-workbench.png",
    visualAlt: "AI 智能投递助手工作台界面截图",
    visualCaption: "静态 UI 原型 · 工作台界面",
    validationNote:
      "当前展示静态 UI 原型与代码实践证据，不把 GitHub Pages 原型描述为可运行服务端 API 的在线 AI 完整版。",
    metrics: [
      { value: "0→1", label: "可用产品闭环" },
      { value: "4类", label: "分对象话术" },
      { value: "双模式", label: "mock/模型切换" }
    ],
    actions: [
      {
        label: "查看静态原型",
        href: "https://vitalu1107-beep.github.io/ai-apply-assistant/"
      },
      {
        label: "查看代码",
        href: "https://github.com/vitalu1107-beep/ai-apply-assistant"
      }
    ]
  },
  heroImage: "/assets/cases/ai-apply-assistant-workbench.png",
  accent: "#059669",
  metrics: [
    { value: "0→1", label: "完成可用产品闭环" },
    { value: "4类", label: "分对象投递话术" },
    { value: "5项", label: "岗位分析模块" },
    { value: "2种", label: "mock与真实模型模式" }
  ],
  problem:
    "高频求职投递里，候选人需要反复阅读 JD、判断岗位是否值得投、按不同对象改写第一句话、微调简历表达，并记录后续投递状态。这些动作不复杂，但重复、分散且容易遗漏。",
  strategy:
    "把投递前的重复判断拆成“岗位输入 -> AI 判断 -> 话术生成 -> 投递记录”的最短工作台闭环。首版不追求完整 ATS 或 CRM，而是优先解决 JD 结构化分析、岗位筛选、分对象话术和轻量记录四个高频动作。",
  executionIntro:
    "执行中把传统运营里的用户分层、话术匹配和流程记录经验，迁移到求职投递场景，并用 AI 辅助开发完成静态原型、Route Handler 接入方案和 mock/真实模型双模式。",
  actions: [
    "将岗位 JD 解析为公司、岗位、职责、要求、风险点和匹配关键词，帮助快速判断是否值得继续沟通。",
    "按 HR、猎头、业务主管、创始人四类投递对象生成不同打招呼话术，避免所有沟通都使用同一套模板。",
    "把简历微调建议和面试问题预测放到辅助分析区，让投递前准备从文案生成延伸到面试准备。",
    "用 localStorage 做轻量投递记录，先解决个人工作台里的状态追踪，不在首版引入复杂账号体系。",
    "在代码层面保留 mock 与真实模型双模式，真实模型通过 Next.js Route Handler 调用火山方舟 / 豆包模型，API Key 仅在服务端环境变量中读取。"
  ],
  methods: [
    "岗位JD结构化分析",
    "个性化岗位筛选",
    "Prompt设计",
    "Next.js Route Handler",
    "localStorage轻量记录",
    "mock与真实模型双模式"
  ],
  result:
    "完成 0→1 可用产品闭环：岗位输入、AI 判断、分对象话术、简历微调建议、面试问题预测和投递记录可以在同一工作台中完成。当前结果用于证明 AI 产品实践与工作流设计能力，不虚构用户量、转化率或商业成绩。",
  review:
    "这个项目的价值不是展示一个“AI 概念页”，而是把过往用户运营里的分层、话术、流程和复盘经验，迁移到 AI 产品工作台里。后续可以继续接入真实岗位数据、简历版本管理和投递反馈复盘，让个人求职动作从经验驱动变成可记录、可迭代的工作流。",
  sectionVisuals: {
    problem: "/assets/cases/ai-apply-assistant-workbench.png",
    strategy: "/assets/cases/ai-apply-assistant-workbench.png",
    result: "/assets/cases/ai-apply-assistant-workbench.png",
    review: "/assets/cases/ai-apply-assistant-workbench.png"
  },
  sectionEvidenceLabels: {
    problem: "工作流证据",
    strategy: "原型证据",
    result: "产品证据",
    review: "迁移证据"
  },
  validationStatus: [
    {
      status: "已完成",
      title: "静态 UI 原型与投递工作台闭环",
      detail: "完成岗位输入、筛选判断、话术生成、简历建议、面试问题和投递记录的工作台界面。",
      evidence: "公开 GitHub Pages 静态原型 + 产品界面截图"
    },
    {
      status: "已沉淀",
      title: "AI 能力接入边界",
      detail: "保留 mock 与真实模型双模式；真实模型通过服务端 Route Handler 调用，API Key 仅从服务端环境变量读取。",
      evidence: "Next.js Route Handler 设计 + mock/真实模型切换"
    },
    {
      status: "待验证",
      title: "真实投递效率提升",
      detail: "后续需要用真实投递过程验证是否减少重复判断、文案整理和投递记录成本。",
      evidence: "当前不写用户量、转化率或商业成绩"
    }
  ],
  gallery: [
    {
      src: "/assets/cases/ai-apply-assistant-workbench.png",
      title: "AI 智能投递助手工作台",
      caption: "公开静态原型界面，展示岗位 JD 输入、岗位判断、分对象话术、简历微调和投递记录入口。",
      kind: "product-screen"
    }
  ],
  evidenceStrip: ["/assets/cases/ai-apply-assistant-workbench.png"],
  externalLinks: [
    {
      label: "查看静态原型",
      href: "https://vitalu1107-beep.github.io/ai-apply-assistant/"
    },
    {
      label: "查看代码",
      href: "https://github.com/vitalu1107-beep/ai-apply-assistant"
    }
  ]
};
