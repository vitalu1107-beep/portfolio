import Link from "next/link";
import { profile } from "../data/profile";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <strong>{profile.name}</strong>
        <span>{profile.role}</span>
      </div>
      <nav aria-label="页脚导航">
        <Link href="/cases">案例</Link>
        <Link href="/about">方法论</Link>
        <Link href="/contact">联系</Link>
      </nav>
    </footer>
  );
}
