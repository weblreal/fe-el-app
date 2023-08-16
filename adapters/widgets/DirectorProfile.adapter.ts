import { getAdapterImage } from "../../logic/utilities";
import { Nullable } from "../../models/Nullable.interface";
import { IDirectorProfile } from "../../models/widgets/IDirectorProfile";
import { Adapter } from "../Adapter";

export class DirectorProfileAdapter extends Adapter<
IDirectorProfile,
  Nullable<IDirectorProfile>
> {
  adapt: (source: any) => Nullable<IDirectorProfile> = (source) => {
    if (!source.length) return null;
    const data = source[0];

    return {
      name: data?.teaserTitle1,
      title: data?.teaserTitle2,
      paragraph: data?.teaserText1,
      picture: getAdapterImage(data?.pictures)[0]
    };
  };

  adaptReverse: (source: Nullable<any>) => any = (source) => {
    return source;
  };
}
