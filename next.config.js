const repoName = process.env.NEXT_PUBLIC_REPO_NAME || "";
const isGithubPages = process.env.DEPLOY_TARGET === "github-pages" && repoName;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: isGithubPages ? `/${repoName}` : ""
  },
  basePath: isGithubPages ? `/${repoName}` : "",
  assetPrefix: isGithubPages ? `/${repoName}/` : ""
};

module.exports = nextConfig;
