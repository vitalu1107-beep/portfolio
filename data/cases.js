import { tinyAchievementCase } from "./tinyAchievementCase.mjs";
import { businessCaseHeroes } from "./businessCaseHeroes.mjs";

export const caseStudies = [
  tinyAchievementCase,
  {
    slug: "meituan-supply-growth",
    hero: businessCaseHeroes["meituan-supply-growth"],
    title: "美团团买买｜从KOS达人生态到供给增长飞轮的体系化搭建",
    shortTitle: "美团团买买",
    category: "供给运营",
    company: "美团团买买",
    role: "商家及供给运营｜KOS生态建设、商家分层与爆品运营",
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
    hero: businessCaseHeroes["community-growth"],
    title: "滴滴橙心优选｜从城市冷启动到100W+用户的私域增长实践",
    shortTitle: "社群裂变项目",
    category: "用户增长",
    company: "滴滴橙心优选",
    role: "用户增长运营｜新城冷启动、社群裂变与ROI复盘",
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
      "头部社区团购业务进入浙江新城市，属于典型新城市冷启动：线下小B信任基础薄弱，线上C端私域池接近从0开始。项目目标不是单次拉群，而是在C端目标70W、B端目标3W的压力下，同时搭建可触达、可转化、可复盘的本地用户增长漏斗。",
    strategy:
      "把增长链路拆成“线下BD获客 - 团长信任承接 - 线上社群沉淀 - 标签分层触达 - 裂变传播放大 - 活动复盘复制”六段，用标准化话术、物料和用户标签把一次拉新活动变成可复用的同城私域增长模型。",
    actions: [
      "为线下BD和团长准备引流话术、操作视频和协作流程，让一线团队能稳定获取种子用户。",
      "建立客户意向度标签体系，对不同意向用户制定差异化消息触达策略。",
      "设计新用户推荐礼、客户好评素材、明星宣发和滴滴App联动，增强加入社群和转介绍动机。",
      "复盘1.0、2.0、3.0版本活动，把有效物料、成本结构和转化路径沉淀成可复制打法。"
    ],
    methods: ["AARRR", "社群裂变", "用户标签分层", "线下BD协同", "ROI复盘"],
    result:
      "C端用户增量突破100W+，B端用户增量5W+；C端目标70W超额完成143%，B端目标3W超额完成60%。单个用户成本约1元，仅为同行约1/5，并跑出ROI 1:5的成本效率。",
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
    executionIntro:
      "把PPT里的执行产出重新拆成四个阶段：先用线下BD和团长建立信任，再用社群话术与标签分层承接用户，随后用推荐礼、好评素材和品牌背书放大裂变，最后用复盘文档沉淀可复制打法。",
    sectionVisuals: {
      problem: "/assets/cases/community-background-targets.png",
      strategy: "/assets/cases/community-user-tagging.png",
      result: "/assets/cases/community-result.jpg",
      review: "/assets/cases/community-key-user-report.png"
    },
    sectionEvidenceLabels: {
      problem: "目标证据",
      strategy: "分层证据",
      result: "增长结果",
      review: "复盘证据"
    },
    conversionEvidence: [
      {
        src: "/assets/cases/community-user-tagging.png",
        title: "客户意向度标签分层",
        caption: "把不同意向度用户分层，并匹配差异化触达策略，避免社群只做统一群发。"
      },
      {
        src: "/assets/cases/community-flow.jpg",
        title: "用户转化路径",
        caption: "把线下触达、社群承接、裂变参与与下单转化串成可复盘的增长漏斗。"
      }
    ],
    executionMatrix: [
      {
        stage: "核心用户沉淀期",
        goal: "先建立线下信任，把0用户基础转化为第一批可触达种子用户。",
        deliverables: ["线下BD引流话术*1", "线下引流操作视频*1", "线上社群话术*1"],
        visual: "/assets/cases/community-bd-script.png"
      },
      {
        stage: "裂变前期准备",
        goal: "把用户按意向度分层，并准备能驱动转介绍的激励和信任素材。",
        deliverables: ["用户标签体系标注*1", "新用户推荐礼品表*1", "客户好评素材*20"],
        visual: "/assets/cases/community-reward-list.jpg"
      },
      {
        stage: "裂变中放大",
        goal: "用平台品牌背书和外部宣发增强用户加入社群与分享的理由。",
        deliverables: ["明星宣发视频*1", "滴滴打车App宣传*1", "品牌影响力营销"],
        visual: "/assets/cases/community-didi-app-promo.jpg"
      },
      {
        stage: "活动复盘",
        goal: "把有效物料、成本结构和转化路径沉淀为下一轮可复制打法。",
        deliverables: ["活动复盘文档*1", "成本与ROI复盘", "社群团队扩招经验"],
        visual: "/assets/cases/community-brand-poster.png"
      }
    ],
    resultHighlights: [
      {
        value: "100W+",
        label: "C端用户增量",
        detail: "C端目标70W，最终超额完成143%，形成可持续触达的同城私域用户池。"
      },
      {
        value: "5W+",
        label: "B端用户增量",
        detail: "B端目标3W，最终超额完成60%，为后续供给和社群履约提供基础。"
      },
      {
        value: "1元",
        label: "单粉成本",
        detail: "单个用户成本约1元，仅为同行约1/5，证明裂变链路具备成本优势。"
      },
      {
        value: "1:5",
        label: "ROI",
        detail: "粉丝月贡献金额约5.4元，结合获客成本跑出ROI 1:5的转化效率。"
      }
    ],
    resultEvidence: [
      {
        src: "/assets/cases/community-result.jpg",
        title: "C端与B端增长数据",
        caption: "复盘核心增长结果、成本和目标完成度。"
      },
      {
        src: "/assets/cases/community-star-campaign.png",
        title: "明星宣发与品牌背书",
        caption: "用平台级宣发增强活动可信度和用户参与动机。"
      },
      {
        src: "/assets/cases/community-key-user-report.png",
        title: "标杆用户报道激励",
        caption: "通过标杆用户故事强化团长和用户侧参与感。"
      }
    ],
    gallery: [
      {
        src: "/assets/cases/community-profile.jpg",
        title: "核心用户画像",
        caption: "围绕社区团购高潜人群定义触达对象。"
      },
      {
        src: "/assets/cases/community-background-targets.png",
        title: "背景目标与资源现状",
        caption: "新城市冷启动阶段，C端目标70W、B端目标3W，需要同步搭建私域用户池。"
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
        src: "/assets/cases/community-bd-script.png",
        title: "BD与社群话术沉淀",
        caption: "将线下引流和线上社群话术标准化，提升一线团队执行稳定性。"
      },
      {
        src: "/assets/cases/community-reward-list.jpg",
        title: "推荐礼品与裂变准备",
        caption: "用推荐礼、好评素材和标签分层提升转介绍动机。"
      },
      {
        src: "/assets/cases/community-material.jpg",
        title: "裂变物料",
        caption: "用于新用户推荐和活动传播的核心素材。"
      },
      {
        src: "/assets/cases/community-didi-app-promo.jpg",
        title: "滴滴App宣传",
        caption: "借助平台入口和品牌背书放大活动触达。"
      },
      {
        src: "/assets/cases/community-star-campaign.png",
        title: "明星宣发素材",
        caption: "通过外部宣发强化活动可信度。"
      },
      {
        src: "/assets/cases/community-key-user-report.png",
        title: "标杆用户报道",
        caption: "用标杆用户故事提升团长和用户的参与感。"
      }
    ],
    evidenceStrip: [
      "/assets/cases/community-background-targets.png",
      "/assets/cases/community-user-tagging.png",
      "/assets/cases/community-flow.jpg",
      "/assets/cases/community-bd-script.png",
      "/assets/cases/community-result.jpg"
    ]
  },
  {
    slug: "campaign-marketing",
    hero: businessCaseHeroes["campaign-marketing"],
    title: "滴滴橙心优选｜从目标拆解到跨部门协同的618增长战役",
    shortTitle: "活动营销项目",
    category: "活动营销",
    company: "滴滴橙心优选",
    role: "活动运营｜目标拆解、爆品促销与跨部门协同",
    period: "618年中盛典",
    summary:
      "围绕爆品、促销、渠道和履约保障设计活动战役，在三天内完成一个月级别的GMV目标，并形成跨部门活动SOP。",
    heroImage: "/assets/cases/campaign-map.jpg",
    accent: "#f97316",
    metrics: [
      { value: "3天", label: "完成月度GMV目标" },
      { value: "60%", label: "GMV实际提升" },
      { value: "3.3W", label: "B端参与人数" },
      { value: "75W", label: "C端参与人数" }
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
      "3天完成一个月级别GMV目标；最终GMV提升60%，B端参与3.3W，C端参与75W。ROI为1.3，低于原目标，因此在复盘中重点沉淀了库存、页面和履约风险预案。",
    review:
      "活动成功来自爆品和促销策略，也依赖实时战报和跨部门协同。ROI未达原目标说明活动放量之外仍需控制资源效率，后续需要提前准备备用活动页、库存补充机制和物流保障方案。",
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
