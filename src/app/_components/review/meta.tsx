import Head from "next/head";

const Meta = () => {
  return (
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta name="theme-color" content="#000" />
      {/* <meta
        name="description"
        content="Consumer Trust Coalition puts products to the test so you only buy the best."
      />
      <meta property="og:image" content="https://imagedelivery.net/3TTaU3w9z1kOYYtN3czCnw/b5e843eb-dece-4266-0000-2bbe00f67400/public" /> */}
    </Head>
  );
};

export default Meta;
