import axios from "axios";
import { elSegmentRemoval } from "../../logic/utilities";
import { Nullable } from "../../models/Nullable.interface";
import { ITab, ITabPlacements } from "../../models/widgets/ITabPlacements";
import { Adapter } from "../Adapter";

export class TabPlacementsAdapter extends Adapter<
  ITabPlacements,
  Nullable<ITabPlacements>
> {
  adapt: (source: any) => Nullable<ITabPlacements> = (source) => {
    if (!source.length) return null;
    const data = source?.[0];

    const tabs = data?.teaserTargets?.map(
      (target: any): ITab => ({
        label: target?.target?.teaserTitle,
        url: elSegmentRemoval(
          target?.target?.navigationPath
            ?.map(
              (segment: any, key: number) =>
                `${segment.segment}${key === 0 ? "/json" : ""}`
            )
            ?.join("/")
        ),
      })
    );

    return {
      tabs,
    };
  };

  adaptReverse: (source: Nullable<any>) => any = (source) => {
    return source;
  };
}
