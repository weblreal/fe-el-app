import { getAdapterCTA, getAdapterImage } from "../../logic/utilities";
import { Nullable } from "../../models/Nullable.interface";
import { IAnimatedBanner } from "../../models/widgets/IAnimatedBanner";
import { Adapter } from "../Adapter";

export class AnimatedBannerAdapter extends Adapter<
  IAnimatedBanner,
  Nullable<IAnimatedBanner>
> {
  adapt: (source: any) => Nullable<IAnimatedBanner> = (source) => {
    if (!source.length) return null;
    const data = source[0];

    return {
      backgroundImage: getAdapterImage(data?.pictures)[0],
      cta: {
        label: getAdapterCTA(data?.teaserTargets)[0]?.label,
        url: getAdapterCTA(data?.teaserTargets)[0]?.url,
      },
      header: data?.teaserText,
    };
  };

  adaptReverse: (source: Nullable<any>) => any = (source) => {
    return source;
  };
}
