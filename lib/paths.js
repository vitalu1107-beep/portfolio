export function publicPath(path) {
  if (!path) return "";
  if (/^https?:\/\//.test(path)) return path;
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${normalized}`;
}
