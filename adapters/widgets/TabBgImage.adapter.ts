import { Nullable } from "../../models/Nullable.interface";
import { ITabBgImage } from "../../models/widgets/ITabBgImage";
import { Adapter } from "../Adapter";

export class TabBgImageAdapter extends Adapter<
ITabBgImage,
  Nullable<ITabBgImage>
> {
  adapt: (source: any) => Nullable<ITabBgImage> = (source) => {
    if (!source.length) return null;
    const data = source[0];
    const { items, pictures } = data ?? null;

    const tabDetails = items?.map((item: any) => {
      const {
        title: tabName,
        detailText: textDetails1,
        teaserText: textDetails2,
      } = item;

      return {
        tabName,
        textDetails1,
        textDetails2,
      };
    })
    const bgImage = pictures[0]?.data?.uri;

    return {
      tabDetails,
      bgImage,
    };
  };

  adaptReverse: (source: Nullable<any>) => any = (source) => {
    return source;
  };
}