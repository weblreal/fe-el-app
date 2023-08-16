import { getAdapterCTA, getAdapterImage } from "../../logic/utilities";
import { Nullable } from "../../models/Nullable.interface";
import { ISingleLaunch } from "../../models/widgets/ISingleLaunch";
import { Adapter } from "../Adapter";

export class SingleLaunchAdapter extends Adapter<
  ISingleLaunch,
  Nullable<ISingleLaunch>
> {
  adapt: (source: any) => Nullable<ISingleLaunch> = (source) => {
    if (!source.length) return null;
    const data = source[0];

    const {
      teaserBackgroundImage,
      teaserLogoImage,
      teaserTargets,
      teaserText1: description,
      teaserTitle1: title,
    } = data || null;

    const bgImage =
      teaserBackgroundImage?.map((bg: any) => bg?.data?.uri) || null;
    const { uri: logo } = teaserLogoImage[0]?.data || "";

    return {
      bgImage,
      cta: getAdapterCTA(teaserTargets),
      logo,
      description,
      title,
    };
  };

  adaptReverse: (source: Nullable<any>) => any = (source) => {
    return source;
  };
}
