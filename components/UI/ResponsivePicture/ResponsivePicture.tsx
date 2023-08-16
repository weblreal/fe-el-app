// Modules
import useGetImageCroppings from "../../../hooks/useGetImageCropping";
import { IObjectfit, IPicture } from "../../../models/components/IPicture";
import { IPictureCrops } from "../../../models/ICrops";
import Container from "../Container/Container";
import Picture from "../Picture/Picture";

interface IResponsivePicture extends IPicture {
  pictureCrops: IPictureCrops[];
  type: "components" | "widgets";
  name: string;
}

const ResponsivePicture = ({
  alt,
  src,
  width = 9999,
  height = 9999,
  unoptimized = false,
  objectFit,
  objectPosition,
  pictureCrops,
  name,
  type,
}: IResponsivePicture) => {
  // Variables
  const objFit: IObjectfit = objectFit || "cover";

  // Hooks
  const url = useGetImageCroppings({
    crops: pictureCrops?.[0]?.crops,
    uriTemplate: pictureCrops?.[0]?.uriTemplate,
    type: type,
    name: name,
  });

  return (
    <Container position="absolute" top={0} left={0} height="full" width="full">
      <Picture
        isAkamai={url ? false : true}
        alt={alt}
        src={url || src}
        width={width}
        height={height}
        unoptimized={unoptimized}
        objectFit={objFit}
        objectPosition={objectPosition}
        style={{
          position: "absolute",
        }}
      />
    </Container>
  );
};

export default ResponsivePicture;
