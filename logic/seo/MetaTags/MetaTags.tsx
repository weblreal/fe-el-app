import { useRouter } from "next/router";
import { IMetaTags } from "../../../models/components/IMetaTags";
import Head from "next/head";

const MetaTags = ({ title, desc, imageURL, robots }: IMetaTags) => {
  // Hooks
  const { asPath } = useRouter();

  // Variables
  let href = "";
  let origin = "";

  if (typeof window !== "undefined") {
    href = window.location.href;
    origin = window.location.origin + "/";
  }

  return (
    <Head>
      {asPath === "/" && (
        <meta
          name="google-site-verification"
          content="XkDrOAHEJZTyaIB3A71TrtaUEq-kqVStyXmpaZV1cIE"
        />
      )}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content={robots || "noindex,nofollow"} />
      <title>{title}</title>
      {!!desc && (
        <meta name="description" content={desc} property="description" />
      )}

      {/* Facebook Meta Tags */}
      <meta property="og:url" content={href} />
      {!!title && <meta property="og:title" content={title} />}
      {!!desc && <meta property="og:description" content={desc} />}
      <meta property="og:image" content={imageURL} />
      <meta property="og:site_name" content="Essilor" />
      <meta property="og:type" content="website" />

      {/* Twitter Meta Tags */}
      {!!title && <meta name="twitter:title" content={title} />}
      {!!desc && <meta name="twitter:description" content={desc} />}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@YourTwitterHandle" />
      <meta name="twitter:domain" content={origin} />
      <meta name="twitter:image:src" content={imageURL} />
      <meta name="twitter:creator" content="@AuthorTwitterHandle" />
    </Head>
  );
};

export default MetaTags;
