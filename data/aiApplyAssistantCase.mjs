export const aiApplyAssistantCase = {
  slug: "ai-apply-assistant",
  title: "AI 智能投递助手｜高频求职投递流程的 AI 工作台实践",
  shortTitle: "AI 投递助手",
  category: "AI产品实践",
  company: "独立 AI 工具",
  role: "产品设计 / Prompt 设计 / AI 辅助开发 / 运营流程拆解",
  period: "2026.07",
  summary:
    "面向高频求职投递场景，将岗位 JD 分析、岗位筛选判断、分对象打招呼话术、简历微调建议和投递记录整合到一个工作台中，减少重复判断、重复改写和漏跟进成本。",
  hero: {
    layout: "narrative-product",
    visualStyle: "board",
    index: "05",
    meta: ["Independent AI Tool", "Practice Project"],
    label: "AI 智能投递助手 · APPLY ASSISTANT",
    title: "把高频求职投递流程做成 AI 判断与沟通工作台",
    summary:
      "不是做一个单点话术生成器，而是把 JD 结构化、岗位取舍、分对象沟通、简历微调和投递记录串成可复盘的最小闭环。",
    visual: "/assets/cases/ai-apply-assistant-workbench-latest.svg",
    visualAlt: "AI 智能投递助手本地最新版工作台界面证据图",
    visualCaption: "本地最新版工作台 · 127.0.0.1:3000 mock界面",
    validationNote:
      "当前可核验的是静态 UI 原型、流程图、Prompt 矩阵、架构边界和公开代码；不把 GitHub Pages 原型描述为可运行服务端 API 的在线 AI 完整版。",
    metrics: [
      { value: "0→1", label: "可用产品闭环" },
      { value: "4类", label: "沟通对象话术" },
      { value: "2种", label: "mock/模型模式" }
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
    "高频求职投递的真实成本不只在写开场白，而是候选人需要反复读 JD、判断是否值得投、按不同对象改写表达、微调简历证据，并把投递状态记录下来。动作本身不复杂，但分散在网页、聊天窗口、文档和表格里，导致判断成本、表达成本和跟进成本不断重复。",
  strategy:
    "把首版范围收敛为“岗位输入 -> AI 判断 -> 话术生成 -> 简历建议 -> 投递记录”的最短工作台闭环。首版不做完整求职 CRM，也不引入账号、职位库和长期数据看板，优先证明 AI 能否帮助用户完成投递前最关键的判断、表达和记录。",
  executionIntro:
    "执行中把过往用户运营里的分层、话术匹配、任务记录和复盘经验迁移到 AI 产品工作流：人负责定义场景与证据边界，AI 负责辅助结构化判断和生成，人再对输出质量与可用路径做验收。",
  actions: [
    "先把问题从“生成一句投递话术”重写为“投递前判断、表达和记录分散”，明确产品不是替代求职决策，而是降低重复判断和文案整理成本。",
    "将岗位 JD 拆成公司、岗位、职责、要求、匹配关键词和风险点，再让 AI 输出岗位优先级、是否建议投递和需要强调的能力证据。",
    "按 HR、猎头、业务主管和创始人四类对象设计不同 Prompt 口径：HR看硬性匹配，猎头看推荐标签，主管看业务解决能力，创始人看结果意识与自驱。",
    "把简历微调建议、面试问题预测和投递记录放在同一工作台中，让生成结果能回到下一次沟通和复盘，而不是一次性复制完就结束。",
    "在工程实现上保留 mock 与真实模型双模式；真实模型通过 Next.js Route Handler 调用火山方舟 / 豆包模型，API Key 仅在服务端环境变量中读取，不提交到仓库。"
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
    "完成 0→1 可用产品闭环：岗位输入、AI 判断、分对象话术、简历微调建议、面试问题预测和投递记录可以在同一工作台中完成。当前结果用于证明 AI 产品实践、工作流设计、Prompt 分层和工程边界意识，不虚构用户量、转化率或商业成绩。",
  review:
    "从运营主管视角，这个项目的价值在于把高频、重复、容易遗漏的求职投递动作产品化；从 CEO 视角，当前更适合作为“AI 产品实践与执行力证据”，还不能证明真实商业价值。下一轮应围绕单个 JD 判断耗时、AI 建议采纳率、话术二次修改比例、跟进记录完整率和有效回复质量做小样本验证。",
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
      title: "静态 UI 原型与投递工作台闭环",
      detail: "完成岗位输入、筛选判断、话术生成、简历建议、面试问题和投递记录的工作台界面。",
      evidence: "公开 GitHub Pages 静态原型 + 产品界面截图"
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
      evidence: "当前不写用户量、转化率或商业成绩"
    }
  ],
  gallery: [
    {
      src: "/assets/cases/ai-apply-assistant-workbench-latest.svg",
      title: "AI 智能投递助手工作台",
      caption: "基于本地 127.0.0.1:3000 最新 mock 工作台重制，展示岗位 JD 输入、岗位薪资/城市、个人筛选偏好、AI 判断、分对象话术、简历微调和投递记录入口。",
      kind: "product-screen"
    },
    {
      src: "/assets/cases/ai-apply-assistant-flow.svg",
      title: "投递前工作流闭环",
      caption: "把投递动作拆成岗位输入、AI 判断、分对象话术和投递记录四步，说明产品不是单点话术生成器。"
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
      caption: "明确当前只证明产品闭环和工程实践，下一轮才验证效率、质量、跟进和有效回复指标。"
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
