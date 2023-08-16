import { getAdapterCTA } from "../../logic/utilities";
import { Nullable } from "../../models/Nullable.interface";
import { ILeftImageRightText } from "../../models/widgets/ILeftImageRightText";
import { Adapter } from "../Adapter";

export class LeftImageRightTextAdapter extends Adapter<
  ILeftImageRightText,
  Nullable<ILeftImageRightText>
> {
  adapt: (source: any) => Nullable<ILeftImageRightText> = (source) => {
    if (!source.length) return null;

    const data = source[0];
    const { uri: imgUrl } = data?.pictures[0]?.data ?? "";
    const {
      teaserTargets,
      teaserText: description,
      teaserTitle: title,
    } = data ?? "";
    const {title: imgAlt } = data?.pictures[0] ?? title ?? "";
    const ctaText = getAdapterCTA(teaserTargets)?.[0]?.label;
    const ctaRoute = getAdapterCTA(teaserTargets)?.[0]?.url;

    const widgetData: ILeftImageRightText = {
      ctaRoute,
      ctaText,
      description,
      imgAlt,
      imgUrl,
      title,
    }

    return widgetData;
  };

  adaptReverse: (source: Nullable<any>) => any = (source) => {
    return source;
  };
}
