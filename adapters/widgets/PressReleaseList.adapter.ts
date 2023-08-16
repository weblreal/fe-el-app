import { Nullable } from "../../models/Nullable.interface";
import { IPressReleaseList } from "../../models/widgets/IPressReleaseList";
import { Adapter } from "../Adapter";

export class PressReleaseListAdapter extends Adapter<
  IPressReleaseList,
  Nullable<IPressReleaseList>
> {
  adapt: (source: any) => Nullable<IPressReleaseList> = (source) => {
    if (!source.length) return null;
    const data = source;
    const settings = data?.[0]?.settings;
    const showingLabel = settings?.Label3?.split("/");

    return {
      header: "",
      pressReleaseItem: [],
      filterYearLabel: settings?.FilterLabel1,
      resultsLabel: settings?.Label2,
      pagingationCTA: settings?.Label4,
      readMoreLabel: settings?.Label6,
      paginationLabel1: showingLabel?.[0],
      paginationLabel2: showingLabel?.[1],
      sortLabels: [settings?.SortBy1, settings?.SortBy2],
      downloadAllLabel: settings?.Label5,
    };
  };

  adaptReverse: (source: Nullable<any>) => any = (source) => {
    return source;
  };
}
