import { GetServerSideProps } from "next";
import { StaticPathsAdapter } from "../adapters/staticPathsAdapter";
import { cmsRepo } from "../logic/graphql/CMSRepo";

function SiteMap() {}

const generateSitemap = (
  locale: any,
  filteredLocalePaths: any,
  context: any,
  cmsLocales: any,
  protocol: any,
  host: any
) => {
  if (locale) {
    // Locale
    context?.res.write(`
      <urlset 
        xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
      >
        ${filteredLocalePaths
          ?.map((path: any) => {
            const modDate = path?.modificationDate?.replace(/Z\[GMT\]/, "");

            return `
            <url>
              <loc>${path?.path}</loc>
              <lastmod>${modDate}+00:00</lastmod>
              <priority>${path?.isPriority ? "1.0" : "0.8"}</priority>
            </url>`;
          })
          .join("")}
      </urlset>
    `);
  } else {
    // Index
    context?.res.write(`
    <sitemapindex xmlns:xhtml="http://www.w3.org/TR/xhtml11/xhtml11_schema.html" xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${cmsLocales
        ?.map((x: string) => {
          return `<sitemap><loc>${protocol}://${host}/${
            x ? x + "/" : ""
          }sitemap.xml</loc></sitemap>`;
        })
        .join("")}
    </sitemapindex>
    `);
  }
};

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  // Variables
  const locale = context.locale === "default" ? "" : context.locale;
  const locales = context.locales?.filter(
    (locale: string) =>
      locale !== "default" &&
      !locale?.includes("esslr") &&
      !locale?.includes("ww")
  );
  const protocol =
    context.req.headers["x-forwarded-proto"] || context.req.connection.encrypted
      ? "https"
      : "http";
  const host = context.req.headers.host;

  try {
    // CMS Request
    const adapter = new StaticPathsAdapter();

    const cmsPathIds = await cmsRepo.getPathsId();
    const pathIdArr = cmsPathIds?.data?.content?.sites?.map(
      (site: any) => site.id
    );

    const pathList = cmsPathIds?.data?.content?.sites?.map((site: any) => ({
      id: site?.id || "",
      locale: site?.locale || "",
      modificationDate: site?.modificationDate || "",
      hiddenInSitemap: site?.hiddenInSitemap || false,
    }));

    let paths: any[] = [];

    for (const elem of pathIdArr) {
      const res = await cmsRepo.getPathsData(elem);
      const adaptedRes = adapter.adapt(res);
      paths.push(...adaptedRes);
    }

    const cmsResponse = { pathIds: pathList, slugList: paths };

    // Filter Locales
    const localePaths = cmsResponse?.slugList?.filter(
      (path: any) =>
        path.locale === locale &&
        !path.locale?.includes("ww") &&
        path.hiddenInSitemap === false
    );
    const filteredLocalePaths = localePaths?.map((path: any) => {
      const isRoot = path?.params?.slug?.length <= 0;

      const page = path?.params?.page?.join("/");
      return {
        path: isRoot
          ? `${protocol}://${host}/${path.locale}/`
          : `${protocol}://${host}/${path.locale}/${page}${page ? "/" : ""}`,
        modificationDate: path.modificationDate,
        isPriority: isRoot,
      };
    });

    // Generate Sitemap
    context?.res.setHeader("Content-Type", "text/xml");
    generateSitemap(
      locale,
      filteredLocalePaths,
      context,
      locales,
      protocol,
      host
    );
    context?.res.end();
  } catch (error) {
    context?.res?.write(`${error?.toString()}`);
    context?.res?.end();
  }

  return {
    props: {},
  };
};

export default SiteMap;
