import dynamic from "next/dynamic";
import { PropsWithChildren } from "react";
import { WidgetParamAdapterFactory } from "../../factory/WidgetParamAdapterFactory";
import { IWidgetModel } from "../../models/IWidget.interface";
import SkeletonLoader from "../UI/SkeletonLoader/SkeletonLoader";

const Widgets: { [key: string]: any } = {
  Navigation: dynamic(
    () => import(`../../components/Navigation/Navigation`).catch((_) => () => null),
    { ssr: true, loading: () => <SkeletonLoader widgetName="Navigation" /> }
  ),
  AnimatedBanner: dynamic(
    () => import(`../../widgets/AnimatedBanner`).catch((_) => () => null),
    { ssr: true, loading: () => <SkeletonLoader widgetName="AnimatedBanner" /> }
  ),
  Announcement: dynamic(
    () => import(`../../widgets/Announcement`).catch((_) => () => null),
    { ssr: true, loading: () => <SkeletonLoader widgetName="Announcement" /> }
  ),
  Article: dynamic(
    () => import(`../../widgets/Article`).catch((_) => () => null),
    { ssr: true, loading: () => <SkeletonLoader widgetName="Article" /> }
  ),
  ArticleCarousel: dynamic(
    () => import(`../../widgets/ArticleCarousel`).catch((_) => () => null),
    { ssr: true, loading: () => <SkeletonLoader widgetName="ArticleCarousel" /> }
  ),
  ArticleDownloadLink: dynamic(
    () => import(`../../widgets/ArticleDownloadLink`).catch((_) => () => null),
    { ssr: true, loading: () => <SkeletonLoader widgetName="ArticleDownloadLink" /> }
  ),
  ArticleNP: dynamic(
    () => import(`../../widgets/ArticleNP`).catch((_) => () => null),
    { ssr: true, loading: () => <SkeletonLoader widgetName="ArticleNP" /> }
  ),
  ArticleTitleAndBody: dynamic(
    () => import(`../../widgets/ArticleTitleAndBody`).catch((_) => () => null),
    { ssr: true, loading: () => <SkeletonLoader widgetName="ArticleTitleAndBody" /> }
  ),
  BigNews: dynamic(
    () => import(`../../widgets/BigNews`).catch((_) => () => null),
    { ssr: true, loading: () => <SkeletonLoader widgetName="BigNews" /> }
  ),
  BlurredSlider: dynamic(
    () => import(`../../widgets/BlurredSlider`).catch((_) => () => null),
    { ssr: true, loading: () => <SkeletonLoader widgetName="BlurredSlider" /> }
  ),
  BoardOfDirectors: dynamic(
    () => import(`../../widgets/BoardOfDirectors`).catch((_) => () => null),
    { ssr: true, loading: () => <SkeletonLoader widgetName="BoardOfDirectors" /> }
  ),
  BoxesBoard: dynamic(
    () => import(`../../widgets/BoxesBoard`).catch((_) => () => null),
    { ssr: true, loading: () => <SkeletonLoader widgetName="BoxesBoard" /> }
  ),
  BoxesCard: dynamic(
    () => import(`../../widgets/BoxesCard`).catch((_) => () => null),
    { ssr: true, loading: () => <SkeletonLoader widgetName="BoxesCard" /> }
  ),
  BrandsGrid: dynamic(
    () => import(`../../widgets/BrandsGrid`).catch((_) => () => null),
    { ssr: true, loading: () => <SkeletonLoader widgetName="BrandsGrid" /> }
  ),
  BrandsModule: dynamic(
    () => import(`../../widgets/BrandsModule`).catch((_) => () => null),
    { ssr: true, loading: () => <SkeletonLoader widgetName="BrandsModule" /> }
  ),
  BrandsNewsRow: dynamic(
    () => import(`../../widgets/BrandsNewsRow`).catch((_) => () => null),
    { ssr: true, loading: () => <SkeletonLoader widgetName="BrandsNewsRow" /> }
  ),
  CalendarEvents: dynamic(
    () => import(`../../widgets/CalendarEvents`).catch((_) => () => null),
    { ssr: true, loading: () => <SkeletonLoader widgetName="CalendarEvents" /> }
  ),
  CareersCarousel: dynamic(
    () => import(`../../widgets/CareersCarousel`).catch((_) => () => null),
    { ssr: true, loading: () => <SkeletonLoader widgetName="CareersCarousel" /> }
  ),
  CenteredCarousel: dynamic(
    () => import(`../../widgets/CenteredCarousel`).catch((_) => () => null),
    { ssr: true, loading: () => <SkeletonLoader widgetName='CenteredCarousel' /> }
  ),
  ClosedBackgroundImage: dynamic(
    () => import(`../../widgets/ClosedBackgroundImage`).catch((_) => () => null),
    { ssr: true, loading: () => <SkeletonLoader widgetName='ClosedBackgroundImage' /> }
  ),
  ClosedBackgroundWParagraph: dynamic(
    () => import(`../../widgets/ClosedBackgroundWParagraph`).catch((_) => () => null),
    { ssr: true, loading: () => <SkeletonLoader widgetName='ClosedBackgroundWParagraph' /> }
  ),
  Columns3: dynamic(
    () => import(`../../widgets/Columns3`).catch((_) => () => null),
    { ssr: true, loading: () => <SkeletonLoader widgetName='Columns3' /> }
  ),
  CommitmentTextImg: dynamic(
    () => import(`../../widgets/CommitmentTextImg`).catch((_) => () => null),
    { ssr: true, loading: () => <SkeletonLoader widgetName='CommitmentTextImg' /> }
  ),
  ConformityDeclaration: dynamic(
    () => import(`../../widgets/ConformityDeclaration`).catch((_) => () => null),
    { ssr: true, loading: () => <SkeletonLoader widgetName='ConformityDeclaration' /> }
  ),
  ContactUs: dynamic(
    () => import(`../../widgets/ContactUs`).catch((_) => () => null),
    { ssr: true, loading: () => <SkeletonLoader widgetName='ContactUs' /> }
  ),
  CustomerCare: dynamic(
    () => import(`../../widgets/CustomerCare`).catch((_) => () => null),
    { ssr: true, loading: () => <SkeletonLoader widgetName='CustomerCare' /> }
  ),
  DirectorProfile: dynamic(
    () => import(`../../widgets/DirectorProfile`).catch((_) => () => null),
    { ssr: true, loading: () => <SkeletonLoader widgetName='DirectorProfile' /> }
  ),
  DirectorsList: dynamic(
    () => import(`../../widgets/DirectorsList`).catch((_) => () => null),
    { ssr: true, loading: () => <SkeletonLoader widgetName='DirectorsList' /> }
  ),
  DiscoverPortfolio: dynamic(
    () => import(`../../widgets/DiscoverPortfolio`).catch((_) => () => null),
    { ssr: true, loading: () => <SkeletonLoader widgetName='DiscoverPortfolio' /> }
  ),
  DocumentsCategories: dynamic(
    () => import(`../../widgets/DocumentsCategories`).catch((_) => () => null),
    { ssr: true, loading: () => <SkeletonLoader widgetName='DocumentsCategories' /> }
  ),
  FinancialInfo: dynamic(
    () => import(`../../widgets/FinancialInfo`).catch((_) => () => null),
    { ssr: true, loading: () => <SkeletonLoader widgetName='FinancialInfo' /> }
  ),
  Footer: dynamic(
    () => import(`../../widgets/Footer`).catch((_) => () => null),
    { ssr: true, loading: () => <SkeletonLoader widgetName='Footer' /> }
  ),
  Gallery: dynamic(
    () => import(`../../widgets/Gallery`).catch((_) => () => null),
    { ssr: true, loading: () => <SkeletonLoader widgetName='Gallery' /> }
  ),
  GroupStructure: dynamic(
    () => import(`../../widgets/GroupStructure`).catch((_) => () => null),
    { ssr: true, loading: () => <SkeletonLoader widgetName='GroupStructure' /> }
  ),
  HeroImageFullscreen: dynamic(
    () => import(`../../widgets/HeroImageFullscreen`).catch((_) => () => null),
    { ssr: true, loading: () => <SkeletonLoader widgetName='HeroImageFullscreen' /> }
  ),
  HorizontalDivider: dynamic(
    () => import(`../../widgets/HorizontalDivider`).catch((_) => () => null),
    { ssr: true, loading: () => <SkeletonLoader widgetName='HorizontalDivider' /> }
  ),
  ImageBanner: dynamic(
    () => import(`../../widgets/ImageBanner`).catch((_) => () => null),
    { ssr: true, loading: () => <SkeletonLoader widgetName='ImageBanner' /> }
  ),
  ImageBlock: dynamic(
    () => import(`../../widgets/ImageBlock`).catch((_) => () => null),
    { ssr: true, loading: () => <SkeletonLoader widgetName='ImageBlock' /> }
  ),
  ImagesBrands: dynamic(
    () => import(`../../widgets/ImagesBrands`).catch((_) => () => null),
    { ssr: true, loading: () => <SkeletonLoader widgetName='ImagesBrands' /> }
  ),
  IntroNav: dynamic(
    () => import(`../../widgets/IntroNav`).catch((_) => () => null),
    { ssr: true, loading: () => <SkeletonLoader widgetName='IntroNav' /> }
  ),
  InvestorKit: dynamic(
    () => import(`../../widgets/InvestorKit`).catch((_) => () => null),
    { ssr: true, loading: () => <SkeletonLoader widgetName='InvestorKit' /> }
  ),
  InvestorsTab: dynamic(
    () => import(`../../widgets/InvestorsTab`).catch((_) => () => null),
    { ssr: true, loading: () => <SkeletonLoader widgetName='InvestorsTab' /> }
  ),
  IRAlerts: dynamic(
    () => import(`../../widgets/IRAlerts`).catch((_) => () => null),
    { ssr: true, loading: () => <SkeletonLoader widgetName='IRAlerts' /> }
  ),
  LeftImageRightText: dynamic(
    () => import(`../../widgets/LeftImageRightText`).catch((_) => () => null),
    { ssr: true, loading: () => <SkeletonLoader widgetName='LeftImageRightText' /> }
  ),
  NewsSingle: dynamic(
    () => import(`../../widgets/NewsSingle`).catch((_) => () => null),
    { ssr: true, loading: () => <SkeletonLoader widgetName='NewsSingle' /> }
  ),
  NewsWall: dynamic(
    () => import(`../../widgets/NewsWall`).catch((_) => () => null),
    { ssr: true, loading: () => <SkeletonLoader widgetName='NewsWall' /> }
  ),
  NotFound: dynamic(
    () => import(`../../widgets/NotFound`).catch((_) => () => null),
    { ssr: true, loading: () => <SkeletonLoader widgetName='NotFound' /> }
  ),
  NumbersModule: dynamic(
    () => import(`../../widgets/NumbersModule`).catch((_) => () => null),
    { ssr: true, loading: () => <SkeletonLoader widgetName='NumbersModule' /> }
  ),
  OtherPublications: dynamic(
    () => import(`../../widgets/OtherPublications`).catch((_) => () => null),
    { ssr: true, loading: () => <SkeletonLoader widgetName='OtherPublications' /> }
  ),
  OverviewBanner: dynamic(
    () => import(`../../widgets/OverviewBanner`).catch((_) => () => null),
    { ssr: true, loading: () => <SkeletonLoader widgetName='OverviewBanner' /> }
  ),
  PressReleaseList: dynamic(
    () => import(`../../widgets/PressReleaseList`).catch((_) => () => null),
    { ssr: true, loading: () => <SkeletonLoader widgetName='PressReleaseList' /> }
  ),
  PressReleaseRow: dynamic(
    () => import(`../../widgets/PressReleaseRow`).catch((_) => () => null),
    { ssr: true, loading: () => <SkeletonLoader widgetName='PressReleaseRow' /> }
  ),
  PressReleases: dynamic(
    () => import(`../../widgets/PressReleases`).catch((_) => () => null),
    { ssr: true, loading: () => <SkeletonLoader widgetName='PressReleases' /> }
  ),
  QuoteBanner: dynamic(
    () => import(`../../widgets/QuoteBanner`).catch((_) => () => null),
    { ssr: true, loading: () => <SkeletonLoader widgetName='QuoteBanner' /> }
  ),
  Search: dynamic(
    () => import(`../../widgets/Search`).catch((_) => () => null),
    { ssr: true, loading: () => <SkeletonLoader widgetName='Search' /> }
  ),
  ServiceAccordion: dynamic(
    () => import(`../../widgets/ServiceAccordion`).catch((_) => () => null),
    { ssr: true, loading: () => <SkeletonLoader widgetName='ServiceAccordion' /> }
  ),
  SharePrice: dynamic(
    () => import(`../../widgets/SharePrice`).catch((_) => () => null),
    { ssr: true, loading: () => <SkeletonLoader widgetName='SharePrice' /> }
  ),
  SingleLaunch: dynamic(
    () => import(`../../widgets/SingleLaunch`).catch((_) => () => null),
    { ssr: true, loading: () => <SkeletonLoader widgetName='SingleLaunch' /> }
  ),
  Sitemap: dynamic(
    () => import(`../../widgets/Sitemap`).catch((_) => () => null),
    { ssr: true, loading: () => <SkeletonLoader widgetName='Sitemap' /> }
  ),
  SolutionsOpticians: dynamic(
    () => import(`../../widgets/SolutionsOpticians`).catch((_) => () => null),
    { ssr: true, loading: () => <SkeletonLoader widgetName='SolutionsOpticians' /> }
  ),
  StoriesCarousel: dynamic(
    () => import(`../../widgets/StoriesCarousel`).catch((_) => () => null),
    { ssr: true, loading: () => <SkeletonLoader widgetName='StoriesCarousel' /> }
  ),
  TabBgImage: dynamic(
    () => import(`../../widgets/TabBgImage`).catch((_) => () => null),
    { ssr: true, loading: () => <SkeletonLoader widgetName='TabBgImage' /> }
  ),
  TabBGImageAdaptive: dynamic(
    () => import(`../../widgets/TabBGImageAdaptive`).catch((_) => () => null),
    { ssr: true, loading: () => <SkeletonLoader widgetName='TabBGImageAdaptive' /> }
  ),
  TabPlacements: dynamic(
    () => import(`../../widgets/TabPlacements`).catch((_) => () => null),
    { ssr: true, loading: () => <SkeletonLoader widgetName='TabPlacements' /> }
  ),
  Testimonial: dynamic(
    () => import(`../../widgets/Testimonial`).catch((_) => () => null),
    { ssr: true, loading: () => <SkeletonLoader widgetName='Testimonial' /> }
  ),
  TextImageColumn: dynamic(
    () => import(`../../widgets/TextImageColumn`).catch((_) => () => null),
    { ssr: true, loading: () => <SkeletonLoader widgetName='TextImageColumn' /> }
  ),
  TextPlusLink: dynamic(
    () => import(`../../widgets/TextPlusLink`).catch((_) => () => null),
    { ssr: true, loading: () => <SkeletonLoader widgetName='TextPlusLink' /> }
  ),
  TitleAndCTA: dynamic(
    () => import(`../../widgets/TitleAndCTA`).catch((_) => () => null),
    { ssr: true, loading: () => <SkeletonLoader widgetName='TitleAndCTA' /> }
  ),
  TitleBodyImgBackground: dynamic(
    () => import(`../../widgets/TitleBodyImgBackground`).catch((_) => () => null),
    { ssr: true, loading: () => <SkeletonLoader widgetName='TitleBodyImgBackground' /> }
  ),
  TitlesCenter: dynamic(
    () => import(`../../widgets/TitlesCenter`).catch((_) => () => null),
    { ssr: true, loading: () => <SkeletonLoader widgetName='TitlesCenter' /> }
  ),
  TitlesCenterAlign: dynamic(
    () => import(`../../widgets/TitlesCenterAlign`).catch((_) => () => null),
    { ssr: true, loading: () => <SkeletonLoader widgetName='TitlesCenterAlign' /> }
  ),
  TitlesColumn: dynamic(
    () => import(`../../widgets/TitlesColumn`).catch((_) => () => null),
    { ssr: true, loading: () => <SkeletonLoader widgetName='TitlesColumn' /> }
  ),
  TitleTwoColumnAccordion: dynamic(
    () => import(`../../widgets/TitleTwoColumnAccordion`).catch((_) => () => null),
    { ssr: true, loading: () => <SkeletonLoader widgetName='TitleTwoColumnAccordion' /> }
  ),
  VideoModule: dynamic(
    () => import(`../../widgets/VideoModule`).catch((_) => () => null),
    { ssr: true, loading: () => <SkeletonLoader widgetName='VideoModule' /> }
  ),
  WizardStep: dynamic(
    () => import(`../../widgets/WizardStep`).catch((_) => () => null),
    { ssr: true, loading: () => <SkeletonLoader widgetName='WizardStep' /> }
  ),
};

type WidgetProps = PropsWithChildren<IWidgetModel>;

const Widget = ({
  widgetName,
  widgetValue,
  widgetContainerId,
}: WidgetProps) => {
  // Variables
  const adapter = new WidgetParamAdapterFactory().instance(widgetName);
  let adaptedValues = adapter ? adapter.adapt(widgetValue) : widgetValue;

  const Dynamic = Widgets[widgetName];

  if(Dynamic) Dynamic.displayName = widgetName;

  return Dynamic ? (
    <Dynamic {...adaptedValues} widgetContainerId={widgetContainerId} />
  ) : null;
};

export default Widget;
