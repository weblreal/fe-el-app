// Module
import { GetStaticPaths, GetStaticProps } from "next";
import { StaticPathsAdapter } from "../adapters/staticPathsAdapter";
import { jsonToLayoutAdapter } from "../adapters/JsonToLayoutAdapter";
import { cmsRepo } from "../logic/graphql/CMSRepo";
import { useEffect } from "react";
import { useAppDispatch } from "../redux/hooks";
import { setLocaleID, setSearchLabels } from "../redux/slices/Search/SearchSlice";
import { setLabels } from "../redux/slices/Financial/FinancialSlice";
// Components
import OneColumnLayout from "../Layout/OneColumnLayout";
import MetaTags from "../logic/seo/MetaTags/MetaTags";
import CanonicalLinks from "../logic/seo/CanonicalLinks/CanonicalLinks";
import AnnouncementWrapper from "../components/AnnouncementWrapper/AnnouncementWrapper";
import SearchModal from "../components/Search/SearchModal/SearchModal";

const Home = ({
  data,
  localeId,
  genericSettings,
}: {
  data: any;
  localeId: string;
  genericSettings: any;
}) => {
  //Variables
  const renderAnnouncement = data.widgets?.map((widget: any) => widget.widgetName)?.some((item: string) => item === "HideAnnoucement");
  const robots = genericSettings?.SuperHeader?.[0]?.robots;

  // Hooks
  const dispatch = useAppDispatch();

  // Effects
  useEffect(() => {
    if (localeId) {
      dispatch(setLocaleID(localeId));
    }
  }, [localeId, dispatch]);

  useEffect(() => {
    // Super Header
    const saveEnergyToggleText = genericSettings?.SuperHeader?.[0]?.saveEnergyToggleText;
    const sharePriceText = genericSettings?.SuperHeader?.[0]?.sharePriceText;
    const target = genericSettings?.SuperHeader?.[0]?.target;
    const targetTag = genericSettings?.SuperHeader?.[0]?.targetTag;

    dispatch(
      setLabels({
        saveEnergyToggleText: saveEnergyToggleText,
        sharePriceText: sharePriceText,
        target: target,
        targetTag: targetTag,
      })
    );

    // Search
    const searchSettings = genericSettings?.Search?.[0];
    dispatch(
      setSearchLabels({
        SearchPlaceHolderText: searchSettings?.SearchPlaceHolderText,
        PopularSearchesText: searchSettings?.PopularSearchesText,
        SearchText: searchSettings?.SearchText,
        PrevioussearchesText: searchSettings?.PrevioussearchesText,
        NoResultText: searchSettings?.NoResultText,
        enableSearch: searchSettings?.Search,
        target: genericSettings?.searchTargets,
      })
    );
  }, [dispatch, genericSettings]);

  return (
    <div>
      {/* Font Preload */}
      {/* <FontsHeader /> */}

      {/* Meta Tags */}
      <MetaTags
        title={data?.title}
        desc={data?.description}
        imageURL={data?.metaTagImageURL}
        robots={robots}
      />

      {/* Canonical */}
      <CanonicalLinks />

      {data && <OneColumnLayout data={data} />}

      {/* Announcement */}
      {!!genericSettings.Annoucement && !renderAnnouncement && (
        <AnnouncementWrapper genericSettings={genericSettings} />
      )}

      {/* Search Modal */}
      <SearchModal />
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const adapter = new StaticPathsAdapter();

  // Fetch all query path IDs
  const pathIds = await cmsRepo.getPathsId();
  const pathIdArr = pathIds?.data?.content?.sites?.map((site: any) => site.id);

  // Get all available paths to statically generate
  let paths: any[] = [];

  for (const elem of pathIdArr) {
    const res = await cmsRepo.getPathsData(elem);
    const adaptedRes = adapter.adapt(res);

    paths.push(
      ...adaptedRes?.map((res: any) => ({
        params: res.params,
        locale: res.locale,
      }))
    );
  }

  const filteredPaths: any[] = paths.filter((path: any) =>
    locales?.includes(path?.locale)
  );

  return {
    paths: filteredPaths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  // Variables
  let language = context.locale;
  const paths = context.params?.page as String[];
  let queryVariable = language;

  if (paths && paths.length) {
    queryVariable = "/" + paths.join("/");
  } else {
    queryVariable = "";
  }

  if (language) {
    const placementData = await cmsRepo.getLayoutData("el-" + language, queryVariable);
    const jsonTolayoutData = jsonToLayoutAdapter.adapt(placementData);

    // Get Locale ID
    const localeIdList = await cmsRepo.getPathsId();
    const genericSettings = await cmsRepo.getCMSSettings("el-" + language, [
      "Annoucement",
      "List",
      "SuperHeader",
      "FilterMostRecentMapping",
      "FiltersContainer",
      "Search",
    ]);

    const localeId =
      localeIdList?.data?.content?.sites
        ?.map((site: any) => ({
          id: site?.id,
          locale: site?.root?.segment?.replace("el-", ""),
        }))
        ?.find((id: any) => id?.locale === context?.locale)?.id || null;

    const searchTargets =
      genericSettings?.data?.content?.pageByPath?.settings?.Search?.[0]?.target
        ?.replace(/Content\[coremedia:\/\/\/cap\/content\//, "")
        ?.replace(/]/g, "");

    return {
      props: {
        data: jsonTolayoutData,
        localeId: localeId,
        genericSettings: {
          ...genericSettings?.data?.content?.pageByPath?.settings,
          searchTargets: searchTargets || null,
        },
      },
      revalidate: 60,
      notFound: !jsonTolayoutData?.widgets?.length,
    };
  }

  return {
    props: {
      data: null,
    },
    revalidate: 60,
  };
};

export default Home;
