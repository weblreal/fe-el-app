import { IPressRelease } from "../components/PressRelease/IPressRelease";
import { IPressReleaseRow } from "../models/widgets/IPressReleaseRow";
import { useFetchPressReleasesQuery } from "../redux/slices/PressRelease/PressReleaseAPI";
import { useAppSelector } from "../redux/hooks";
import { TRANSLATED_PRESSPRELEASE_HEADER } from "../logic/constants/TRANSLATED_PRESSRELEASE_HEADER";
import { useRouter } from "next/router";
// Components
import Container from "../components/UI/Container/Container";
import Grid from "../components/UI/Grid/Grid";
import PressReleaseSmall from "../components/PressReleaseSmall/PressReleaseSmall";
import Hidden from "../components/UI/Hidden/Hidden";
import ViewAllSlide from "../components/ViewAllSlide/ViewAllSlide";
import Flex from "../components/UI/Flex/Flex";
import Text from "../components/UI/Text/Text";
import LinkAngle from "../components/UI/LinkAngle/LinkAngle";
import SwiperRow from "../components/Swiper/SwiperRow";

const PressReleaseRow = ({
  cta,
  header,
  downloadAllLabel,
  tagsToQuery,
}: IPressReleaseRow) => {
  // Hooks
  const { locale } = useRouter();
  const { localeId } = useAppSelector((state) => state.SearchSlice);
  const { currentArticleID } = useAppSelector((state) => state.StoriesSlice);
  const { data: response } = useFetchPressReleasesQuery({
    tags: tagsToQuery || "__press_Release",
    siteId: localeId,
  });
  const translatedHeader = TRANSLATED_PRESSPRELEASE_HEADER?.[locale || "en"];

  const data =
    response?.pressRelease
      ?.filter((article) => article.articleId !== currentArticleID)
      ?.slice(0, 4) || [];

  return (
    <Container overflow="hidden">
      <Container
        py={{ _: 3, desktopS: 10 }}
        pt={{ _: 3, desktopS: 9 }}
        maxWidth="screen"
        width="full"
        m="auto"
        minHeight={476}
      >
        {/* Desktop */}
        <Hidden till="desktopS">
          {data && (
            <Flex
              justifyContent={{ _: "space-between" }}
              alignItems={{ _: "center" }}
              mb={{ _: 3, desktopS: 4 }}
              px={{ _: 2, desktopS: 8 }}
            >
              {/* Header */}
              {(header || translatedHeader) && (
                <Text fontFamily="Avenir Medium" fontSize="h2" fontWeight="500">
                  {header || translatedHeader}
                </Text>
              )}

              {/* CTA */}
              <Hidden till="desktopS">
                {cta && data && (
                  <Container>
                    <LinkAngle
                      label={cta?.label}
                      url={cta?.url}
                      fontSize="h5"
                      gap={0}
                      iconVerticalAlign="sub"
                    />
                  </Container>
                )}
              </Hidden>
            </Flex>
          )}

          {/* Slider */}
          <Grid
            gridGap={2}
            gridTemplateColumns={{
              _: "repeat(auto-fit, minmax(316px, 1fr))",
              mobile: "repeat(auto-fit, minmax(260px, 1fr))",
              desktopXL: "repeat(auto-fill, minmax(430px, 1fr))",
            }}
            px={8}
          >
            {data?.map((press: IPressRelease, key: number) => (
              <PressReleaseSmall
                {...press}
                tagCta={cta}
                downloadAllLabel={downloadAllLabel}
                tags={press.tags?.slice(1)}
                key={key}
              />
            ))}
          </Grid>
        </Hidden>

        {/* Mobile */}
        <Hidden from="desktopS">
          {/* WITH CTA */}
          {data && cta && (
            <SwiperRow title={header} uniqiueId="press-row">
              {data?.map((press: IPressRelease, key: number) => (
                <Container
                  maxWidth={{ _: 316, tablet: "full" }}
                  minWidth={{ _: 316, tablet: "full" }}
                  height="full"
                  key={key}
                >
                  <PressReleaseSmall
                    {...press}
                    downloadAllLabel={downloadAllLabel}
                    tags={press.tags?.slice(1)}
                  />
                </Container>
              ))}

              {cta && data && (
                <Container
                  maxWidth={{ _: 316, tablet: "full" }}
                  minWidth={{ _: 316, tablet: "full" }}
                  height="full"
                >
                  <ViewAllSlide cta={cta} height={360} />
                </Container>
              )}
            </SwiperRow>
          )}

          {/* NO CTA */}
          {data && !cta && (
            <SwiperRow title={header} uniqiueId="press-row">
              {data?.map((press: IPressRelease, key: number) => (
                <Container
                  maxWidth={{ _: 316, tablet: "full" }}
                  minWidth={{ _: 316, tablet: "full" }}
                  height="full"
                  key={key}
                >
                  <PressReleaseSmall
                    {...press}
                    downloadAllLabel={downloadAllLabel}
                    tags={press.tags?.slice(1)}
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

export default PressReleaseRow;
