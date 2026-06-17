import { publicPath } from "../lib/paths";

export default function AssetImage({ src, alt, className, loading = "lazy" }) {
  return (
    <img
      className={className}
      src={publicPath(src)}
      alt={alt}
      loading={loading}
      decoding="async"
    />
  );
}
