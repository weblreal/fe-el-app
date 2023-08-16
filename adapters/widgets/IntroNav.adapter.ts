import { getAdapterCTA, getAdapterImage } from "../../logic/utilities";
import { Nullable } from "../../models/Nullable.interface";
import { IIntroNav } from "../../models/widgets/IIntroNav";
import { Adapter } from "../Adapter";

export class IntroNavAdapter extends Adapter<IIntroNav, Nullable<IIntroNav>> {
  adapt: (source: any) => Nullable<IIntroNav> = (source) => {
    if (!source.length) return null;
    const data = source[0];

    return {
      title: data?.teaserTitle1,
      longText: data?.teaserTitle2,
      subTitle: data?.teaserText1,
      preTitle: data?.teaserTitle3,
      backgroundImage: getAdapterImage(data?.teaserBackgroundImage)?.[0],
      cta: getAdapterCTA(data?.teaserTargets),
      color: data?.viewtype,
    };
  };

  adaptReverse: (source: Nullable<any>) => any = (source) => {
    return source;
  };
}
