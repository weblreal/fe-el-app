// Modules
import { useState, useRef, useEffect } from "react";
import { getVideoType } from "../../logic/utilities";
import { IVideo } from "../../models/IVideo";
import useResponsive from "../../hooks/useResponsive";
import AppConfig from "../../logic/configs/AppConfig";
// Components
import Container from "../UI/Container/Container";
import Flex from "../UI/Flex/Flex";
import Icon from "../UI/Icon/Icon";
import MotionContainer from "../UI/MotionContainer/MotionContainer";
import VideoIFramePlayer from "../VideoIFramePlayer/VideoIFramePlayer";
import VideoPlayer from "../VideoPlayer/VideoPlayer";

export interface IVideoBanner extends IVideo {
  fixed?: boolean;
  autoPlay?: boolean;
  pause?: boolean;
  fullScreen?: boolean;
  overlay?: boolean;
  controls?: boolean;
  hidePauseIcon?: boolean;
  swipe?: boolean;
  scale?: boolean;
}

const VideoBanner = ({
  src,
  fixed = false,
  autoPlay = false,
  pause = false,
  fullScreen = false,
  overlay = false,
  maxWidth = "screen",
  controls = false,
  muted,
  hidePauseIcon,
  swipe,
  scale = false,
}: IVideoBanner) => {
  // Hooks
  const [play, setPlay] = useState(autoPlay);
  const { is } = useResponsive();
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setIsVisible(entry.isIntersecting);
    });

    if (container) {
      observer.observe(container);
    }

    return () => {
      if (container) {
        observer.unobserve(container);
      }
    };
  }, [containerRef]);

  // Handlers
  const renderVideo = () => {
    const videoType = getVideoType(src);

    if (videoType === "vimeo") {
      return (
        <VideoIFramePlayer
          src={src}
          fixed={fixed}
          play={play && !pause && isVisible}
          fullScreen={fullScreen}
          controls={controls}
          muted={muted}
          maxWidth={maxWidth}
          scale={scale}
        />
      );
    } else if (videoType === "youtube") {
      return (
        <VideoIFramePlayer
          src={src}
          fixed={fixed}
          play={play && !pause && isVisible}
          fullScreen={fullScreen}
          controls={controls}
          muted={muted}
          maxWidth={maxWidth}
        />
      );
    } else {
      return (
        <Flex justifyContent="center" height="full">
          <VideoPlayer
            src={src}
            play={play && !pause && isVisible}
            muted={muted}
            autoPlay={autoPlay}
            maxWidth={maxWidth}
            ref={videoRef}
          />
        </Flex>
      );
    }
  };

  const onPlayHandler = () => {
    const { current } = videoRef;

    if (!current) return;

    if (!play) {
      current.play();
    } else {
      current.pause();
    }
  };

  return (
    <MotionContainer
      animate="show"
      initial="hide"
      exit="hide"
      variants={AppConfig.setAnimationVariant("OPACITY_VARIANT")}
      position={fixed ? "fixed" : "relative"}
      width="full"
      height="full"
      top={0}
      left={0}
    >
      {overlay && !controls && (
        <Container
          backgroundColor="black"
          opacity={0.5}
          position="absolute"
          top={0}
          left={0}
          height="full"
          width="full"
          allPointer={false}
          zIndex={1}
        ></Container>
      )}

      <Container
        height="full"
        style={{ pointerEvents: controls ? "all" : "none" }}
        ref={containerRef}
      >
        {renderVideo()}
      </Container>

      {/* Pause */}
      {!controls && !hidePauseIcon && (
        <Flex
          onClick={() => {
            setPlay((prev) => !prev);
            onPlayHandler();
          }}
          position={fixed ? "fixed" : "absolute"}
          right={is("desktopS", ">") ? 65.2 : 25.7}
          bottom={is("desktopS", ">") ? 41.2 : 25.2}
          pointer
          zIndex={2}
        >
          <Icon
            type={play && !pause ? "pause" : "player2"}
            color="white"
            size={37.6}
          />
        </Flex>
      )}
      {/* Swipeable */}
      {swipe && (
        <Container
          position="absolute"
          top={0}
          left={0}
          height="full"
          width="full"
          zIndex={1}
        ></Container>
      )}
    </MotionContainer>
  );
};

export default VideoBanner;
