export const aiApplyAssistantCase = {
  slug: "ai-apply-assistant",
  title: "AI 智能投递助手｜高频求职投递流程的 AI 工作台实践",
  shortTitle: "AI 投递助手",
  category: "AI产品实践",
  company: "独立 AI 工具",
  role: "产品设计 / Prompt 设计 / AI 辅助开发",
  period: "2026.07",
  summary:
    "面向高频求职投递场景，把岗位 JD 分析、岗位筛选、分对象沟通、简历微调建议和投递记录整合到一个轻量工作台中。",
  hero: {
    layout: "narrative-product",
    visualStyle: "workbench",
    index: "05",
    meta: ["Independent AI Tool", "Practice Project"],
    label: "AI 智能投递助手 · APPLY ASSISTANT",
    title: "用 AI 辅助完成岗位判断、沟通话术和投递记录",
    summary:
      "我把投递前最重复的判断和改写动作拆成五步：读 JD、判断匹配、生成沟通话术、提示简历调整、记录跟进状态。",
    visual: "/assets/cases/ai-apply-assistant-workbench-latest.svg",
    visualAlt: "AI 智能投递助手工作台界面",
    visualCaption: "本地 mock 工作台界面",
    metrics: [
      { value: "0→1", label: "可用产品闭环" },
      { value: "4类", label: "沟通对象话术" },
      { value: "5步", label: "投递前路径" }
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
  heroImage: "/assets/cases/ai-apply-assistant-workbench-latest.svg",
  accent: "#059669",
  metrics: [
    { value: "0→1", label: "完成可用产品闭环" },
    { value: "4类", label: "分对象投递话术" },
    { value: "5步", label: "投递前工作路径" },
    { value: "2种", label: "mock与真实模型模式" }
  ],
  problem:
    "高频投递的时间主要耗在连续判断上：这份 JD 值不值得投、该强调哪段经历、应该用什么口径联系 HR/猎头/业务负责人、投递后有没有及时记录。原来这些动作分散在招聘网站、简历、聊天窗口和表格里，容易重复判断，也容易漏跟进。",
  strategy:
    "首版只保留一条投递前路径：岗位输入 -> 匹配判断 -> 话术生成 -> 简历建议 -> 投递记录。这个范围足够小，可以先验证流程是否顺；也足够完整，能体现我对 AI 任务拆解、Prompt 设计和运营流程复盘的理解。",
  executionIntro:
    "执行时，我先用运营视角拆清楚“谁在沟通、沟通什么、如何跟进”，再把这些判断写成可执行的 AI 任务和页面状态。",
  actions: [
    "把岗位 JD 拆成公司、岗位、职责、要求、匹配关键词和风险点，先得到一份结构化判断，再决定是否值得继续沟通。",
    "按 HR、猎头、业务主管和创始人四类对象设计不同 Prompt 口径：HR看硬性匹配，猎头看推荐标签，主管看业务解决能力，创始人看结果意识与自驱。",
    "把简历微调建议和面试问题预测放进同一屏，让用户知道这份岗位应该补哪类证据，避免只拿到一段话术。",
    "用 localStorage 做轻量投递记录，记录公司、岗位、对象、建议动作和跟进状态，方便后续复盘。",
    "工程上保留 mock 与真实模型双模式；真实模型通过 Next.js Route Handler 调用火山方舟 / 豆包模型，API Key 只从服务端环境变量读取。"
  ],
  executionVisuals: [
    "/assets/cases/ai-apply-assistant-flow.svg",
    "/assets/cases/ai-apply-assistant-workbench-latest.svg",
    "/assets/cases/ai-apply-assistant-persona-prompts.svg",
    "/assets/cases/ai-apply-assistant-validation-plan.svg",
    "/assets/cases/ai-apply-assistant-architecture.svg"
  ],
  methods: [
    "岗位JD结构化分析",
    "个性化岗位筛选",
    "分对象Prompt设计",
    "Next.js Route Handler",
    "localStorage轻量记录",
    "mock与真实模型双模式"
  ],
  result:
    "已完成 0→1 可用产品闭环：岗位输入、AI 判断、分对象话术、简历微调建议、面试问题预测和投递记录可以在同一工作台中完成。当前证据用于证明产品拆解、Prompt 分层、页面交互和工程边界；用户量、转化率和商业结果留到真实样本验证后再呈现。",
  review:
    "这个案例定位为 AI 产品实践证据，重点放在流程拆解、Prompt 设计、界面交互和工程边界。下一轮需要用真实投递样本验证单个 JD 判断耗时、AI 建议采纳率、话术二次修改比例和跟进记录完整率。",
  sectionVisuals: {
    problem: "/assets/cases/ai-apply-assistant-flow.svg",
    strategy: "/assets/cases/ai-apply-assistant-persona-prompts.svg",
    result: "/assets/cases/ai-apply-assistant-architecture.svg",
    review: "/assets/cases/ai-apply-assistant-validation-plan.svg"
  },
  sectionEvidenceLabels: {
    problem: "流程证据",
    strategy: "Prompt证据",
    result: "工程边界",
    review: "验证计划"
  },
  validationStatus: [
    {
      status: "已完成",
      title: "投递工作台闭环",
      detail: "完成岗位输入、筛选判断、话术生成、简历建议、面试问题和投递记录的工作台界面。",
      evidence: "静态原型页面 + 本地工作台截图"
    },
    {
      status: "已沉淀",
      title: "Prompt 分层与工作流证据",
      detail: "把 JD 结构化、岗位优先级、匹配点、风险点和四类沟通对象话术拆成可复用的 Prompt 任务。",
      evidence: "流程图 + 分对象 Prompt 设计矩阵"
    },
    {
      status: "已明确",
      title: "模型接入与安全边界",
      detail: "保留 mock 与真实模型双模式；真实模型通过服务端 Route Handler 调用，API Key 仅从服务端环境变量读取。",
      evidence: "Next.js Route Handler 方案 + 公开代码仓库"
    },
    {
      status: "待验证",
      title: "真实投递效率与沟通质量",
      detail: "后续需要用真实投递过程验证是否减少 JD 判断耗时、降低话术二次修改比例，并提高跟进记录完整率。",
      evidence: "真实样本验证后再补充用户量、转化率或商业结果"
    }
  ],
  gallery: [
    {
      src: "/assets/cases/ai-apply-assistant-workbench-latest.svg",
      title: "AI 智能投递助手工作台",
      caption: "基于本地 mock 工作台重制，展示岗位 JD 输入、岗位薪资/城市、个人筛选偏好、AI 判断、分对象话术、简历微调和投递记录入口。",
      kind: "product-screen"
    },
    {
      src: "/assets/cases/ai-apply-assistant-flow.svg",
      title: "投递前工作流闭环",
      caption: "把投递前动作拆成岗位输入、AI 判断、分对象话术和投递记录四步，说明产品覆盖的是完整投递准备流程。"
    },
    {
      src: "/assets/cases/ai-apply-assistant-persona-prompts.svg",
      title: "分对象 Prompt 设计矩阵",
      caption: "HR、猎头、业务主管和创始人四类接收方关注点不同，因此话术要围绕不同决策目标生成。"
    },
    {
      src: "/assets/cases/ai-apply-assistant-architecture.svg",
      title: "模型接入与安全边界",
      caption: "展示前端工作台、Next.js Route Handler、mock 模式、火山方舟 / 豆包模型和服务端环境变量的边界。"
    },
    {
      src: "/assets/cases/ai-apply-assistant-validation-plan.svg",
      title: "下一轮验证计划",
      caption: "明确当前证据边界，下一轮再验证效率、质量、跟进和有效回复指标。"
    }
  ],
  evidenceStrip: [
    "/assets/cases/ai-apply-assistant-workbench-latest.svg",
    "/assets/cases/ai-apply-assistant-flow.svg",
    "/assets/cases/ai-apply-assistant-persona-prompts.svg",
    "/assets/cases/ai-apply-assistant-architecture.svg",
    "/assets/cases/ai-apply-assistant-validation-plan.svg"
  ],
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
