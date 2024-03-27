import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="keywords" content="next, javascript, react" />
        <meta name="description" content="some description" />
        <meta charSet="utf-8" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
