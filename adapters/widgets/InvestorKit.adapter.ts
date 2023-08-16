import {
  getAdapterCTA,
  getAdapterImage,
  dateConverter_2,
} from "../../logic/utilities";
import { Nullable } from "../../models/Nullable.interface";
import { IInvestorFile, IInvestorKit } from "../../models/widgets/IInvestorKit";
import { Adapter } from "../Adapter";

export class InvestorKitAdapter extends Adapter<
  IInvestorKit,
  Nullable<IInvestorKit>
> {
  adapt: (source: any) => Nullable<IInvestorKit> = (source) => {
    if (!source.length) return null;
    const data = source[0];

    const files = data?.items?.map(
      (file: any): IInvestorFile => ({
        fileName: file?.filename,
        url: file?.data?.uri,
        date: file?.validFrom?.split("[")?.[0] ? dateConverter_2(file?.validFrom?.split("[")?.[0]) : "",
        label: file?.title,
        id: file?.id,
      })
    );

    return {
      header: data?.collectionTitle,
      downloadLink: data?.collectionSubTitle,
      cta: getAdapterCTA(source?.[1]?.teaserTargets)?.[0],
      files: files,
      backgroundImage: getAdapterImage(data?.pictures)?.[0],
    };
  };

  adaptReverse: (source: Nullable<any>) => any = (source) => {
    return source;
  };
}
