import { getAdapterImage } from "../../logic/utilities";
import { Nullable } from "../../models/Nullable.interface";
import { ITextImageColumn, ITextImageContent } from "../../models/widgets/ITextImageColumn";
import { Adapter } from "../Adapter";

export class TextImageColumnAdapter extends Adapter<ITextImageColumn, Nullable<ITextImageColumn>> {
  adapt: (source: any) => Nullable<ITextImageColumn> = (source) => {
    if (!source.length) return null;
    const data = source[0];

    return {
      title:  data.collectionTitle,
      content: data?.items?.map((item:any):ITextImageContent => {
        return({
          title: item.title,
          longText: item.detailText ?? item.teaserText ?? "",
          backgroundImage: getAdapterImage(item?.pictures)?.[0]
        });
      })
    };
  };

  adaptReverse: (source: Nullable<any>) => any = (source) => {
    return source;
  };
}
