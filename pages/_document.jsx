import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const description = "OCSRA dApp";

  return (
    <Html>
      <Head>
        <meta charSet="utf-8" />
        <meta name="author" content="Nomis" />
        <meta name="description" content={description} />
        <meta name="og:description" content={description} />
        <link rel="icon" type="svg/xml" href="/ocsra.svg" />
      </Head>
      <body className="dark">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
