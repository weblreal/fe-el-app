import { ICta } from "../components/ICta";
export interface ISharePrice {
    sharePrice: ISharePriceRow,
    latestEvent: ILatestEvents,
    nextEvents: INextEvents;
}

export interface ISharePriceRow {
    title: string,
    subtitle: string,
    subtitle2: string,
    liveText: string,
    lastPrice: string,
    change: string,
    volume: string,
    cta: ICta
}

export interface INextEvents {
    title: string
    events: [{
        date: string,
        event: string,
        addToCalendar: {
            label: string,
            description: string,
            startDate: string,
            endDate: string
        }
    }]
}

export interface ILatestEvents  {
    title: string
    date: string
    event: string
}