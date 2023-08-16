import { getAdapterCTA } from "../../logic/utilities";
import { Nullable } from "../../models/Nullable.interface";
import { ITitleAndCTA } from "../../models/widgets/ITitleAndCTA";
import { Adapter } from "../Adapter";

export class TitleAndCTAAdapter extends Adapter<
  ITitleAndCTA,
  Nullable<ITitleAndCTA>
> {
  adapt: (source: any) => Nullable<ITitleAndCTA> = (source) => {
    if (!source.length) return null;
    const data = source[0];

    const leftAlign = data?.viewtype === "Text+TitleLeftalign";
    return {
      title: data?.teaserTitle || data?.teaserTitle1,
      longText: data?.teaserText1,
      cta: getAdapterCTA(data?.teaserTargets)?.[0] || {
        label: "",
        url: "#",
      },
      center: !leftAlign,
    };
  };

  adaptReverse: (source: Nullable<any>) => any = (source) => {
    return source;
  };
}
