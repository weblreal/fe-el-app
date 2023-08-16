import { IPicture } from "../../../models/components/IPicture";
import { IResponsiveBackground } from "../../../models/IResponsiveBackground";
// Components
import Container from "../Container/Container";
import Hidden from "../Hidden/Hidden";
import Picture from "../Picture/Picture";

interface IBackgroundImage extends IPicture {
  responsiveBackground?: IResponsiveBackground;
  fixed?: boolean;
}

const BackgroundImage = ({
  alt,
  src = "",
  objectFit = "cover",
  objectPosition,
  zIndex = 0,
  responsiveBackground,
  fixed,
  ...props
}: IBackgroundImage) => {
  return (
    <Container
      position={fixed ? "fixed" : "absolute"}
      top={0}
      left={0}
      height="full"
      width="full"
      zIndex={zIndex}
    >
      {responsiveBackground && (
        <>
          <Hidden till="tablet">
            <Picture
              alt={alt}
              src={responsiveBackground.desktop}
              objectFit={objectFit}
              objectPosition={objectPosition}
              style={{
                width: "9999px",
                height: "9999px",
              }}
              {...props}
            />
          </Hidden>
          <Hidden from="tablet">
            <Picture
              alt={alt}
              src={responsiveBackground.mobile || responsiveBackground.desktop}
              objectFit={objectFit}
              objectPosition={objectPosition}
              style={{
                width: "9999px",
                height: "9999px",
              }}
              {...props}
            />
          </Hidden>
        </>
      )}
      {!responsiveBackground && (
        <>
          <Hidden from="tablet">
            <Picture
              alt={alt}
              src={src}
              objectFit={objectFit}
              objectPosition={objectPosition}
              style={{
                width: "9999px",
                height: "9999px",
              }}
              {...props}
            />
          </Hidden>
          <Hidden till="tablet">
            <Picture
              alt={alt}
              src={src}
              objectFit={objectFit}
              objectPosition={objectPosition}
              style={{
                width: "9999px",
                height: "9999px",
              }}
              {...props}
            />
          </Hidden>
        </>
      )}
    </Container>
  );
};

export default BackgroundImage;
