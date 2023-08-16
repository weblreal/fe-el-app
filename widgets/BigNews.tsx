import { useRouter } from "next/router";
import { IBrandsNewsRow, IBrandsNews } from "../models/widgets/IBrandsNewsRow";
import AppConfig from "../logic/configs/AppConfig";
import useResponsive from "../hooks/useResponsive";
import { useFetchStoriesQuery } from "../redux/slices/Stories/StoriesAPI";
// Components
import Container from "../components/UI/Container/Container";
import Row from "../components/UI/Row/Row";
import Hidden from "../components/UI/Hidden/Hidden";
import CardBrandsNews from "../components/CardBrandsNews/CardBrandsNews";
import LinkAngle from "../components/UI/LinkAngle/LinkAngle";
import CardBrandsBigNews from "../components/CardBrandsNews/CardBrandsBigNews";
import Grid from "../components/UI/Grid/Grid";
import Header from "../components/UI/Header/Header";
import ViewAllSlide from "../components/ViewAllSlide/ViewAllSlide";
import { SliderRow } from "../components/StyledSlider/SliderRow";
import { useAppSelector } from "../redux/hooks";
import SwiperRow from "../components/Swiper/SwiperRow";

const BigNews = ({ title, cta }: IBrandsNewsRow) => {
  // Hooks
  const router = useRouter();
  const { is } = useResponsive();
  const { localeId } = useAppSelector((state) => state.SearchSlice);

  const { data, isLoading } = useFetchStoriesQuery({
    tags: "__Stories",
    limit: 5,
    siteId: localeId,
  });

  const news = data?.stories;

  // Variables
  const bigNewsNoIndex: IBrandsNews[] | undefined = is("desktopS", ">")
    ? news?.filter((_, key: number) => key !== 0) || []
    : news;

  return (
    <Container
      py={{ _: 3, desktopS: 10 }}
      pt={{ _: 3, desktopS: 9 }}
      maxWidth="screen"
      width="full"
      m="auto"
      overflow="hidden"
    >
      {/* Row 1 */}
      <Hidden till="desktopS">
        <Row
          width="full"
          mb={{ _: "24px", tablet: "32px" }}
          px={{ _: 2, desktopS: 8 }}
          justifyContent="space-between"
          alignItems="center"
        >
          {/* Header */}
          <Header
            element="h2"
            fontFamily="Avenir Medium"
            fontWeight={500}
            fontSize="h2"
          >
            {AppConfig.html(title)}
          </Header>

          {/* CTA */}
          <Hidden till="desktopS">
            {cta && (
              <LinkAngle
                url={cta?.url}
                gap={0}
                label={cta?.label}
                iconVerticalAlign="bottom"
              />
            )}
          </Hidden>
        </Row>
      </Hidden>

      {/* Big News Container*/}
      {news && !!news?.length && (
        <Hidden till="desktopS">
          <Container
            maxWidth="screen"
            minHeight="384px"
            ml="auto"
            px={{ _: 2, desktopS: 8 }}
          >
            <CardBrandsBigNews
              backgroundImage={news?.[0]?.backgroundImage}
              title={news?.[0]?.title}
              cta={{
                label: news?.[0]?.cta?.label || "Read more",
                url: news?.[0]?.cta?.url || "",
              }}
              longText={news?.[0]?.longText}
              date={news?.[0]?.date}
              tagArray={news?.[0]?.tagArray}
              tagCta={cta}
            />
          </Container>
        </Hidden>
      )}

      {/* Desktop */}
      <Hidden till="desktopS">
        <Grid
          px={{ _: 2, desktopS: 8 }}
          gridGap={2}
          gridTemplateColumns={{
            _: "repeat(auto-fill, minmax(288px, 1fr))",
            mobile: "repeat(auto-fit, minmax(260px, 1fr))",
            desktopXL: "repeat(auto-fill, minmax(420px, 1fr))",
          }}
          width="full"
          height="full"
          alignItems="center"
          minHeight="505px"
        >
          {bigNewsNoIndex?.map((slide: IBrandsNews, key: number) => (
            <CardBrandsNews
              backgroundImage={slide.backgroundImage || ""}
              category={
                slide.tagArray ? slide.tagArray[0][router.locale || "en"] : ""
              }
              cta={{
                label: slide.cta?.label || "",
                url: slide.cta?.url || "",
              }}
              date={slide.date}
              title={slide.title}
              tagArray={slide.tagArray}
              key={key}
              picture={slide.picture}
              tagCta={cta}
            />
          ))}
        </Grid>
      </Hidden>

      {/* Mobile */}
      <Hidden from="desktopS">
        <Container minHeight="472px">
          {!!news?.length && (
            <SwiperRow isLoading={isLoading} title={title} uniqiueId="big-news">
              {news?.map((slide: IBrandsNews, key: number) => (
                <Container
                  key={key}
                  width={{ _: "316px", tablet: "full", desktopXL: "432px" }}
                  height="full"
                >
                  <CardBrandsNews
                    backgroundImage={slide.backgroundImage || ""}
                    category={slide?.category}
                    cta={slide?.cta}
                    tagCta={cta}
                    date={slide.date}
                    title={slide?.title}
                    tagArray={slide?.tagArray}
                    picture={slide?.picture}
                  />
                </Container>
              ))}

              {cta && !isLoading && <ViewAllSlide cta={cta} />}
            </SwiperRow>
          )}
        </Container>
      </Hidden>
    </Container>
  );
};

export default BigNews;
