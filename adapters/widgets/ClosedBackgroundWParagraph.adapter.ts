import { getAdapterCTA, getAdapterImage } from "../../logic/utilities";
import { Nullable } from "../../models/Nullable.interface";
import { IClosedBackgroundWParagraph } from "../../models/widgets/IClosedBackgroundWParagraph";
import { Adapter } from "../Adapter";

export class ClosedBackgroundWParagraphAdapter extends Adapter<
  IClosedBackgroundWParagraph,
  Nullable<IClosedBackgroundWParagraph>
> {
  adapt: (source: any) => Nullable<IClosedBackgroundWParagraph> = (source) => {
    if (!source.length) return null;
    const data = source[0];

    return {
      title: data?.title === "-" ? "" : data?.title,
      title2: data.detailText === "<div><p>-</p></div>" ? "" : data?.detailText,
      longText1: data?.teaserText1,
      longText2: data?.teaserText2,
      background: getAdapterImage(data?.pictures)?.[0],
      cta: getAdapterCTA(data?.teaserTargets)?.[0],
    };
  };

  adaptReverse: (source: Nullable<any>) => any = (source) => {
    return source;
  };
}
