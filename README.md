# 卢倩个人作品集网站

这是一个面向用户运营、增长运营、私域运营岗位投递的个人作品集网站。项目基于 Next.js，使用纯前端静态导出，适合部署到 Vercel 或 GitHub Pages。

## 项目结构

```txt
luqian-portfolio-site
├── components        # 通用 UI 组件
├── data              # 个人信息与案例数据
├── lib               # 公共路径工具
├── pages             # 多页面路由
│   ├── index.js      # Home
│   ├── about.js      # About
│   ├── cases         # Case Study 列表与详情
│   └── contact.js    # Contact
├── public
│   ├── assets/cases  # PPT 提取的项目截图
│   └── resume        # 可下载简历
├── styles            # 全局样式
├── next.config.js
└── package.json
```

## 本地运行

```bash
npm install
npm run dev
```

默认访问地址：

```txt
http://localhost:3000
```

## 内容维护

个人信息、联系方式、简历地址：

```txt
data/profile.js
```

案例标题、指标、方法论、复盘、图表与截图：

```txt
data/cases.js
```

项目截图放在：

```txt
public/assets/cases
```

简历文件放在：

```txt
public/resume/luqian-resume.pdf
```

## Vercel 部署

1. 将项目推送到 GitHub。
2. 在 Vercel 中选择 Import Project。
3. Framework Preset 选择 Next.js。
4. Build Command 使用默认值 `npm run build`。
5. 部署完成后即可获得线上访问地址。

## GitHub Pages 部署

项目已包含 GitHub Actions workflow：`.github/workflows/deploy.yml`。

如果仓库名不是根域名仓库，需要在仓库的 Actions Variables 中配置：

```txt
NEXT_PUBLIC_REPO_NAME=你的仓库名
```

workflow 会设置：

```txt
DEPLOY_TARGET=github-pages
```

然后执行静态构建并发布 `out` 目录。
