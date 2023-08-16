import { useRouter } from "next/router";
import { useEffect } from "react";
import getConfig from "next/config";
declare global {
  interface Window {
    utag_data: any;
    tealium_data2track: any;
  }
}

const AdobeAnalytics = ({ pageType }: any) => {
  const { publicRuntimeConfig } = getConfig();

  // Hooks
  const router = useRouter();

  // Effects
  useEffect(() => {
    // JQuery Script
    const jquery = document.getElementById("jquery-script");
    if (!jquery) {
      const script = document.createElement("script");
      script.src = `https://code.jquery.com/jquery-3.6.1.min.js`;
      script.id = "jquery-script";
      document.head.appendChild(script);
    }

    // Adobe Analytics Script
    const analytics = document.getElementById("adobe-analytics-script");
    if (!analytics) {
      const environment = publicRuntimeConfig.RUNTIME_AKAMAY_URL?.includes(
        "uat"
      )
        ? "qa"
        : "prod";
      // const environment =
      //   process.env.NODE_ENV === "development" ? "qa" : "prod";
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = `https://tags.tiqcdn.com/utag/luxottica/essilorluxottica/${environment}/utag.js?v=${new Date().valueOf()}`;
      script.id = "adobe-analytics-script";
      document.head.appendChild(script);
    }

    const locale = router.locale?.split("-");
    const getCountry = () => {
      switch (locale?.[0]) {
        case "en":
          return "GB";
        case "it":
          return "IT";
        case "fr":
          return "fr";
        default:
          return "";
      }
    };

    const paths =
      typeof router?.query?.page === "string"
        ? [router?.query?.page]
        : router?.query?.page || [];

    let Page_Language = locale?.[0]?.toUpperCase();
    let Page_Country = getCountry();
    let Page_Section1 = "";
    let Page_Section2 = "";

    if (pageType === "Error") {
      Page_Language = Page_Language !== "DEFAULT" ? Page_Language : "EN";
      Page_Country = getCountry();
      Page_Section1 = "Other";
      Page_Section2 = "ErrorHttp404";
    } else {
      Page_Language = Page_Language || "";
      Page_Country = getCountry() || "";
      Page_Section1 = pageType === "Home" ? pageType : paths?.[0] || "";
      Page_Section2 =
        paths?.filter((path: any) => path !== Page_Section1)?.join(":") || "";
    }

    if (!window.tealium_data2track) {
      window.tealium_data2track = [];
    }

    if (router.query.analytics_steps !== "on") {
      window.tealium_data2track.push({
        id: "VirtualPage-View",
        Page_Language: Page_Language,
        Page_Country: Page_Country,
        Page_Type: pageType,
        Page_Section1: Page_Section1,
        Page_Section2: Page_Section2,
      });
    }
  }, [router, pageType, publicRuntimeConfig]);

  return null;
};

export default AdobeAnalytics;
