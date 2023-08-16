import { getAdapterCTA } from "../../logic/utilities";
import { Nullable } from "../../models/Nullable.interface";
import { IAnnouncement } from "../../models/widgets/IAnnouncement";
import { Adapter } from "../Adapter";

export class AnnouncementAdapter extends Adapter<
  IAnnouncement,
  Nullable<IAnnouncement>
> {
  adapt: (source: any) => Nullable<IAnnouncement> = (source) => {
    if (!source) return null;

    return {
      header: source?.teaserTitle,
      longText: source?.teaserText,
      cta: getAdapterCTA(source?.teaserTargets)?.[0],
    };
  };

  adaptReverse: (source: Nullable<any>) => any = (source) => {
    return source;
  };
}
