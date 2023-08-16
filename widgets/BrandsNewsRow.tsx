import AppConfig from "../logic/configs/AppConfig";
import { IBrandsNewsRow, IBrandsNews } from "../models/widgets/IBrandsNewsRow";
import { useFetchStoriesQuery } from "../redux/slices/Stories/StoriesAPI";
import { useAppSelector } from "../redux/hooks";
// Components
import Container from "../components/UI/Container/Container";
import Row from "../components/UI/Row/Row";
import Hidden from "../components/UI/Hidden/Hidden";
import Text from "../components/UI/Text/Text";
import CardBrandsNews from "../components/CardBrandsNews/CardBrandsNews";
import LinkAngle from "../components/UI/LinkAngle/LinkAngle";
import SwiperRow from "../components/Swiper/SwiperRow";
import ViewAllSlide from "../components/ViewAllSlide/ViewAllSlide";

const BrandsNewsRow = ({
  title,
  cta,
  tagsToQuery,
}: IBrandsNewsRow) => {
  // Hooks
  const { relatedTags, currentArticleID } = useAppSelector(
    (state) => state.StoriesSlice
  );
  const { localeId } = useAppSelector((state) => state.SearchSlice);

  // Fetch Tags
  const tagParam = tagsToQuery || (relatedTags || []).join(",");
  const { data, isLoading } = useFetchStoriesQuery({
    tags: tagParam || "__Stories",
    siteId: localeId,
  });

  const response = (
    data?.stories?.filter(
      (article) => article.articleId !== currentArticleID
    ) || []
  )
    ?.slice()
    .sort((a: any, b: any) => {
      const bDate: any = new Date(b.date);
      const aDate: any = new Date(a.date);
      return bDate - aDate;
    })
    ?.slice(0, 4);

  return (
    <Container overflow="hidden">
      <Container
        py={{ _: 3, desktopS: 10 }}
        pt={{ _: 3, desktopS: 9 }}
        maxWidth="screen"
        width="full"
        m="auto"
      >
        {/* Brand List */}
        <Hidden till="desktopS">
          <Row
            width="full"
            mb={{ _: "24px", tablet: "32px" }}
            justifyContent="space-between"
            alignItems="center"
            px={{ _: 2, tablet: 8 }}
          >
            <Text
              fontSize={["h3", "h2"]}
              fontFamily="Avenir Medium"
              fontWeight="500"
            >
              {AppConfig.html(title)}
            </Text>
            {cta && (
              <LinkAngle
                url={cta?.url}
                gap={0}
                label={cta?.label}
                iconVerticalAlign="text-bottom"
                fontFamily="Avenir Light"
                fontWeight="300"
              />
            )}
          </Row>
        </Hidden>

        {/* Desktop */}
        <Hidden till="desktopS">
          <SwiperRow isLoading={isLoading} title={title} uniqiueId="brands-row">
            {response?.map((slide: IBrandsNews, key: number) => (
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
          </SwiperRow>
        </Hidden>

        {/* Mobile */}
        <Hidden from="desktopS">
          {cta && (
            <SwiperRow isLoading={isLoading} title={title}>
              {response?.map((slide: IBrandsNews, key: number) => (
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

              {cta && !isLoading && (
                <Hidden from="desktopS">
                  <Container
                    width={{ _: "316px", tablet: "full", desktopXL: "432px" }}
                  >
                    <ViewAllSlide cta={cta} />
                  </Container>
                </Hidden>
              )}
            </SwiperRow>
          )}

          {!cta && (
            <SwiperRow isLoading={isLoading} title={title}>
              {response?.map((slide: IBrandsNews, key: number) => (
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
            </SwiperRow>
          )}
        </Hidden>
      </Container>
    </Container>
  );
};

export default BrandsNewsRow;
