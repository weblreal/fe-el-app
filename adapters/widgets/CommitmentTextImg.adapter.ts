import { getAdapterImage } from "../../logic/utilities";
import { Nullable } from "../../models/Nullable.interface";
import { ICommitmentTextImg } from "../../models/widgets/ICommitmentTextImg";
import { Adapter } from "../Adapter";

export class CommitmentTextImgAdapter extends Adapter<
  ICommitmentTextImg,
  Nullable<ICommitmentTextImg>
> {
  adapt: (source: any) => Nullable<ICommitmentTextImg> = (source) => {
    if (!source.length) return null;
    const data = source[0];
    
    return {
      longText: data?.detailText === "<div><p>-</p></div>" ? "" : data?.detailText,
      title: data?.title === "<div><p>-</p></div>" || data?.title === "-" ? "" : data?.title,
      picture: getAdapterImage(data?.pictures)?.[0],
    };
  };

  adaptReverse: (source: Nullable<any>) => any = (source) => {
    return source;
  };
}
