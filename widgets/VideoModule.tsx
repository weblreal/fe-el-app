// Modules
import React, { useRef, useState, useEffect } from "react";
import AppConfig from "../logic/configs/AppConfig";
import styled from "styled-components";
import { IVideoModule } from "../models/widgets/IVideoModule";
import dark from "../themes/dark";
import useResponsiveBackground from "../hooks/useResponsiveBackground";
// Components
import Container from "../components/UI/Container/Container";
import Icon from "../components/UI/Icon/Icon";
import Text from "../components/UI/Text/Text";
import VideoBanner from "../components/VideoBanner/VideoBanner";
import ClientOnlyPortal from "../components/ClientOnlyPortal/ClientOnlyPortal";
import VideoPlayerModal from "../components/VideoPlayerModal/VideoPlayerModal";
import Flex from "../components/UI/Flex/Flex";
import Header from "../components/UI/Header/Header";
import { ICta } from "../models/components/ICta";
import Button from "../components/UI/Button/Button";
import Span from "../components/UI/Span/Span";
import Link from "next/link";
import useResponsive from "../hooks/useResponsive";

const VideoModule = ({
  title,
  text,
  backgroundVideo,
  cta,
  text2,
  fullVideo,
  hidePauseIcon,
}: IVideoModule) => {
  // Hooks
  const [modal, setModal] = useState<boolean>(false);
  const [background] = useResponsiveBackground(backgroundVideo || [], true);
  const [fullBackground] = useResponsiveBackground(fullVideo || [], true);
  const { is } = useResponsive();
  const sectionRef = useRef<HTMLDivElement>(null);
  const newFragment = (): string => window.location.hash.substring(1);

  useEffect(() => {
    const handleHashChange = () => {
      if (newFragment() === "eyesonart") {
        scrollToSection();
      }
    };
    handleHashChange();

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  // Handlers
  const scrollToSection = () => {
    if (sectionRef.current) {
      const navigationHeight = (): number => {
        const navigationHeightDesktop = 150;
        const navigationHeightMobile = 60;
        return is("desktopS", "<")
          ? navigationHeightMobile
          : navigationHeightDesktop;
      };

      const sectionOffset = sectionRef.current.offsetTop - navigationHeight();

      window.scrollTo({
        top: sectionOffset,
        behavior: "smooth",
      });
    }
  };

  const closeModalHandler = () => {
    setModal(false);
  };

  return (
    <Container
      ref={sectionRef}
      maxWidth="screen"
      width="full"
      height={{ _: "536px", tablet: "680px", desktopXL: "820px" }}
      backgroundColor="black"
      margin="auto"
      position="relative"
    >
      {/* Video */}
      {background && (
        <Container
          position="absolute"
          top={0}
          left={0}
          zIndex={0}
          height="full"
          width="full"
        >
          <VideoBanner
            src={background}
            fullScreen={true}
            autoPlay
            overlay
            muted
            hidePauseIcon={hidePauseIcon}
          />
        </Container>
      )}

      {/* Contents */}
      <Container
        position="relative"
        width="100%"
        height="100%"
        zIndex={1}
        allPointer={false}
      >
        <Container
          width={{ _: "full", tablet: "696px" }}
          pt={{ _: 7, tablet: "80px" }}
          px={{ _: 2, tablet: "0px" }}
          mx={{ tablet: 8 }}
          allPointer={true}
        >
          {/* Title */}
          {title && (
            <Header
              color="#fff"
              fontSize={{ _: "h2", tablet: "48px" }}
              mb={{ _: 1, tablet: 5 }}
              fontWeight="bolder"
              fontFamily="Avenir Bold"
            >
              {AppConfig.html(title)}
            </Header>
          )}

          {/* LongText */}
          {text && (
            <LongText
              color="#fff"
              fontSize={{ _: "16px", tablet: "21px" }}
              mb={{ _: 4, tablet: 5 }}
              fontFamily={{ _: "Avenir Light", tablet: "Avenir Roman" }}
              fontWeight={{ _: "light", tablet: "normal" }}
            >
              {AppConfig.html(text)}
            </LongText>
          )}

          {/* CTA */}
          <Flex flexWrap="wrap">
            {cta?.map((item: ICta, key: number) => (
              <Container
                mb={{ _: 4, tablet: 5 }}
                key={key}
                mr={key + 1 !== (cta || []).length ? 2 : 0}
              >
                <Link
                  href={item.url || "#"}
                  target={item?.isExternal ? "_blank" : "_parent"}
                >
                  <Button variant="primary" theme={dark}>
                    <Span mr={1}>{item.label}</Span>
                    <Icon type="arrow-right" size={24} color="black" />
                  </Button>
                </Link>
              </Container>
            ))}
          </Flex>

          {/* Play */}
          {text2 && fullBackground && (
            <Flex pointer mt="30px" onClick={() => setModal(true)}>
              <Icon type="player" color="#fff" size={24} />
              <Text color="#fff" fontSize="24px" ml="20px">
                {AppConfig.html(text2)}
              </Text>
            </Flex>
          )}
        </Container>
      </Container>

      {/* Modal */}
      <ClientOnlyPortal selector="#portal">
        {modal && fullBackground && (
          <VideoPlayerModal
            src={fullBackground}
            closeHandler={closeModalHandler}
          />
        )}
      </ClientOnlyPortal>
    </Container>
  );
};

const LongText = styled(Text)`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  line-clamp: 9;
  -webkit-line-clamp: 9;
  -webkit-box-orient: vertical;
`;

// const VimeoPlayer = styled(Vimeo)`
//   position: absolute;
//   top: 0;
//   left: 0;
//   bottom: 0;
//   right: 0;
//   width: inherit;
//   height: inherit;
//   z-index: 0;
//   pointer-events: none;
//   overflow: hidden;
//   max-width: 1440px;
//   margin: 0 auto;
//   iframe {
//     min-height: 100vh;
//     min-width: 177.77vh;
//     position: absolute;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//   }
// `;

export default VideoModule;
