import assert from "node:assert/strict";
import test from "node:test";

import { tinyAchievementCase } from "../data/tinyAchievementCase.mjs";

test("Small Wins exposes the approved narrative-product hero content", () => {
  assert.deepEqual(tinyAchievementCase.hero, {
    layout: "narrative-product",
    visualStyle: "phone",
    index: "01",
    meta: ["Independent AI Product", "Case Study"],
    label: "小成就 APP · SMALL WINS",
    title: "从行为假设到可安装产品的0→1实践",
    summary:
      "用最小产品闭环验证“低压力记录能否增强完成感”，独立完成原型、AI辅助开发、部署与首轮自测。",
    visual: "/assets/cases/app-real-record.png",
    visualAlt: "小成就 APP 记录页面",
    visualCaption: "真实产品界面 · 记录页",
    validationNote:
      "已验证产品交付与核心路径；使用反馈来自个人自测，不外推为多用户留存结论。",
    metrics: [
      { value: "7天", label: "首轮MVP" },
      { value: "5个", label: "核心功能模块" },
      { value: "PWA", label: "可安装 · 可离线" }
    ]
  });
});

test("Small Wins hero keeps two direct product evidence links", () => {
  assert.deepEqual(
    tinyAchievementCase.externalLinks.map(({ label }) => label),
    ["体验产品", "查看代码"]
  );
});
