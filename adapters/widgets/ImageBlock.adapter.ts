import { getAdapterImage } from "../../logic/utilities";
import { Nullable } from "../../models/Nullable.interface";
import { IImageBlock } from "../../models/widgets/IImageBlock";
import { Adapter } from "../Adapter";

export class ImageBlockAdapter extends Adapter<
  IImageBlock,
  Nullable<IImageBlock>
> {
  adapt: (source: any) => Nullable<IImageBlock> = (source) => {
    if (!source.length) return null;
    const data = source[0];

    const contain = {
      desktop: data?.pictures?.[0]?.viewtype === "ImageContain",
      mobile: data?.pictures?.[1]?.viewtype === "ImageContain",
    };

    return {
      backgroundImage: {
        desktop: getAdapterImage(data?.pictures)?.[0],
        mobile: getAdapterImage(data?.pictures)?.[1],
      },
      objectFit: {
        desktop: contain.desktop ? "contain" : "cover",
        mobile: contain.mobile ? "contain" : "cover",
      },
      longText: data?.teaserText === "<div><p>-</p></div>" ? "" : data?.teaserText,
    };
  };

  adaptReverse: (source: Nullable<any>) => any = (source) => {
    return source;
  };
}
