import { getAdapterImage } from "../../logic/utilities";
import { IBanner } from "../../models/components/IBanner";
import { Nullable } from "../../models/Nullable.interface";
import { Adapter } from "../Adapter";

export class GroupStructureAdapter extends Adapter<IBanner, Nullable<IBanner>> {
  adapt: (source: any) => Nullable<IBanner> = (source) => {
    if (!source.length) return null;
    const data1 = source[0];
    const data2 = source[1];
    const picture1 = getAdapterImage(data1?.pictures);
    const picture2 = getAdapterImage(data2?.pictures);

    return {
      title: data1?.teaserTitle,
      title2: data2?.teaserTitle,
      picture1: picture1?.[0],
      picture2: picture2?.[0],
      picture1M: picture1?.[1],
      picture2M: picture2?.[1],
      longText: data1?.teaserText,
      longText2: data2?.teaserText,
    };
  };

  adaptReverse: (source: Nullable<any>) => any = (source) => {
    return source;
  };
}
