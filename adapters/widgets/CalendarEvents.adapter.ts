import { getAdapterEventList } from "../../logic/utilities";
import { Nullable } from "../../models/Nullable.interface";
import { ICalendarEvents } from "../../models/widgets/ICalendarEvents";
import { Adapter } from "../Adapter";

export class CalendarEventsAdapter extends Adapter<
  ICalendarEvents,
  Nullable<ICalendarEvents>
> {
  adapt: (source: any) => Nullable<ICalendarEvents> = (source) => {
    if (!source.length) return null;
    const data = source[0];
    const eventList = getAdapterEventList(data?.items);

    return {
      title: data?.collectionTitle,
      events: eventList,
    };
  };

  adaptReverse: (source: Nullable<any>) => any = (source) => {
    return source;
  };
}
