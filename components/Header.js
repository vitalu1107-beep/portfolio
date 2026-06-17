import Link from "next/link";
import { useRouter } from "next/router";
import { navigation } from "../data/navigation";
import { profile } from "../data/profile";

export default function Header() {
  const router = useRouter();

  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="返回首页">
        <span>{profile.name.slice(0, 1)}</span>
        <strong>{profile.name}</strong>
      </Link>
      <nav aria-label="主导航">
        {navigation.map((item) => {
          const active =
            item.href === "/" ? router.pathname === "/" : router.pathname.startsWith(item.href);
          return (
            <Link className={active ? "active" : ""} href={item.href} key={item.href}>
              {item.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
