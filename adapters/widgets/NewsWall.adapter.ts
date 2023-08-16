import { Nullable } from "../../models/Nullable.interface";
import { INewsWall } from "../../models/widgets/INewsWall";
import { Adapter } from "../Adapter";

export class NewsWallAdapter extends Adapter<INewsWall, Nullable<INewsWall>> {
  adapt: (source: any) => Nullable<INewsWall> = (source) => {
    if (!source.length) return null;

    const settings = source[0]?.settings;
    const showingLabel = settings?.Label3?.split("/");

    return {
      news: [],
      filterYearLabel: settings?.FilterLabel1,
      resultsLabel: settings?.Label2,
      pagingationCTA: settings?.Label4,
      paginationLabel1: showingLabel?.[0],
      paginationLabel2: showingLabel?.[1],
      sortLabels: [settings?.SortBy1, settings?.SortBy2],
      downloadAllLabel: settings?.Label5,
      readMoreLabel: settings?.Label6,
    };
  };

  adaptReverse: (source: Nullable<any>) => any = (source) => {
    return source;
  };
}
