// Modules
import { IBackgroundSlide } from "../../models/widgets/IBrandsModule";
import { GridColumn } from "../UI/Grid/Grid";
import useResponsiveBackground from "../../hooks/useResponsiveBackground";
import AppConfig from "../../logic/configs/AppConfig";

// Components
import VideoIFramePlayer from "../VideoIFramePlayer/VideoIFramePlayer";
import Container from "../UI/Container/Container";
import BackgroundImage from "../UI/BackgroundImage/BackgroundImage";

const BackgroundSlide = ({ brand, active }: IBackgroundSlide) => {
  /**
   * Variables
   */
  const { backgroundImage, backgroundVideo } = brand;
  const direction = active.direction;
  const directionStyle = {
    top: 0,
    left: direction === "right" ? 0 : "initial",
    right: direction === "left" ? 0 : "initial",
  } as React.CSSProperties;

  /**
   * Hooks
   */
  const [bgImage] = useResponsiveBackground(backgroundImage || [], false, true);
  const [bgVideo] = useResponsiveBackground(backgroundVideo || [], true);

  return (
    <>
      {bgImage && (
        <GridColumn
          variants={AppConfig.setAnimationVariant("SLIDE_RESIZE_VARIANT")}
          initial="initial"
          animate="animate"
          exit="exit"
          overflow="hidden"
          position="absolute"
          height="full"
          zIndex={1}
          transition={{ duration: 0.5 }}
          style={{ ...directionStyle }}
          backgroundTheme
        >
          <Container
            width="100vw"
            maxWidth="screen"
            position="absolute"
            height={{ _: "674px", desktopS: "800px", desktopXL: "1080px" }}
            style={{ ...directionStyle }}
          >
            <BackgroundImage src={bgImage} alt={bgImage} priority />
          </Container>
        </GridColumn>
      )}

      {bgVideo && (
        <GridColumn
          variants={AppConfig.setAnimationVariant("SLIDE_RESIZE_VARIANT")}
          initial="initial"
          animate="animate"
          exit="exit"
          overflow="hidden"
          position="absolute"
          height="full"
          zIndex={1}
          transition={{ duration: 0.5 }}
          style={{ ...directionStyle }}
        >
          <Container
            width="100vw"
            maxWidth="screen"
            height={{ _: "674px", desktopS: "800px", desktopXL: "1080px" }}
            position="absolute"
            style={{ ...directionStyle }}
          >
            <VideoIFramePlayer
              src={bgVideo}
              play
              loop
              muted
              scale={false}
              fullScreen={false}
            />
          </Container>
        </GridColumn>
      )}
    </>
  );
};

export default BackgroundSlide;
