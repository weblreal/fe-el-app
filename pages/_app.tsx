import "../style/global.css";
import "../style/cookies.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-loading-skeleton/dist/skeleton.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { useEffect } from "react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import useGetTealiumConsentPrivacyLink from "../logic/tealium/hooks/useGetTealiumConsentPrivacyLink";
import localFont from "next/font/local";
// Components
import ThemeContextProvider from "../context/ThemeContextProvider";
import AdobeAnalytics from "../logic/tealium/AdobeAnalytics/AdobeAnalytics";
import Favicons from "../logic/seo/Favicons/Favicons";
import WrapperImg from "../logic/seo/WrapperImg/WrapperImg";
declare global {
  interface Window {
    TealiumConsentPrivacyLink: () => void;
  }
}

SwiperCore.use([Navigation, Pagination]);

const AvenirBold = localFont({
  src: "../assets/Fonts/Avenir/AvenirLTStd-Heavy.woff2",
  weight: "900",
  style: "bold",
  variable: "--AvenirBold",
});

const AvenirRegular = localFont({
  src: "../assets/Fonts/Avenir/AvenirLTStd-Book.woff2",
  weight: "400",
  style: "normal",
  variable: "--AvenirRegular",
});

const AvenirMedium = localFont({
  src: "../assets/Fonts/Avenir/AvenirLTStd-Medium.woff2",
  weight: "400",
  style: "normal",
  variable: "--AvenirMedium",
});

const AvenirBlack = localFont({
  src: "../assets/Fonts/Avenir/AvenirLTStd-Black.woff2",
  weight: "900",
  style: "normal",
  variable: "--AvenirBlack",
});

const AvenirRoman = localFont({
  src: "../assets/Fonts/Avenir/AvenirLTStd-Roman.woff2",
  weight: "500",
  style: "normal",
  variable: "--AvenirRoman",
});

const AvenirLight = localFont({
  src: "../assets/Fonts/Avenir/AvenirLTStd-Light.woff2",
  weight: "300",
  style: "normal",
  variable: "--AvenirLight",
});

export default function App({ Component, pageProps }: AppProps) {
  // Tealium
  // useGetTealiumConsentPrivacyLink();
  // const cookies = globalThis?.window?.document.body;

  // useEffect(() => {
  //   if (cookies?.classList?.length === 0) {
  //     cookies.classList.add(`${AvenirRegular.variable}`);
  //     cookies.classList.add(`${AvenirBold.variable}`);
  //     cookies.classList.add(`${AvenirBlack.variable}`);
  //     cookies.classList.add(`${AvenirRoman.variable}`);
  //     cookies.classList.add(`${AvenirMedium.variable}`);
  //     cookies.classList.add(`${AvenirLight.variable}`);
  //   }
  // }, [cookies?.classList]);

  return (
    <div
      className={`
        main-wrapper 
        ${AvenirRegular.variable} 
        ${AvenirBold.variable} 
        ${AvenirBlack.variable} 
        ${AvenirRoman.variable} 
        ${AvenirMedium.variable}
        ${AvenirLight.variable}
      `}
    >
      <Favicons />
      <WrapperImg />

      {/* <AdobeAnalytics
        pageType={
          (pageProps?.data || { pageType: "Error" })?.pageType || "Static"
        }
      /> */}

      <Provider store={store}>
        <ThemeContextProvider defaultTheme="Light Theme">
          <Component {...pageProps} />
        </ThemeContextProvider>
      </Provider>

      <div id="portal"></div>
      <div id="__tealiumGDPRecModal"></div>
    </div>
  );
}
