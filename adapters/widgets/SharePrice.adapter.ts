import AppConfig from "../../logic/configs/AppConfig";
import { dateConverter_2, getAdapterCTA, getAdapterViewtype } from "../../logic/utilities";
import { Nullable } from "../../models/Nullable.interface";
import { ISharePrice } from "../../models/widgets/ISharePrice";
import { Adapter } from "../Adapter";

export class SharePriceAdapter extends Adapter<
  ISharePrice,
  Nullable<ISharePrice>
> {
  adapt: (source: any) => Nullable<ISharePrice> = (source) => {
    if (!source.length) return null;
    const data = source;
    
    const latestEvents = getAdapterViewtype(data, "Latest Event").selected;
    const nextEvent = getAdapterViewtype(data, "Next Event").selected;
    const sharePriceData = getAdapterViewtype(data, "SharePrice").selected;

    const sharePrice: any = {
      title: sharePriceData?.teaserTitle1 || "",
      subtitle: sharePriceData?.teaserText1 || "",
      subtitle2: sharePriceData?.teaserText2 || "",
      liveText: sharePriceData?.teaserPreTitle || "",
      lastPrice: sharePriceData?.teaserTitle2 || "",
      change: sharePriceData?.teaserTitle3 || "",
      volume: sharePriceData?.teaserTitle4 || "",
      cta: getAdapterCTA(sharePriceData?.teaserTargets)?.[0],
    };

    const latestEvent: any = {
      title: latestEvents?.collectionTitle,
      date: latestEvents?.items[0]?.extDisplayedDate?.split("[")?.[0]
        ? dateConverter_2(latestEvents?.items[0]?.extDisplayedDate?.split("[")?.[0])
        : "",
      event: latestEvents?.items[0]?.title,
    };

    const nextEvents: any = {
      title: nextEvent?.collectionTitle,
      events: nextEvent?.items.map((event: any) => ({
        date: event.extDisplayedDate?.split("[")?.[0]
          ? dateConverter_2(event.extDisplayedDate?.split("[")?.[0])
          : "",
        event: event.title,
        addToCalendar: {
          label: event.teaserTargets[0]?.callToActionText || "",
          description: AppConfig.html(event.teaserText) || "",
          startDate: event.extDisplayedDate?.split("[")?.[0] || "",
          endDate: event.validTo?.split("[")?.[0] || "",
        },
      })),
    };

    return {
      sharePrice: sharePrice,
      latestEvent: latestEvent,
      nextEvents: nextEvents,
    };
  };

  adaptReverse: (source: Nullable<any>) => any = (source) => {
    return source;
  };
}
