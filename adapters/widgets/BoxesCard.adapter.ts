import { getAdapterCTA, getAdapterImage } from "../../logic/utilities";
import { Nullable } from "../../models/Nullable.interface";
import { IBoxesCard } from "../../models/widgets/IBoxesCard";
import { Adapter } from "../Adapter";

export class BoxesCardAdapter extends Adapter<
IBoxesCard,
  Nullable<IBoxesCard>
> {
  adapt: (source: any) => Nullable<IBoxesCard> = (source) => {
    if (!source.length) return null;
    const data = source[0]
    const { collectionTitle: headerTitle } = data;
    const leftColData = data?.items?.[0]?.items;
    const rightColData = data?.items?.[1]?.items;
    const mobileData = data?.items?.[2]?.items;
    
    const getBgColor = (color: string) => {
      switch (color) {
        case "bg-light-blue": return "#8ec5e2cc"
        case "bg-light-yellow": return "#faf06acc"
        case "bg-light-green": return "#acd8aacc"
        case "bg-light-pink": return "#f3777acc"
        case "bg-light-gray": return "#999999"
        default: return "#fff";
      }
    };

    const parseData = (data: any) => {
      const cards = data?.map((data: any) => {
        const { 
          teaserTargets,
          teaserBackground,
          teaserText1: description,
          teaserTitle1: title,
        } = data || "";
        let cardBgColor = "";
        let cardTitleColor = "";
        const { teaserTitle2: colorStyles } = data ?? "";
        if (colorStyles !== "") {
          const color = colorStyles?.split(",")
          cardBgColor = getBgColor(teaserBackground);
          cardTitleColor = color[0] || colorStyles || "";
        }
        return {
          title,
          cardBgColor,
          cardTitleColor,
          cta: getAdapterCTA(teaserTargets),
          description,
  
        };
      });
      return cards;
    }

    const leftColCards = parseData(leftColData);
    const rightColCards = parseData(rightColData);
    const mobileCards = parseData(mobileData);

    return {
      headerTitle,
      left: [...(leftColCards || [])],
      right: [...(rightColCards || [])],
      mobile: [...(mobileCards || [])]
    };
  };

  adaptReverse: (source: Nullable<any>) => any = (source) => {
    return source;
  };
}
