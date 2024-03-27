import Link from "next/link";
import Head from "next/head";

export function MainLayout({ children, title = "Next app" }) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <nav>
        <Link legacyBehavior href={"/"}>
          <a id="link">Home</a>
        </Link>
        <Link legacyBehavior href={"/about"}>
          <a id="link">About</a>
        </Link>
        <Link legacyBehavior href={"/posts"}>
          <a id="link">Posts</a>
        </Link>
      </nav>
      <main>{children}</main>
      <style jsx>{`
        nav {
          position: fixed;
          height: 60px;
          left: 0;
          right: 0;
          top: 0;
          background: darkblue;
          display: flex;
          justify-content: space-around;
          align-items: center;
        }

        nav a {
          color: white;
          text-decoration: none;
          font-weight: 900;
        }

        main {
          margin-top: 60px;
          padding: 1rem;
        }
      `}</style>
    </>
  );
}
