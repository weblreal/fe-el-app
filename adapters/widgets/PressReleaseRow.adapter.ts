import {
  IPressRelease,
  ITags,
} from "../../components/PressRelease/IPressRelease";
import AppConfig from "../../logic/configs/AppConfig";
import {
  dateConverter_2,
  getAdapterCTA,
  getAdapterViewtype,
} from "../../logic/utilities";
import { Nullable } from "../../models/Nullable.interface";
import { IPressReleaseRow } from "../../models/widgets/IPressReleaseRow";
import { Adapter } from "../Adapter";

export class PressReleaseRowAdapter extends Adapter<
  IPressReleaseRow,
  Nullable<IPressReleaseRow>
> {
  adapt: (source: any) => Nullable<IPressReleaseRow> = (source) => {
    if (!source.length) return null;
    const data = getAdapterViewtype(source, "CTA");

    const downloadAllLabel = AppConfig.stripHtml(data?.selected?.teaserText || "");

    const pressReleases = data?.unselected?.map((item: any): IPressRelease => {
      const cta = getAdapterViewtype(item.related, "CTA").selected;
      const share = getAdapterViewtype(item.related, "Share").selected;
      const file = getAdapterViewtype(item.related, "DownloadFile").selected;

      const tags = item?.subjectTaxonomy?.map(
        (tag: any): ITags[] => tag.settings
      );

      return {
        title: item?.title,
        cta: getAdapterCTA(cta?.teaserTargets)?.[0],
        longText:
          item?.teaserText === "<div><p><strong>-</strong></p></div>" ||
          item?.teaserText === "-" ||
          item?.teaserText === "<div><p>-</p></div>"
            ? ""
            : item?.teaserText,
        tag: item?.teaserTitle,
        tags: tags,
        downloadAllLabel,
        date: dateConverter_2(item?.extDisplayedDate?.split("[")?.[0]),
        share: {
          label: share?.teaserTitle,
          title1: share?.teaserTitle,
          title2: share?.teaserTitle,
          url: getAdapterCTA(share?.teaserTargets)?.[0]?.url,
        },
        singleFile: {
          fileName: file?.filename,
          url: file?.data?.uri,
          label: file?.title,
          type: file?.data?.contentType,
        },
      };
    });

    const tagsToQuery = data?.selected?.subjectTaxonomy?.[0]?.value;

    return {
      pressReleases: pressReleases,
      header: data.selected?.teaserTitle,
      cta: getAdapterCTA(
        data?.selected?.teaserTargets?.map((target: any) => ({
          ...target,
          callToActionHash: tagsToQuery || "",
        }))
      )?.[0],
      downloadAllLabel: downloadAllLabel,
      tagsToQuery: tagsToQuery,
    };
  };

  adaptReverse: (source: Nullable<any>) => any = (source) => {
    return source;
  };
}
