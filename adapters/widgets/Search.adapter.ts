import { getAdapterCTA } from "../../logic/utilities";
import { Nullable } from "../../models/Nullable.interface";
import { ISearch } from "../../models/widgets/ISearch";
import { Adapter } from "../Adapter";

export class SearchAdapter extends Adapter<ISearch, Nullable<ISearch>> {
  adapt: (source: any) => Nullable<ISearch> = (source) => {
    if (!source.length) return null;
    const data = source;

    const items = data?.[1]?.dynamicRules?.map(
      (item: any) => getAdapterCTA([item])?.[0]
    );

    return {
      input: {},
      popular: {
        items: items,
      },
      previous: {},
    };
  };

  adaptReverse: (source: Nullable<any>) => any = (source) => {
    return source;
  };
}
