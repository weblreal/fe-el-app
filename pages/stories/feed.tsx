import type { GetServerSideProps } from "next";
import { cmsRepo } from "../../logic/graphql/CMSRepo";
import { getAdapterViewtype, getAdapterCTA } from "../../logic/utilities";
import { Nullable } from "../../models/Nullable.interface";

const Stories = () => {
  return <></>;
};

export default Stories;

export const getServerSideProps: GetServerSideProps = async ({ res, locale }) => {
  try {
    // Fetch ID
    const localeIdList = await cmsRepo.getPathsId();
    const localeId =
    localeIdList?.data?.content?.sites
      ?.map((site: any) => ({
        id: site?.id,
        locale: site?.root?.segment?.replace("el-", ""),
      }))
      ?.find((id: any) => id?.locale === locale)?.id || null;

    // Fetch Story
    const response = await cmsRepo.getStories(
      "__Stories",
      999999,
      "EXTERNALLY_DISPLAYED_DATE_DESC",
      localeId || "EssilorUS",
    );

    // Format Story
    interface IStory {
      url: Nullable<string>;
      date: Nullable<string>;
      title: Nullable<string>;
      subtitle: Nullable<string>;
      image: Nullable<string>;
    }

    const formattedData = response?.data?.content?.search?.result?.map(
      (story: any): IStory => {
        const date = story?.extDisplayedDate?.replace(/\[Europe\/Berlin\]/, "");
        const dateFormatted = date?.slice(0, date?.length - 5);
        const dateFormatted2 = `${dateFormatted?.slice(0, dateFormatted?.length - 1)}:00${dateFormatted?.slice(dateFormatted?.length - 1, dateFormatted?.length)}`;
        const timeZone = date?.slice(date?.length - 5, date?.length)?.replace(/:/g, "");
        
        return {
          date: `${dateFormatted2}${timeZone}` || null,
          image: story?.pictures?.[0]?.data?.uri || null,
          subtitle: story?.detailText?.replace(/<\/?[^>]+(>|$)/g, "") || null,
          title: story?.title || null,
          url: `https://www.essilorluxottica.com/${getAdapterCTA(getAdapterViewtype(story?.related, "CTA").selected?.teaserTargets)?.[0]?.url}` || null,
        }
      }
    );

    res.setHeader("content-type", "application/json");
    res.write(JSON.stringify(formattedData || [] ));
  } catch (err) {
    res.write(JSON.stringify(err));
  }

  res.end();
  return { props: {} };
};
