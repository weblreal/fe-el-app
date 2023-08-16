import { useRouter } from "next/router";
import { useEffect } from "react";

const useGetTealiumConsentPrivacyLink = () => {
  // Hooks
  const router = useRouter();

  useEffect(() => {
    switch (router.locale) {
      case "en":
        if (globalThis.window) {
          window.utag_data = {
            Page_Country: "GB",
          };

          window.TealiumConsentPrivacyLink = function () {
            location.href = "/en/privacy-notice/";
          };
        }

        break;

      case "it":
        if (globalThis.window) {
          window.utag_data = {
            Page_Country: "IT",
          };

          window.TealiumConsentPrivacyLink = function () {
            location.href = "/it/informative-sulla-privacy/";
          };
        }

        break;

      case "fr":
        if (globalThis.window) {
          window.utag_data = {
            Page_Country: "FR",
          };

          window.TealiumConsentPrivacyLink = function () {
            location.href = "/fr/politique-de-cookies/";
          };
        }

        break;
    }
  }, [router.locale]);
};

export default useGetTealiumConsentPrivacyLink;
