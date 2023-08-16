import { getAdapterImage } from "../../logic/utilities";
import { Nullable } from "../../models/Nullable.interface";
import { ITitleBodyImgBackground } from "../../models/widgets/ITitleBodyImgBackground";
import { Adapter } from "../Adapter";

export class TitleBodyImgBackgroundAdapter extends Adapter<
  ITitleBodyImgBackground,
  Nullable<ITitleBodyImgBackground>
> {
  adapt: (source: any) => Nullable<ITitleBodyImgBackground> = (source) => {
    if (!source.length) return null;
    const data = source[0];

    return {
      title: data?.title,
      text: data?.teaserText,
      backgroundImage: getAdapterImage(data?.pictures)?.[0]
    };
  };

  adaptReverse: (source: Nullable<any>) => any = (source) => {
    return source;
  };
}
