// Modules
import { IAdapter } from "../adapters/Adapter";
import { GenericWidgetNameModel } from "../models/IGenericWidgetValue.interface";
import { Nullable } from "../models/Nullable.interface";
import { Factory } from "./Factory";
// Adapters
import { BlurredSliderAdapter } from "../adapters/widgets/BlurredSlider.adapter";
import { HeroImageFullscreenAdapter } from "../adapters/widgets/HeroImageFullscreen.adapter";
import { OverviewBannerAdapter } from "../adapters/widgets/OverviewBanner.adapter";
import { ImageBannerAdapter } from "../adapters/widgets/ImageBanner.adapter";
import { BrandsModuleAdapter } from "../adapters/widgets/BrandsModule.adapter";
import { HorizontalDividerAdapter } from "../adapters/widgets/HorizontalDivider.adapter";
import { StoriesCarouselAdapter } from "../adapters/widgets/StoriesCarousel.adapter";
import { NumbersModuleAdapter } from "../adapters/widgets/NumbersModule.adapter";
import { AnimatedBannerAdapter } from "../adapters/widgets/AnimatedBanner.adapter";
import { FinancialInfoAdapter } from "../adapters/widgets/FinancialInfo.adapter";
import { FooterAdapter } from "../adapters/widgets/Footer.adapter";
import { TitlesCenterAdapter } from "../adapters/widgets/TitlesCenter.adapter";
import { ImagesBrandsAdapter } from "../adapters/widgets/ImagesBrands.adapter";
import { BrandsNewsRowAdapter } from "../adapters/widgets/BrandsNewsRow.adapter";
import { IntroNavAdapter } from "../adapters/widgets/IntroNav.adapter";
import { NavigationAdapter } from "../adapters/widgets/Navigation.adapter";
import { ImageBlockAdapter } from "../adapters/widgets/ImageBlock.adapter";
import { BrandsGridAdapter } from "../adapters/widgets/BrandsGrid.adapter";
import { SolutionsOpticiansAdapter } from "../adapters/widgets/SolutionsOpticians.adapter";
import { PressReleasesAdapter } from "../adapters/widgets/PressReleases.adapter";
import { ArticleAdapter } from "../adapters/widgets/Article.adapter";
import { BoxesBoardAdapter } from "../adapters/widgets/BoxesBoard.adapter";
import { DiscoverPortfolioAdapter } from "../adapters/widgets/DiscoverPortfolio.adapter";
import { LeftImageRightTextAdapter } from "../adapters/widgets/LeftImageRightText.adapter";
import { BoardOfDirectorsAdapter } from "../adapters/widgets/BoardOfDirectors.adapter";
import { GroupStructureAdapter } from "../adapters/widgets/GroupStructure.adapter";
import { IDodumentCategoriesAdapter } from "../adapters/widgets/DocumentCategories.adapter";
import { TitleAndCTAAdapter } from "../adapters/widgets/TitleAndCTA.adapter";
import { ClosedBackgroundWParagraphAdapter } from "../adapters/widgets/ClosedBackgroundWParagraph.adapter";
import { DirectorProfileAdapter } from "../adapters/widgets/DirectorProfile.adapter";
import { TitleBodyImgBackgroundAdapter } from "../adapters/widgets/TitleBodyImgBackground.adapter";
import { Columns3Adapter } from "../adapters/widgets/Columns3.adapter";
import { SingleLaunchAdapter } from "../adapters/widgets/SingleLaunch.adapter";
import { BoxesCardAdapter } from "../adapters/widgets/BoxesCard.adapter";
import { TabBgImageAdapter } from "../adapters/widgets/TabBgImage.adapter";
import { NewsSingleAdapter } from "../adapters/widgets/NewsSingle.adapter";
import { CommitmentTextImgAdapter } from "../adapters/widgets/CommitmentTextImg.adapter";
import { InvestorsTabAdapter } from "../adapters/widgets/InvestorsTab.adapter";
import { InvestorKitAdapter } from "../adapters/widgets/InvestorKit.adapter";
import { ClosedBackgroundImageAdapter } from "../adapters/widgets/ClosedBackgroundImage.adapter";
import { VideoModuleAdapter } from "../adapters/widgets/VideoModule.adapter";
import { ArticleTitleAndBodyAdapter } from "../adapters/widgets/ArticleTitleAndBody.adapter";
import { IRAlertsAdapter } from "../adapters/widgets/IRAlerts.adapter";
import { ServiceAccordionAdapter } from "../adapters/widgets/ServiceAccordion.adapter";
import { CalendarEventsAdapter } from "../adapters/widgets/CalendarEvents.adapter";
import { ContactUsAdapter } from "../adapters/widgets/ContactUs.adapter";
import { TextPlusLinkAdapter } from "../adapters/widgets/TextPlusLink.adapter";
import { SharePriceAdapter } from "../adapters/widgets/SharePrice.adapter";
import { BigNewsAdapter } from "../adapters/widgets/BigNews.adapter";
import { PressReleaseListAdapter } from "../adapters/widgets/PressReleaseList.adapter";
import { PressReleaseRowAdapter } from "../adapters/widgets/PressReleaseRow.adapter";
import { CareersCarouselAdapter } from "../adapters/widgets/CareersCarousel.adapter";
import { TestimonialAdapter } from "../adapters/widgets/Testimonial.adapter";
import { TextImageColumnAdapter } from "../adapters/widgets/TextImageColumn.adapter";
import { WizardStepAdapter } from "../adapters/widgets/WizardStep.adapter";
import { ArticleCarouselAdapter } from "../adapters/widgets/ArticleCarousel.adapter";
import { GalleryAdapter } from "../adapters/widgets/Gallery.adapter";
import { SitemapAdapter } from "../adapters/widgets/Sitemap.adapter";
import { SearchAdapter } from "../adapters/widgets/Search.adapter";
import { NewsWallAdapter } from "../adapters/widgets/NewsWall.adapter";
import { CenteredCarouselAdapter } from "../adapters/widgets/CenteredCarousel.adapter";
import { TabPlacementsAdapter } from "../adapters/widgets/TabPlacements.adapter";
import { CustomerCareAdapter } from "../adapters/widgets/CustomerCare.adapter";
import { ConformityDeclarationAdapter } from "../adapters/widgets/ConformityDeclaration.adapter";

