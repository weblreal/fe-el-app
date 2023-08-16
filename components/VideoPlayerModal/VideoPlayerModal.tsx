import AppConfig from "../../logic/configs/AppConfig";
import Center from "../UI/Center/Center";
import Container from "../UI/Container/Container";
import Hidden from "../UI/Hidden/Hidden";
import Icon from "../UI/Icon/Icon";
import VideoIFramePlayer from "../VideoIFramePlayer/VideoIFramePlayer";

const VideoPlayerModal = ({
  src,
  closeHandler,
}: {
  src: string;
  closeHandler?: () => void;
}) => {
  return (
    <Container
      position="fixed"
      top={0}
      left={0}
      width="full"
      height="full"
      noSelect
      zIndex={9999}
      variants={AppConfig.setAnimationVariant("OPACITY_VARIANT")}
      initial="hide"
      animate="show"
      exit="hide"
      transition={{ duration: 0.15 }}
    >
      {/* Overlay */}
      <Container
        position="absolute"
        top={0}
        left={0}
        width="full"
        height="full"
        backgroundColor="neutral.80"
        pointer
        zIndex={0}
      ></Container>

      {/* Close */}
      <Container
        zIndex={3}
        pointer
        width="fit-content"
        position="absolute"
        top={{ _: 15, desktopS: 30 }}
        right={{ _: 15, desktopS: 30 }}
        onClick={closeHandler}
      >
        <Hidden till="desktopS">
          <Icon type="close" color="white" size={75} />
        </Hidden>
        <Hidden from="desktopS">
          <Icon type="close" color="white" size={50} />
        </Hidden>
      </Container>

      {/* Player */}
      <Center
        zIndex={2}
        position="relative"
        height="full"
        p={{ _: 3, desktopS: 0 }}
      >
        <Container
          maxWidth="1280px"
          maxHeight={{
            _: "220px",
            mobile: "300px",
            tablet: "520px",
            desktopS: "720px",
          }}
          width="full"
          height="full"
          backgroundColor="black"
          position="relative"
        >
          <VideoIFramePlayer src={src} play={true} controls />
        </Container>
      </Center>
    </Container>
  );
};

export default VideoPlayerModal;
