import { getAdapterCTA } from "../../logic/utilities";
import { Nullable } from "../../models/Nullable.interface";
import { ITextPlusLink } from "../../models/widgets/ITextPlusLink";
import { Adapter } from "../Adapter";

export class TextPlusLinkAdapter extends Adapter<
  { items: ITextPlusLink[] },
  Nullable<{ items: ITextPlusLink[] }>
> {
  adapt: (source: any) => Nullable<{ items: ITextPlusLink[]; title?: string }> =
    (source) => {
      if (!source.length) return null;
      const data = source?.[0];
      const title = source?.[1]?.title;

      const items = [data]?.map(
        (item: any): ITextPlusLink => ({
          title: item?.teaserTitle === "-" ? "" : item?.teaserTitle,
          paragraph: item?.teaserText === "-" ? "" : item?.teaserText,
          cta: getAdapterCTA(item?.teaserTargets),
        })
      );

      return {
        title: title,
        items: items,
      };
    };

  adaptReverse: (source: Nullable<any>) => any = (source) => {
    return source;
  };
}
