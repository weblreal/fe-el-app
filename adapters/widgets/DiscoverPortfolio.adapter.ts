import { getAdapterCTA, getAdapterImage } from "../../logic/utilities";
import { Nullable } from "../../models/Nullable.interface";
import { IDiscoverPortfolio } from "../../models/widgets/IDiscoverPortfolio";
import { Adapter } from "../Adapter";

export class DiscoverPortfolioAdapter extends Adapter<
  IDiscoverPortfolio,
  Nullable<IDiscoverPortfolio>
> {
  adapt: (source: any) => Nullable<IDiscoverPortfolio> = (source) => {
    if (!source.length) return null;

    const data = source[0];

    const { collectionTitle: header } = data ?? "";
    const content = data?.items?.map((item: any) => {
      const isExternal = item?.teaserTargets?.[0]?.target?.type === "CMExternalLink";
      const url = item?.teaserTargets?.[0]?.target;
      const link = isExternal ? item?.teaserTargets?.[0]?.target?.url : url?.externalURL
        ? url?.externalURL
        : getAdapterCTA(item?.teaserTargets)?.[0]?.url || "";
      return {
        bgImage: getAdapterImage(item?.pictures),
        ctaText: getAdapterCTA(item?.teaserTargets)?.[0]?.label ?? "",
        link,
        isExternal: isExternal,
        title: item?.teaserTitle ?? "",
      };
    });

    const widgetData = {
      header,
      content,
    };

    return widgetData;
  };

  adaptReverse: (source: Nullable<any>) => any = (source) => {
    return source;
  };
}
