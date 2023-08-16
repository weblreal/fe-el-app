import { getAdapterImage, getAdapterCTA } from "../../logic/utilities";
import { Nullable } from "../../models/Nullable.interface";
import { IImageBanner } from "../../models/widgets/IImageBanner";
import { Adapter } from "../Adapter";

export class ImageBannerAdapter extends Adapter<
  IImageBanner,
  Nullable<IImageBanner>
> {
  adapt: (source: any) => Nullable<IImageBanner> = (source) => {
    if (!source.length) return null;
    const data = source;

    return {
      title1: data?.[0]?.teaserTitle,
      title2: data?.[1]?.teaserTitle,
      longText1: data?.[0]?.teaserText,
      longText2: data?.[1]?.teaserText,
      image1: getAdapterImage(data?.[0]?.pictures)?.[0],
      image2: getAdapterImage(data?.[1]?.pictures)?.[0],
      cta1: getAdapterCTA(data?.[0]?.teaserTargets)?.[0],
      cta2: getAdapterCTA(data?.[1]?.teaserTargets)?.[0],
    };
  };

  adaptReverse: (source: Nullable<any>) => any = (source) => {
    return source;
  };
}
