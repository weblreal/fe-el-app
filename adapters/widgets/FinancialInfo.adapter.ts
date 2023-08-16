import { getAdapterCTA, getAdapterEventList } from "../../logic/utilities";
import { IEvent } from "../../models/components/IEvent";
import { Nullable } from "../../models/Nullable.interface";
import { IFinancialInfo } from "../../models/widgets/IFinancialInfo";
import { Adapter } from "../Adapter";

export class FinancialInfoAdapter extends Adapter<
  IFinancialInfo,
  Nullable<IFinancialInfo>
> {
  adapt: (source: any) => Nullable<IFinancialInfo> = (source) => {
    if (!source.length) return null;

    const rawEvents = source?.[0];
    const rawEventsList = rawEvents?.items?.filter(
      (item: any) => item?.viewtype !== "CTA"
    );

    const eventTitle = rawEvents?.collectionTitle;
    const eventCta = getAdapterCTA(
      rawEvents?.items?.find((item: any) => item?.viewtype === "CTA")
        ?.teaserTargets
    )?.[0];
    const eventList = getAdapterEventList(rawEventsList);

    const rawEmail = source?.[1];
    const emailTitle = rawEmail?.teaserTitle;
    const emailCta = getAdapterCTA(rawEmail?.teaserTargets)?.[0] || null;
    const emailSubTitle = rawEmail?.teaserText;

    return {
      events: eventList,
      cta: eventCta,
      header1: eventTitle,
      cta2: emailCta,
      header2: emailTitle,
      subtitle: emailSubTitle,
    };
  };

  adaptReverse: (source: Nullable<any>) => any = (source) => {
    return source;
  };
}
