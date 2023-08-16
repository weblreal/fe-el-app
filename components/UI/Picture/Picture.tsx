// Modules
import Image from "next/image";
import styled, { css } from "styled-components";
import { compose, layout, LayoutProps, space, SpaceProps } from "styled-system";
import { IObjectfit, IPicture } from "../../../models/components/IPicture";
import akamaiLoader from "../../../logic/configs/akamaiLoader";

const Picture = ({
  alt,
  src,
  width = 1920,
  height = 9999,
  unoptimized = false,
  objectFit,
  objectPosition,
  isAkamai = true,
  onLoadingComplete,
  priority,
}: IPicture) => {
  const objFit: IObjectfit = objectFit || "cover";

  return (
    <Wrapper maxWidth={width} maxHeight={height} height="100%" width="100%">
      {src && (
        <Image
          loader={isAkamai ? akamaiLoader : undefined}
          src={src}
          alt={alt || src}
          width={width}
          height={height}
          unoptimized={unoptimized}
          style={{
            maxWidth: `${width}px`,
            maxHeight: `${height}px`,
            objectFit: objFit,
            objectPosition: objectPosition,
          }}
          quality={100}
          onLoadingComplete={onLoadingComplete}
          priority={priority}
        />
      )}
    </Wrapper>
  );
};

const Wrapper = styled("div")<SpaceProps | LayoutProps>(
  compose(layout, space),
  css({
    userSelect: "none",
    display: "flex",
    img: {
      width: "100%",
      height: "100%",
    },
  })
);

export default Picture;
