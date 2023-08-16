import styled from "styled-components";
import { IVideoIFramePlayer } from "./IVideoIFramePlayer";
// Components
import Container from "../UI/Container/Container";
import ReactPlayer from "react-player";

const VideoIFramePlayer = ({
  src,
  fixed,
  play = false,
  controls = false,
  fullScreen = false,
  muted = false,
  loop = true,
  maxWidth = "screen",
  scale = false,
}: IVideoIFramePlayer) => {
  return (
    <Main position={fixed ? "fixed" : "absolute"} maxWidth={maxWidth} isFullscreen={fullScreen}>
      <Video
        url={src}
        loop={loop}
        muted={muted}
        playing={play}
        width="100%"
        height="100%"
        controls={controls}
        
        style={scale ? { transform: "scale(1.2)" } : undefined}
      />
    </Main>
  );
};

const Main = styled(Container)<{ maxWidth?: string, isFullscreen?: boolean }>`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  transform: translateX(-50%);
  left: 50%;
  max-width: ${(props: any) => props.maxWidth};
  background-color: black;
`;

const Video = styled(ReactPlayer)`
  video {
    object-fit: cover;
  }
`;

export default VideoIFramePlayer;
