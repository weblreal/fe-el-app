import {
  IFiles,
  IPressRelease,
} from "../../components/PressRelease/IPressRelease";
import {
  getAkamayUrl,
  getAdapterPressFileCat,
  getAdapterCTA,
} from "../../logic/utilities";
import { IAccordion } from "../../models/components/IAccordion";
import { Nullable } from "../../models/Nullable.interface";
import { IServiceAccordion } from "../../models/widgets/IServiceAccordion";
import { Adapter } from "../Adapter";

export class ServiceAccordionAdapter extends Adapter<
  IServiceAccordion,
  Nullable<IServiceAccordion>
> {
  adapt: (source: any) => Nullable<IServiceAccordion> = (source) => {
    if (!source.length) return null;
    const data = source[0];

    const splitIntoCategory = (arr: any[] = []) => {
      const chunkedData: any[] = [];
      const categories: any[] = [];

      arr.forEach((element) => {
        if (!categories.includes(element?.category)) {
          categories.push(element?.category);
        }
      });

      for (const cat of categories) {
        chunkedData.push(arr.filter((item) => item.category === cat));
      }

      return chunkedData;
    };

    const pressRelease = data?.items?.map((press: any): IPressRelease => {
      const pressItems = press?.items?.filter(
        (item: any) => item?.viewtype !== "CTA"
      );
      const CTA = press?.items?.find((item: any) => item?.viewtype === "CTA");

      const files = pressItems?.map(
        (file: any): IFiles => ({
          label: file?.title,
          size: file?.data?.size,
          url: getAkamayUrl(file?.data?.uri),
          category: file?.teaserText,
          type: file?.data?.contentType,
          fileName: file?.filename,
          id: file?.id,
        })
      );

      return {
        title: press?.collectionSubTitle,
        cta: getAdapterCTA(CTA?.teaserTargets)?.[0],
        files: getAdapterPressFileCat(files),
        allFiles: files,
      };
    });

    const accordion = data?.items?.map((acc: any, key: number): IAccordion<
      IFiles[][]
    > => {
      const video = acc?.videos?.[0];

      const showLabel = source?.[1]?.settings?.Label1;
      const hideLabel = source?.[1]?.settings?.Label2;

      return {
        header: acc?.collectionTitle || acc?.title,
        longText: acc?.collectionSubTitle || acc?.detailText,
        toggleLabelOn: showLabel,
        toggleLabelOff: hideLabel,
        cta: pressRelease?.[key]?.cta,
        pressRelease: splitIntoCategory(pressRelease?.[key]?.allFiles) || [],
        allFiles: pressRelease?.[key]?.allFiles || [],
        video: {
          src: video?.data || video?.dataUrl || "",
        },
      };
    });

    return {
      items: accordion,
      topText: data?.collectionTitle === "-" ? "" : data?.collectionTitle,
      bottomText: data?.collectionSubTitle,
    };
  };

  adaptReverse: (source: Nullable<any>) => any = (source) => {
    return source;
  };
}