export class WidgetParamAdapterFactory extends Factory<
  GenericWidgetNameModel,
  Nullable<IAdapter>
> {
  instance: (comparator: GenericWidgetNameModel) => Nullable<IAdapter> = (
    comparator
  ) => {
    switch (comparator) {
      case "HeroImageFullscreen":
        return new HeroImageFullscreenAdapter();
      case "BlurredSlider":
        return new BlurredSliderAdapter();
      case "OverviewBanner":
        return new OverviewBannerAdapter();
      case "ImageBanner":
        return new ImageBannerAdapter();
      case "BrandsModule":
        return new BrandsModuleAdapter();
      case "HorizontalDivider":
        return new HorizontalDividerAdapter();
      case "StoriesCarousel":
        return new StoriesCarouselAdapter();
      case "NumbersModule":
        return new NumbersModuleAdapter();
      case "AnimatedBanner":
        return new AnimatedBannerAdapter();
      case "FinancialInfo":
        return new FinancialInfoAdapter();
      case "Footer":
        return new FooterAdapter();
      case "IntroNav":
        return new IntroNavAdapter();
      case "TitlesCenter":
      case "TitlesColumn":
      case "TitlesCenterAlign":
        return new TitlesCenterAdapter();
      case "ImagesBrands":
        return new ImagesBrandsAdapter();
      case "BrandsNewsRow":
        return new BrandsNewsRowAdapter();
      case "BigNews":
        return new BigNewsAdapter();
      case "Navigation":
        return new NavigationAdapter();
      case "ImageBlock":
        return new ImageBlockAdapter();
      case "BrandsGrid":
        return new BrandsGridAdapter();
      case "SolutionsOpticians":
        return new SolutionsOpticiansAdapter();
      case "PressReleases":
        return new PressReleasesAdapter();
      case "Article":
      case "ArticleNP":
        return new ArticleAdapter();
      case "BoxesBoard":
        return new BoxesBoardAdapter();
      case "DiscoverPortfolio":
        return new DiscoverPortfolioAdapter();
      case "LeftImageRightText":
        return new LeftImageRightTextAdapter();
      case "BoardOfDirectors":
      case "DirectorsList":
        return new BoardOfDirectorsAdapter();
      case "GroupStructure":
        return new GroupStructureAdapter();
      case "PressReleaseList":
        return new PressReleaseListAdapter();
      case "DocumentsCategories":
      case "OtherPublications":
        return new IDodumentCategoriesAdapter();
      case "TitleAndCTA":
        return new TitleAndCTAAdapter();
      case "ClosedBackgroundWParagraph":
        return new ClosedBackgroundWParagraphAdapter();
      case "DirectorProfile":
        return new DirectorProfileAdapter();
      case "TitleBodyImgBackground":
        return new TitleBodyImgBackgroundAdapter();
      case "Columns3":
        return new Columns3Adapter();
      case "SingleLaunch":
        return new SingleLaunchAdapter();
      case "BoxesCard":
        return new BoxesCardAdapter();
      case "TabBgImage":
      case "TabBGImageAdaptive":
        return new TabBgImageAdapter();
      case "NewsSingle":
        return new NewsSingleAdapter();
      case "CommitmentTextImg":
        return new CommitmentTextImgAdapter();
      case "InvestorsTab":
        return new InvestorsTabAdapter();
      case "InvestorKit":
        return new InvestorKitAdapter();
      case "ClosedBackgroundImage":
        return new ClosedBackgroundImageAdapter();
      case "VideoModule":
        return new VideoModuleAdapter();
      case "ArticleTitleAndBody":
        return new ArticleTitleAndBodyAdapter();
      case "IRAlerts":
        return new IRAlertsAdapter();
      case "ServiceAccordion":
        return new ServiceAccordionAdapter();
      case "CalendarEvents":
        return new CalendarEventsAdapter();
      case "ContactUs":
        return new ContactUsAdapter();
      case "TextPlusLink":
        return new TextPlusLinkAdapter();
      case "SharePrice":
        return new SharePriceAdapter();
      case "PressReleaseRow":
        return new PressReleaseRowAdapter();
      case "CareersCarousel":
        return new CareersCarouselAdapter();
      case "Testimonial":
        return new TestimonialAdapter();
      case "TextImageColumn":
        return new TextImageColumnAdapter();
      case "WizardStep":
        return new WizardStepAdapter();
      case "ArticleCarousel":
        return new ArticleCarouselAdapter();
      case "Gallery":
        return new GalleryAdapter();
      case "Sitemap":
        return new SitemapAdapter();
      case "Search":
        return new SearchAdapter();
      case "NewsWall":
        return new NewsWallAdapter();
      case "CenteredCarousel":
        return new CenteredCarouselAdapter();
      case "TabPlacements":
        return new TabPlacementsAdapter();
      case "CustomerCare":
        return new CustomerCareAdapter();
      case "ConformityDeclaration":
        return new ConformityDeclarationAdapter();
      default:
        return null;
    }
  };
}
