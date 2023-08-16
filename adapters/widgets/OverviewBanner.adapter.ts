import { getAdapterCTA, getAdapterImage } from "../../logic/utilities";
import { IBanner } from "../../models/components/IBanner";
import { Nullable } from "../../models/Nullable.interface";
import { Adapter } from "../Adapter";

export class OverviewBannerAdapter extends Adapter<IBanner, Nullable<IBanner>> {
  adapt: (source: any) => Nullable<IBanner> = (source) => {
    if (!source.length) return null;
    const data = source[0];
    const picture = getAdapterImage(data?.pictures);
    const mobile = getAdapterImage(data?.teaserBackgroundImage);
    
    return {
      title: data?.teaserTitle1,
      longText: data?.teaserText1,
      picture1: picture?.[0],
      picture2: picture?.[1],
      picture1M: mobile?.[0],
      picture2M: mobile?.[1],
      cta: getAdapterCTA(data?.teaserLXCallToActionSettings)?.[0],
    };
  };

  adaptReverse: (source: Nullable<any>) => any = (source) => {
    return source;
  };
}
