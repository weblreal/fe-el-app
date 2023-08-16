import { Nullable } from "../../models/Nullable.interface";
import { ITitlesCenter } from "../../models/widgets/ITitlesCenter";
import { Adapter } from "../Adapter";

export class TitlesCenterAdapter extends Adapter<
  ITitlesCenter,
  Nullable<ITitlesCenter>
> {
  adapt: (source: any) => Nullable<ITitlesCenter> = (source) => {
    if (!source.length) return null;
    const data = source[0];

    return {
      title: data?.title === "<div><p>-</p></div>" ? "" : data?.title,
      longText:
        data?.detailText === "<div><p>-</p></div>" ? "" : data?.detailText,
      mailTo: data?.teaserTargets?.[0]?.callToActionText,
    };
  };

  adaptReverse: (source: Nullable<any>) => any = (source) => {
    return source;
  };
}
