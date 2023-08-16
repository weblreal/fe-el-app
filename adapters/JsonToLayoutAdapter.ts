import AppConfig from "../logic/configs/AppConfig";
import PLACEMENTS_TO_MERGE from "../logic/constants/PLACEMENTS_TO_MERGE";
import PLACEMENTS_TO_REMOVE from "../logic/constants/PLACEMENTS_TO_REMOVE";
import { ILayoutModel } from "../models/components/ILayout.interface";
import { IWidgetModel } from "../models/IWidget.interface";
import { Nullable } from "../models/Nullable.interface";
import { Adapter } from "./Adapter";

const WIDGET_NAME_TO_ID: Record<string, any> = {
  heroBannerStatic: "HeroImageFullscreen",
  blurredSlider: "BlurredSlider",
  OverviewBanner: "OverviewBanner",
  BoardsVerticalTitle: "ImageBanner",
  brandsModule: "BrandsModule",
  horizontalDivider: "HorizontalDivider",
  newsCTA: "StoriesCarousel",
  FinancialInfo: "FinancialInfo",
  "verticalBoards#on": "NumbersModule",
  CareerCTA: "AnimatedBanner",
  subNavigation: "IntroNav",
  darkLighttext: "TitlesColumn",
  portfolio: "ImagesBrands",
  "News-Row": "BrandsNewsRow",
  Article: "Article",
  BoxesBoard: "BoxesBoard",
  BrandsGrid: "BrandsGrid",
  Img_block: "ImageBlock",
  DoubleLaunch: "DiscoverPortfolio",
  TextArticle: "Article",
  "2BoxesBoard": "BoxesBoard",
  PressReleaseSlider: "PressReleases",
  "5050ImageLeft": "SolutionsOpticians",
  LeftImageRightText: "LeftImageRightText",
  boardDirectors: "BoardOfDirectors",
  "Group structure": "GroupStructure",
  OtherPublications: "OtherPublications",
  boardofDirectorsProfile: "DirectorProfile",
  "Closed-Background-Image+paragraph": "ClosedBackgroundWParagraph",
  "Title+CTA": "TitleAndCTA",
  boardofDirectorsList: "DirectorsList",
  Documents_categories: "DocumentsCategories",
  "Title+Body_img-background": "TitleBodyImgBackground",
  VideoModule: "VideoModule",
  Columns_3: "Columns3",
  "Titles-Center": "TitlesCenterAlign",
  "Single-Launch": "SingleLaunch",
  "Boxes-Card": "BoxesCard",
  Tab_background_img: "TabBgImage",
  "News-Single": "NewsSingle",
  "commitment_text+img": "CommitmentTextImg",
  InvestorsTab: "InvestorsTab",
  "Closed-Background-Image": "ClosedBackgroundImage",
  "Article-Title&body": "ArticleTitleAndBody",
  IRAlerts: "IRAlerts",
  BigNews: "BigNews",
  Service_accordion: "ServiceAccordion",
  CalenderEvents: "CalendarEvents",
  SharePrice: "SharePrice",
  contactUs: "ContactUs",
  "Text+Link": "TextPlusLink",
  "PressRelease-List": "PressReleaseList",
  "Wizard-Step": "WizardStep",
  "Article-Carousel": "ArticleCarousel",
  press_release_row: "PressReleaseRow",
  Carousel: "CareersCarousel",
  "News-Wall": "NewsWall",
  Testimonial: "Testimonial",
  "Column - Text + 2Image": "TextImageColumn",
  SearchBox: "Search",
  Tab_BG_Image_Adaptive: "TabBGImageAdaptive",
  "Carousel-centered": "CenteredCarousel",
  "Conformity-Declaration": "ConformityDeclaration",
  "TextArticle small padding": "ArticleNP",
  DynamicContentTab: "TabPlacements",
};

const { mergePlacement } = AppConfig;

class JsonToLayoutAdapter extends Adapter<
  Nullable<Record<string, any>>,
  Nullable<ILayoutModel>
> {
  adapt: (
    source: Nullable<Record<string, any>>,
    path?: string
  ) => Nullable<ILayoutModel> = (source) => {
    // Variables
    const pageByPath = source?.data?.content?.pageByPath;
    let widgetsMapped: Array<IWidgetModel> = [];
    let metaTags: any = [];
    let metaTagImageURL: any = "";

    // Functions
    const checkEmptyItems = (elem: any) => elem.placements[0].items.length > 0;
    const checkDefaultItems = (elem: any) =>
      elem.placements[0].viewtype !== "default";
    const filterPlacementToRemove = (elem: any) =>
      !PLACEMENTS_TO_REMOVE.includes(elem.placements[0].viewtype);

    // Get widget data
    if (pageByPath && pageByPath.grid) {
      const rows = pageByPath?.grid?.rows;

      // Merged Placements
      const Footer = mergePlacement(
        rows,
        "Footer",
        PLACEMENTS_TO_MERGE["Footer"]
      );

      const Navigation = mergePlacement(
        rows,
        "Navigation",
        PLACEMENTS_TO_MERGE["Navigation"]
      );

      const grid =
        rows?.map(<T>(row: T, key: number) => ({
          ...row,
          orderId: key + 1,
        })) || [];
      grid.push(Footer);
      // grid.push(Navigation);

      widgetsMapped = [Navigation, ...grid]
        ?.filter(checkEmptyItems)
        ?.filter(checkDefaultItems)
        ?.filter(filterPlacementToRemove)
        ?.map((row: any) => {
          let widgetId =
            WIDGET_NAME_TO_ID[row?.placements[0]?.viewtype] ||
            row?.placements[0]?.viewtype;

          return {
            widgetName: widgetId?.trim(),
            widgetValue: row?.placements[0]?.items,
            widgetContainerId: row?.orderId + 2,
          };
        });

      // Get Meta Tags
      const metaTagsData = grid?.find(
        (rows: any) => rows?.placements[0]?.name === "Meta_links"
      );
      metaTags = AppConfig.getMetaTagsLinks(metaTagsData);
    }

    return {
      layoutType:
        source?.data?.content?.pageByPath?.viewtype || "OneColumnLayout",
      widgets: [...widgetsMapped],
      title:
        source?.data?.content?.pageByPath?.htmlTitle ||
        source?.data?.content?.pageByPath?.title ||
        "Essilor | Luxottica",
      description: source?.data?.content?.pageByPath?.htmlDescription || "",
      pageType:
        source?.data?.content?.pageByPath?.subjectTaxonomy?.[0]?.value || "",
      metaTags: metaTags,
      metaTagImageURL: metaTagImageURL,
    };
  };

  adaptReverse: (
    source: Nullable<ILayoutModel>
  ) => Nullable<Record<string, any>> = (source) => {
    if (!source) return null;
    return JSON.parse(JSON.stringify(source));
  };
}

export const jsonToLayoutAdapter = new JsonToLayoutAdapter();
