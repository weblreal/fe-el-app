import { getAdapterCTA } from "../../logic/utilities";
import { Nullable } from "../../models/Nullable.interface";
import { IHorizontalDivider } from "../../models/widgets/IHorizontalDivider";
import { Adapter } from "../Adapter";

export class HorizontalDividerAdapter extends Adapter<
  IHorizontalDivider,
  Nullable<IHorizontalDivider>
> {
  adapt: (source: any) => Nullable<IHorizontalDivider> = (source) => {
    if (!source.length) return null;
    const data = source?.[0];

    return {
      cta: getAdapterCTA(data?.teaserTargets)?.[0],
      longText: data?.teaserText,
    };
  };

  adaptReverse: (source: Nullable<any>) => any = (source) => {
    return source;
  };
}
