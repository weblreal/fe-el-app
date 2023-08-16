// Modules
import Head from "next/head";

// Components

type IFaviconsProps = {};

const Favicons: React.FC<IFaviconsProps> = ({}) => {
  // Hooks
  // Variables
  // Functions
  // Effects

  return (
    <Head>
      {/* Light */}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/Icons/Faviconnobg.png"
        media="(prefers-color-scheme: light)"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/Icons/Faviconnobg.png"
        media="(prefers-color-scheme: light)"
      />
      <link
        rel="mask-icon"
        href="/Icons/Faviconnobg.svg"
        media="(prefers-color-scheme: light)"
      />
      <link
        rel="shortcut icon"
        href="/Icons/Faviconnobg.svg"
        media="(prefers-color-scheme: light)"
      />

      {/* Dark */}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/Icons/Faviconwithbg.png"
        media="(prefers-color-scheme: dark)"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/Icons/Faviconwithbg.png"
        media="(prefers-color-scheme: dark)"
      />
      <link
        rel="mask-icon"
        href="/Icons/Faviconwithbg.svg"
        media="(prefers-color-scheme: dark)"
      />
      <link
        rel="shortcut icon"
        href="/Icons/Faviconwithbg.svg"
        media="(prefers-color-scheme: dark)"
      />
    </Head>
  );
};
export default Favicons;
