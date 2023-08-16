// Modules
import Head from "next/head";

const FontsHeader: React.FC = () => {
  // Hooks
  // Variables
  // Functions
  // Effects

  return (
    <Head>
      {/* Fonts */}
      <link
        rel="preload"
        href="/Fonts/Avenir/AvenirLTStd-Book.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/Fonts/Avenir/AvenirLTStd-Light.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/Fonts/Avenir/AvenirLTStd-Heavy.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/Fonts/Avenir/AvenirLTStd-Black.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/Fonts/Avenir/AvenirLTStd-Roman.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/Fonts/Avenir/AvenirLTStd-Medium.woff2"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
      />
    </Head>
  );
};
export default FontsHeader;
