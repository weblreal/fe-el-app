import { IPressRelease } from "../../components/PressRelease/IPressRelease";
import {
  getAdapterCTA,
  dateConverter_2,
  getAdapterViewtype,
} from "../../logic/utilities";
import { Nullable } from "../../models/Nullable.interface";
import { IPressReleaseList } from "../../models/widgets/IPressReleaseList";
import { Adapter } from "../Adapter";

export class NewsSingleAdapter extends Adapter<
  IPressReleaseList,
  Nullable<IPressReleaseList>
> {
  adapt: (source: any) => Nullable<IPressReleaseList> = (source) => {
    if (!source.length) return null;
    const data = source[0];

    const { selected: CTA, unselected: PressRelease } = getAdapterViewtype(data.items, "CTA");

    const list = PressRelease?.map((item: any): IPressRelease => {
      const downloadAllLabel = item?.related?.find(
        (rel: any) => rel?.name === "TeaserDownloadAll"
      );

      const articleCTA = item?.related?.find(
        (rel: any) => rel?.viewtype === "CTA"
      );

      return {
        tag: item?.teaserTitle,
        date: dateConverter_2(item?.extDisplayedDate?.split("[")?.[0]),
        title: item?.title,
        longText: item?.teaserText,
        cta: getAdapterCTA(articleCTA?.teaserTargets)?.[0],
        singleFile: {
          url: item?.related?.[0]?.data?.uri,
          label: item?.related?.[0]?.filename,
          type: item?.related?.[0]?.data?.contentType,
          id: item?.related?.[0]?.id,
        },
        downloadAllLabel: downloadAllLabel?.teaserTitle,
      };
    });

    return {
      header: data?.collectionTitle,
      pressReleaseItem: list,
      cta: getAdapterCTA(source?.[1]?.teaserTargets)?.[0],
    };
  };

  adaptReverse: (source: Nullable<any>) => any = (source) => {
    return source;
  };
}
