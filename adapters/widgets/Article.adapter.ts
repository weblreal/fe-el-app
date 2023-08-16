import { Nullable } from "../../models/Nullable.interface";
import { IArticle } from "../../models/widgets/IArticle";
import { Adapter } from "../Adapter";

export class ArticleAdapter extends Adapter<
  IArticle,
  Nullable<IArticle>
> {
  adapt: (source: any) => Nullable<IArticle> = (source) => {
    if (!source.length) return null;
    const data = source[0];
    return {
      title: data?.title === "-" || data?.title === "<div><p>-</p></div>" ? "" : data?.title,
      paragraph: data?.detailText === "-" || data?.detailText === "<div><p>-</p></div>" ? "" : data?.detailText,
    };
  };

  adaptReverse: (source: Nullable<any>) => any = (source) => {
    return source;
  };
}
