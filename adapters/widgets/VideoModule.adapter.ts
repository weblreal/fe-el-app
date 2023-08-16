import { getAdapterCTA, getAdapterVideoUrl } from "../../logic/utilities";
import { Nullable } from "../../models/Nullable.interface";
import { IVideoModule } from "../../models/widgets/IVideoModule";
import { Adapter } from "../Adapter";

export class VideoModuleAdapter extends Adapter<
  IVideoModule,
  Nullable<IVideoModule>
> {
  adapt: (source: any) => Nullable<IVideoModule> = (source) => {
    if (!source.length) return null;
    const data = source[0];

    const fullVideo = data?.videos?.map((video: any) => {
      const related = video.related?.[0]?.videos?.[0];

      return related?.dataUrl || related?.url;
    });

    return {
      backgroundVideo: getAdapterVideoUrl(data?.videos),

      cta: getAdapterCTA(data?.teaserTargets),
      title: data?.teaserTitle,
      text: data?.teaserText,
      text2: data?.video?.teaserText || data?.video?.teaserTitle,
      fullVideo: fullVideo,
      hidePauseIcon: data.settings.Label1 === "HidePauseIcon",
    };
  };

  adaptReverse: (source: Nullable<any>) => any = (source) => {
    return source;
  };
}
