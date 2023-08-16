import { getAdapterCTA } from "../../logic/utilities";
import { Nullable } from "../../models/Nullable.interface";
import { IBoardOfDirectors } from "../../models/widgets/IBoardOfDirectors";
import { Adapter } from "../Adapter";

export class BoardOfDirectorsAdapter extends Adapter<
  IBoardOfDirectors,
  Nullable<IBoardOfDirectors>
> {
  adapt: (source: any) => Nullable<IBoardOfDirectors> = (source) => {
    if (!source.length) return null;

    const {
      collectionTitle: title,
      items
    } = source[0];

    const directors = items?.map((item: any) => {
      const {
        pictures,
        teaserTargets,
        teaserTitle1: name,
        teaserTitle2: position,
      } = item ?? ""

      const image = pictures?.map((picture: any) => {
        return {
          url: picture?.data?.uri ?? "",
          alt: picture?.title,
        }
      })

      const route = getAdapterCTA(teaserTargets)?.[0]?.url ?? "";

      return {
        imgAlt: image[0]?.alt ?? name ?? "",
        imgUrl: image[0]?.url ?? "",
        name,
        position,
        route,
      }
    })

    const widgetData = {
      title,
      directors,
    };

    return widgetData;
  };

  adaptReverse: (source: Nullable<any>) => any = (source) => {
    return source;
  };
}
