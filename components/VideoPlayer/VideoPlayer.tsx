import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { layout, space } from "styled-system";
import { IVideo } from "../../models/IVideo";
import { IContainer } from "../UI/Container/IContainer";

const VideoPlayer = React.forwardRef<HTMLVideoElement, IVideo>(
  ({ src, muted = false, maxWidth = "screen", autoPlay, play }, ref) => {
    // Variables
    const videoRef = useRef<HTMLVideoElement>(null);

    // Hooks
    useEffect(() => {
      const { current } = videoRef;

      if (play && current) {
        current.play();
      } else if (!play && current) {
        current.pause();
      }
    }, [play]);

    return src ? (
      <>
        {/* <video
          loop
          preload="metadata"
          playsInline
          muted={muted}
          autoPlay={autoPlay}
          ref={ref}
          style={{
            maxWidth: maxWidth,
            width: "100%",
            height: "100%",
            backgroundColor: "black",
            objectFit: "cover",
          }}
        >
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}
        <Video
          loop
          preload="metadata"
          playsInline
          muted={muted}
          maxWidth={maxWidth}
          autoPlay={autoPlay}
          ref={videoRef}
        >
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </Video>
      </>
    ) : (
      <></>
    );
  }
);

const Video = styled.video<IContainer>`
  width: 100%;
  height: 100%;
  background-color: black;
  object-fit: cover;

  ${layout}
  ${space}
`;

VideoPlayer.displayName = "VideoPlayer";

export default VideoPlayer;
