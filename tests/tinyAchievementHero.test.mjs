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
  });
});

test("Small Wins hero keeps two direct product evidence links", () => {
  assert.deepEqual(
    tinyAchievementCase.externalLinks.map(({ label }) => label),
    ["体验产品", "查看代码"]
  );
});
