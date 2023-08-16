// Modules
import { useRef, useState } from "react";
import { IHeroImageFullscreen } from "../models/widgets/IHeroImageFullscreen";
import { AnimatePresence } from "framer-motion";
import useScrolledTop from "../hooks/useScrolledTop";
import AppConfig from "../logic/configs/AppConfig";
import useResponsiveBackground from "../hooks/useResponsiveBackground";
// Components
import Center from "../components/UI/Center/Center";
import Container from "../components/UI/Container/Container";
import Flex from "../components/UI/Flex/Flex";
import Hidden from "../components/UI/Hidden/Hidden";
import Icon from "../components/UI/Icon/Icon";
import BackgroundImage from "../components/UI/BackgroundImage/BackgroundImage";
import QuoteBanner from "./QuoteBanner";
import Grid from "../components/UI/Grid/Grid";
import CTAPlay from "../components/CTAPlay/CTAPlay";
import VideoBanner from "../components/VideoBanner/VideoBanner";
import ClientOnlyPortal from "../components/ClientOnlyPortal/ClientOnlyPortal";
import VideoPlayerModal from "../components/VideoPlayerModal/VideoPlayerModal";
import Header from "../components/UI/Header/Header";

const HeroImageFullscreen = ({
  header,
  backgroundImage,
  backgroundVideo,
  longText,
  videoPlayLabel,
  fullVideo,
}: IHeroImageFullscreen) => {
  // Hooks
  const ref = useRef<HTMLDivElement>(null);
  const { onTop } = useScrolledTop(ref);
  const [modal, setModal] = useState(false);
  const [pause, setPause] = useState(false);
  const [responsiveBackgroundVideo] = useResponsiveBackground(
    backgroundVideo,
    true
  );
  const [responsiveFullBackgroundVideo] = useResponsiveBackground(
    fullVideo,
    true
  );

  // Functions
  const scrollDown = () => {
    const { current } = ref;
    if (current) current?.scrollIntoView({ behavior: "smooth" });
  };

  const openModalHandler = () => {
    setModal(true);
    setPause(true);

    if (responsiveFullBackgroundVideo) document.body.style.overflow = "hidden";
  };

  const closeModalHandler = () => {
    setModal(false);
    setPause(false);

    document.body.style.overflow = "unset";
  };

  return (
    <Container backgroundColor="black" pt={{ _: 0, desktopS: 150 }}>
      <Container
        maxHeight={{ _: "100vh", desktopS: "calc(100vh - 150px)" }}
        height="100vh"
        position="relative"
        overflow="hidden"
      >
        {/* Image */}
        <AnimatePresence>
          {backgroundImage && !responsiveBackgroundVideo && (
            <Container
              animate="show"
              initial="hide"
              exit="hide"
              variants={AppConfig.setAnimationVariant("OPACITY_VARIANT")}
            >
              <BackgroundImage
                src=""
                responsiveBackground={backgroundImage}
                alt={header || ""}
                fixed={!onTop}
              />
            </Container>
          )}
        </AnimatePresence>

        {/* Video */}
        <AnimatePresence>
          {responsiveBackgroundVideo && (
            <Container margin="auto" width="full" maxWidth="screen">
              <VideoBanner
                src={responsiveBackgroundVideo}
                fixed={!onTop}
                pause={pause}
                muted
                fullScreen={true}
                autoPlay
                maxWidth="100vw"
              />
            </Container>
          )}
        </AnimatePresence>

        {/* Texts */}
        <AnimatePresence>
          <Container
            animate="show"
            initial="hide"
            exit="hide"
            variants={AppConfig.setAnimationVariant("OPACITY_VARIANT")}
          >
            <Center
              position="fixed"
              top="0"
              left="0"
              height="100%"
              width="100%"
              allPointer={false}
            >
              <Grid
                allPointer={true}
                maxWidth={{ _: "297.7px", mobile: "unset" }}
              >
                <Header
                  element="h1"
                  fontFamily="Avenir Medium"
                  fontWeight="500"
                  fontSize={{ _: "44px", tablet: "landing" }}
                  color="white"
                  textAlign="center"
                  mb={3}
                  maxWidth={{ _: "260px", tablet: "100%" }}
                >
                  {AppConfig.html(header)}
                </Header>

                <CTAPlay
                  label={videoPlayLabel}
                  onClickHandler={openModalHandler}
                />
              </Grid>
            </Center>
          </Container>
        </AnimatePresence>

        {/* Buttons */}
        <Hidden till="tablet">
          <Flex
            position={!onTop ? "fixed" : "relative"}
            bottom={33}
            justifyContent="center"
            width="full"
            allPointer={false}
          >
            <Container onClick={scrollDown} pointer>
              <Icon color="#ffffff" size={50} type="angle-down" />
            </Container>
          </Flex>
        </Hidden>

        <Hidden from="tablet">
          <Flex
            position={!onTop ? "fixed" : "relative"}
            bottom={17}
            justifyContent="center"
            width="full"
            onClick={scrollDown}
            allPointer={false}
          >
            <Container onClick={scrollDown} pointer>
              <Icon color="#ffffff" size={50} type="angle-down" />
            </Container>
          </Flex>
        </Hidden>
      </Container>

      {longText && (
        <Container ref={ref} zIndex={1} position="relative" backgroundTheme>
          <QuoteBanner longText={longText} />
        </Container>
      )}

      {/* Modal */}
      <ClientOnlyPortal selector="#portal">
        <AnimatePresence>
          {modal && responsiveFullBackgroundVideo && (
            <VideoPlayerModal
              src={responsiveFullBackgroundVideo}
              closeHandler={closeModalHandler}
            />
          )}
        </AnimatePresence>
      </ClientOnlyPortal>
    </Container>
  );
};

export default HeroImageFullscreen;
