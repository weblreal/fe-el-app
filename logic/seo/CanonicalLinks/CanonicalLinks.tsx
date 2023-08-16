import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import { Fragment, useEffect, useState } from "react";
import { elSegmentRemoval } from "../../utilities";

const CanonicalLinks = () => {
  // Hooks
  const [canonical, setCanonical] = useState<any>(null);
  const router = useRouter();

  // Hostname
  let hostname =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : "";

  // Effects
  useEffect(() => {
    if (!hostname) return;
    axios
      .get(`${hostname}/api/getRelatedPaths`, {
        params: {
          path: `el-${router.locale}${router.asPath}`
            ?.split("?")?.[0]
            ?.split("#")?.[0],
        },
      })
      .then((res) => {
        const data = res?.data?.data?.content?.pageByPath?.localizedVariants;
        const formattedData = data
          ?.map((path: any) => path?.navigationPath)
          ?.map(
            (navPath: any) =>
              navPath
                ?.map((pathSegment: any) =>
                  elSegmentRemoval(pathSegment.segment)
                )
                .join("/") + "/"
          )
          ?.filter((can: any, pos: number, self: any) => {
            const locale = can.split("/")[0];
            // return router.locales?.includes(locale) && self.indexOf(can) == pos;
            return router.locales?.includes(locale);
          });

        setCanonical(formattedData);
      });
  }, [router, hostname]);

  return (
    <Head>
      {canonical?.map((link: any, key: number) => {
        const locale = link?.split("/")?.[0] || "";
        const currentLocale = router.locale;
        const isCanonical = currentLocale === locale;
        const isMaster = locale === "esslr-en";

        return (
          !isMaster && (
            <Fragment key={key}>
              <link
                rel="alternate"
                hrefLang={
                  isCanonical
                    ? "x-default"
                    : locale.split("-").reverse().join("-")
                }
                href={`${hostname}/${link}`}
              />
            </Fragment>
          )
        );
      })}
      <link
        rel="alternate"
        hrefLang={router.locale?.split("-").reverse().join("-")}
        href={`${hostname}/${router.locale}${router.asPath}`?.split("?")?.[0]}
      />
      <link
        rel="canonical"
        href={`${hostname}/${router.locale}${router.asPath}`?.split("?")?.[0]}
      />
    </Head>
  );
};

export default CanonicalLinks;
