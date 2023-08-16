import { getAdapterImage, getAdapterVideoUrl } from "../../logic/utilities";
import { Nullable } from "../../models/Nullable.interface";
import { IHeroImageFullscreen } from "../../models/widgets/IHeroImageFullscreen";
import { Adapter } from "../Adapter";

export class HeroImageFullscreenAdapter extends Adapter<
  IHeroImageFullscreen,
  Nullable<IHeroImageFullscreen>
> {
  adapt: (source: any) => Nullable<IHeroImageFullscreen> = (source) => {
    if (!source.length) return null;
    const data = source[0];
    const fullVideo = data?.teaserOverlayVideo?.map(
      (video: any) =>
        video?.related?.[0]?.video?.dataUrl ||
        video?.related?.[0]?.video?.data?.uri
    );

    const videoPlayLabel = data?.teaserOverlayVideo?.[0]?.related?.[0]?.title;

    return {
      backgroundImage: {
        desktop: getAdapterImage(data?.teaserBackgroundImage)?.[0],
        mobile: getAdapterImage(data?.teaserBackgroundImage)?.[1],
      },
      backgroundVideo: getAdapterVideoUrl(data?.teaserOverlayVideo),
      fullVideo: fullVideo || [],
      // backgroundVideo: "https://www.youtube.com/embed/xHWEKmUEFtg",
      // fullVideo: ["https://www.youtube.com/embed/xHWEKmUEFtg", "https://www.youtube.com/embed/xHWEKmUEFtg"] || [],
      header: data?.teaserTitle1,
      longText: data?.teaserText1,
      videoPlayLabel: videoPlayLabel,
    };
  };

  adaptReverse: (source: Nullable<any>) => any = (source) => {
    return source;
  };
}
