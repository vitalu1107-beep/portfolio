import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";

export default function SiteShell({ title, description, children }) {
  const pageTitle = title ? `${title} | 卢倩作品集` : "卢倩作品集";

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={description || "用户运营、增长运营、私域运营作品集"} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="app-shell">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}
