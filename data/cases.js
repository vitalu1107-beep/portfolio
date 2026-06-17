export const caseStudies = [
  {
    slug: "tiny-achievement-app",
    title: "小成就 APP｜7天从0-1验证正反馈机制的产品实践",
    shortTitle: "小成就 APP",
    category: "产品验证",
    company: "个人产品实践",
    period: "2026 产品实战复盘",
    summary:
      "围绕“人不缺目标，缺的是持续行动的正反馈”这一洞察，用7天完成从问题定义、低保真原型、PWA搭建到真实使用验证的闭环。",
    heroImage: "/assets/cases/app-hero.jpg",
    accent: "#16a34a",
    metrics: [
      { value: "7天", label: "从想法到上线" },
      { value: "3-5条", label: "日均记录" },
      { value: "第3天", label: "出现主动打开" },
      { value: "MVP", label: "最小验证闭环" }
    ],
    problem:
      "ToDo类工具常常强调“未完成”，打卡机制依赖外部约束，容易给用户带来压力。项目希望验证：如果只记录已完成的小行动，是否能让用户在没有积分、打卡和社交激励的情况下自然产生持续行动。",
    strategy:
      "把产品目标从“管理任务”改成“制造完成感”。主动放弃目标设定、打卡签到、社交互动等完整功能，只保留记录、保存、展示这条最短路径，用极简体验验证正反馈是否成立。",
    actions: [
      "先做竞品与痛点拆解，明确现有工具的压力来源：未完成导向、外部约束、操作成本高。",
      "输出低保真原型，定义用户路径为“记录 → 保存 → 展示”，优先验证核心行为而不是功能完整性。",
      "使用 GitHub、HTML/CSS/JS 和 AI 辅助工具快速搭建 PWA，上线一个能真实使用的 MVP。",
      "连续使用并记录卡点，发现用户抗拒“思考记录”，于是把迭代重点放在降低行为阻力和输入负担。"
    ],
    methods: ["MVP最小验证", "行为设计", "正反馈闭环", "用户阻力分析", "快速迭代"],
    result:
      "连续使用7天，日均记录3-5条；第3天开始出现无提醒主动打开行为。数据看板显示低门槛操作、强正反馈和行为自驱具备基础增长潜力。",
    review:
      "这不是一个追求功能完整的工具项目，而是一次关于内在驱动的验证。下一步应围绕情绪共鸣继续升级：产品侧增加成长反馈，增长侧设计成就卡片分享，商业侧探索AI成长报告与会员订阅。",
    chart: {
      type: "growth",
      title: "7天验证路径",
      points: [
        { label: "定义", value: 15 },
        { label: "原型", value: 32 },
        { label: "上线", value: 56 },
        { label: "使用", value: 78 },
        { label: "复盘", value: 100 }
      ]
    },
    funnel: [
      { label: "发现痛点", value: 100 },
      { label: "功能减法", value: 76 },
      { label: "MVP上线", value: 58 },
      { label: "行为验证", value: 42 }
    ],
    gallery: [
      {
        src: "/assets/cases/app-research.jpg",
        title: "调研与方向确定",
        caption: "从现有 ToDo 工具痛点出发，决定做功能减法。"
      },
      {
        src: "/assets/cases/app-process.jpg",
        title: "7天闭环流程",
        caption: "用最小验证和快速迭代完成从定义到复盘。"
      },
      {
        src: "/assets/cases/app-prototype.jpg",
        title: "低保真原型",
        caption: "只保留记录、保存、展示三步核心路径。"
      },
      {
        src: "/assets/cases/app-dashboard.jpg",
        title: "行为验证结果",
        caption: "连续使用7天，观察记录频率与主动打开信号。"
      },
      {
        src: "/assets/cases/app-optimization.jpg",
        title: "关键体验优化",
        caption: "从任务负担转向更轻的习惯养成体验。"
      },
      {
        src: "/assets/cases/app-next-model.jpg",
        title: "下一步模型",
        caption: "围绕产品、增长、商业三条线继续升级。"
      }
    ],
    externalLinks: [
      {
        label: "打开网页版",
        href: "https://vitalu1107-beep.github.io/xiaochengji-pwa/"
      },
      {
        label: "查看仓库",
        href: "https://github.com/vitalu1107-beep/xiaochengji-pwa"
      }
    ]
  },
  {
    slug: "meituan-supply-growth",
    title: "美团团买买｜5个月搭建KOS与供给增长体系，单场GMV峰值破120万",
    shortTitle: "美团团买买",
    category: "供给运营",
    company: "美团团买买",
    period: "2024.07 - 2024.12",
    summary:
      "围绕私域电商供给和达人带货生态，从KOS达人建设、商家招募、商家分层到爆品运营，搭建一套可持续放大GMV的供给增长体系。",
    heroImage: "/assets/cases/meituan-kos-growth.svg",
    accent: "#f9b000",
    metrics: [
      { value: "520人", label: "KOS达人规模" },
      { value: "+300%", label: "达人增长" },
      { value: "2000+", label: "SKU商品库" },
      { value: "120万", label: "单场GMV峰值" }
    ],
    problem:
      "团买买作为美团私域电商生态下的社区团购工具，需要同时解决供给丰富度、达人带货能力和商家运营效率问题。早期如果只依赖零散招商和单次活动，很难稳定形成可复用的GMV增长模型。",
    strategy:
      "把增长拆成“达人生态 - 商家供给 - 分层运营 - 爆品放大 - 渠道补给”五个模块：先用KOS训练体系提升内容和转化能力，再通过商家三维评估模型补齐优质供给，最后用爆品和直播矩阵放大成交。",
    actions: [
      "主导小红书KOS生态建设，设计「星火计划」培训体系，把内容、选品、流量拆成可训练模块，5个月拓展KOS达人至520人。",
      "搭建「品牌力×商品力×运营力」三维评估模型，引入KA品牌5家+长尾品牌78家，构建2000+SKU商品库。",
      "建立S/A/B/C四级商家分层模型，为S级商家配置1v1运营与流量倾斜，为A级商家配置爆品联合营销，为B/C级商家提供标准化SOP工具。",
      "打造30+独家爆品，通过KOS种草和直播矩阵联动放大成交，并设计「早C晚A」等主题场景提升客单价和连带销售。",
      "通过3场行业峰会和小红书内容种草同步拓展商家渠道，线下签约品牌47家，线上获取商机线索420条。"
    ],
    methods: ["供给分层", "KOS达人运营", "爆品策略", "商家生命周期", "渠道运营"],
    result:
      "5个月内KOS达人拓展至520人，增长300%；头部KOS月均GMV达28万，为行业均值3.4倍。供给侧引入KA品牌5家+长尾品牌78家，构建2000+SKU商品库，重点区域供给覆盖率提升至90%，动销率82%。爆品GMV占比65%，客单价提升55%，连带销售率提升33%，单场活动峰值GMV破120万。",
    review:
      "这段经历的核心不是单点招商或活动执行，而是把私域电商的供给、达人和成交链路拆成可运营的系统。后续如果继续深化，可以把KOS成长等级、商家生命周期和爆品预测模型进一步产品化，让供给增长从经验驱动走向模型驱动。",
    chart: {
      type: "growth",
      title: "供给增长体系搭建路径",
      points: [
        { label: "KOS建设", value: 32 },
        { label: "商家招募", value: 52 },
        { label: "分层运营", value: 68 },
        { label: "爆品放大", value: 86 },
        { label: "GMV峰值", value: 100 }
      ]
    },
    funnel: [
      { label: "商家线索", value: 100 },
      { label: "评估入库", value: 82 },
      { label: "重点供给", value: 65 },
      { label: "爆品转化", value: 58 }
    ],
    gallery: [
      {
        src: "/assets/cases/meituan-kos-growth.svg",
        title: "KOS生态建设",
        caption: "5个月拓展KOS达人至520人，增长300%，用星火计划训练内容、选品和流量能力。"
      },
      {
        src: "/assets/cases/meituan-merchant-model.svg",
        title: "商家招募模型",
        caption: "用品牌力、商品力、运营力三维模型筛选供给，引入KA品牌5家+长尾品牌78家。"
      },
      {
        src: "/assets/cases/meituan-segmentation.svg",
        title: "商家分层运营",
        caption: "建立S/A/B/C四级分层和差异化资源包，S级商家GMV贡献占比提升至58%。"
      },
      {
        src: "/assets/cases/meituan-bestseller.svg",
        title: "爆品增长飞轮",
        caption: "打造30+独家爆品，通过KOS种草和直播矩阵联动，单场GMV峰值破120万。"
      },
      {
        src: "/assets/cases/meituan-channel.svg",
        title: "渠道招募结果",
        caption: "线下3场峰会签约品牌47家，线上小红书内容阅读2300万+，获取商机线索420条。"
      }
    ]
  },
  {
    slug: "community-growth",
    title: "社群裂变项目｜6个月从0操盘100W+团购私域用户增长",
    shortTitle: "社群裂变项目",
    category: "用户增长",
    company: "滴滴橙心优选",
    period: "社区团购新城拓展阶段",
    summary:
      "在新城市冷启动阶段，通过线下BD、线下团长和线上社群三方联动，快速建立本地私域流量池，并把裂变活动复制成可持续获客模型。",
    heroImage: "/assets/cases/community-profile.jpg",
    accent: "#2563eb",
    metrics: [
      { value: "100W+", label: "C端用户增量" },
      { value: "5W+", label: "B端用户增量" },
      { value: "1元", label: "单粉成本" },
      { value: "1:5", label: "ROI" }
    ],
    problem:
      "头部社区团购业务进入浙江新城市，B端与C端用户基础几乎从零开始。业务既需要建立线下信任，也需要沉淀可触达、可转化的同城私域用户池。",
    strategy:
      "把增长链路拆成“线下信任获取 - 用户标签分层 - 社群裂变承接 - 品牌背书放大 - 活动复盘复制”五段，用标准化话术和物料提升一线执行效率。",
    actions: [
      "为线下BD和团长准备引流话术、操作视频和协作流程，让一线团队能稳定获取种子用户。",
      "建立客户意向度标签体系，对不同意向用户制定差异化消息触达策略。",
      "设计新用户推荐礼、客户好评素材、明星宣发和滴滴App联动，增强加入社群和转介绍动机。",
      "复盘1.0、2.0、3.0版本活动，把有效物料、成本结构和转化路径沉淀成可复制打法。"
    ],
    methods: ["AARRR", "社群裂变", "用户标签分层", "线下BD协同", "ROI复盘"],
    result:
      "C端用户增量突破100W+，B端用户增量5W+；C端目标70W超额完成143%，B端目标3W超额完成60%；单个用户成本约1元，仅为同行约1/5。",
    review:
      "增长不是单点活动，而是渠道、话术、物料、承接、复盘的系统工程。后续重点应继续提升分层触达精度，并把低成本裂变与高价值用户运营结合。",
    chart: {
      type: "growth",
      title: "私域用户增长节奏",
      points: [
        { label: "冷启动", value: 0 },
        { label: "BD引流", value: 24 },
        { label: "标签分层", value: 46 },
        { label: "裂变放大", value: 76 },
        { label: "100W+", value: 100 }
      ]
    },
    funnel: [
      { label: "线下触达", value: 100 },
      { label: "社群沉淀", value: 76 },
      { label: "裂变参与", value: 52 },
      { label: "下单转化", value: 31 }
    ],
    gallery: [
      {
        src: "/assets/cases/community-profile.jpg",
        title: "核心用户画像",
        caption: "围绕社区团购高潜人群定义触达对象。"
      },
      {
        src: "/assets/cases/community-segmentation.jpg",
        title: "客户意向度标签",
        caption: "按意向度制定不同消息触达策略。"
      },
      {
        src: "/assets/cases/community-flow.jpg",
        title: "用户转化路径",
        caption: "把引流、承接、裂变与下单动作串成闭环。"
      },
      {
        src: "/assets/cases/community-result.jpg",
        title: "裂变活动效果",
        caption: "展示覆盖用户数、增长结果与成本表现。"
      },
      {
        src: "/assets/cases/community-material.jpg",
        title: "裂变物料",
        caption: "用于新用户推荐和活动传播的核心素材。"
      }
    ]
  },
  {
    slug: "campaign-marketing",
    title: "活动营销项目｜3天完成1个月GMV目标的618战役",
    shortTitle: "活动营销项目",
    category: "活动营销",
    company: "滴滴橙心优选",
    period: "618年中盛典",
    summary:
      "围绕爆品、促销、渠道和履约保障设计活动战役，在三天内完成一个月级别的GMV目标，并形成跨部门活动SOP。",
    heroImage: "/assets/cases/campaign-map.jpg",
    accent: "#f97316",
    metrics: [
      { value: "60%", label: "GMV实际提升" },
      { value: "3.3W", label: "B端参与人数" },
      { value: "75W", label: "C端参与人数" },
      { value: "1.3", label: "ROI" }
    ],
    problem:
      "618活动既要短期拉升销售，又要提升品牌认知和用户粘性。活动链路涉及商品、页面、BD、社群、物流和售后，任何环节掉链都会影响成交。",
    strategy:
      "用“目标拆解 - 爆品组合 - 渠道分发 - 实时战报 - 风险预案”组织战役，把活动目标映射到渠道曝光率、商品点击率、加购率和下单率。",
    actions: [
      "制定618活动脑图、活动流程、促销方案和全天时段节奏，明确各部门交付物。",
      "围绕低价爆品、生鲜爆款和限时优惠设计商品组合，并输出用户省钱攻略、团长赚钱攻略和秒杀玩法。",
      "同步推进朋友圈倒计时海报、BD拜访话术、社群战报、区域销售播报和常见问题解答。",
      "活动后复盘库存、页面bug、物流延迟等风险，把问题转化为下一轮活动预案。"
    ],
    methods: ["AARRR", "转化漏斗", "爆品策略", "跨部门项目管理", "活动复盘"],
    result:
      "活动目标为GMV提升50%、B端参与3W+、C端参与70W+、ROI大于1.5；最终GMV提升60%，B端参与3.3W，C端参与75W，ROI为1.3。",
    review:
      "活动成功来自爆品和促销策略，也依赖实时战报和跨部门协同。复盘暴露了库存、页面和履约风险，后续需要提前准备备用活动页、库存补充机制和物流保障方案。",
    chart: {
      type: "growth",
      title: "618活动结果对比",
      points: [
        { label: "目标GMV", value: 50 },
        { label: "实际GMV", value: 60 },
        { label: "B端参与", value: 66 },
        { label: "C端参与", value: 75 },
        { label: "复盘沉淀", value: 88 }
      ]
    },
    funnel: [
      { label: "渠道曝光", value: 100 },
      { label: "商品点击", value: 68 },
      { label: "加购/报名", value: 46 },
      { label: "下单转化", value: 29 }
    ],
    gallery: [
      {
        src: "/assets/cases/campaign-map.jpg",
        title: "618活动脑图",
        caption: "把目标、渠道、商品与物料拆成执行模块。"
      },
      {
        src: "/assets/cases/campaign-timeline.jpg",
        title: "活动节奏",
        caption: "按时间段安排预热、互动、秒杀和复盘。"
      },
      {
        src: "/assets/cases/campaign-plan.jpg",
        title: "促销方案",
        caption: "围绕重点商品配置优惠、资源与参与机制。"
      },
      {
        src: "/assets/cases/campaign-result.jpg",
        title: "目标与结果",
        caption: "GMV、参与人数和ROI复盘。"
      },
      {
        src: "/assets/cases/campaign-review.jpg",
        title: "复盘沉淀",
        caption: "记录成功动作、异常问题和下次改进方向。"
      }
    ]
  }
];

export const featuredCaseSlugs = [
  "tiny-achievement-app",
  "meituan-supply-growth",
  "community-growth",
  "campaign-marketing"
];

export function getCaseBySlug(slug) {
  return caseStudies.find((item) => item.slug === slug);
}
