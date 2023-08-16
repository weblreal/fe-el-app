import {
  dateConverter_2,
  getAdapterCroppings,
} from "../../logic/utilities";
import { Nullable } from "../../models/Nullable.interface";
import { IArticleTitleAndBody } from "../../models/widgets/IArticleTitleAndBody";
import { Adapter } from "../Adapter";

export class ArticleTitleAndBodyAdapter extends Adapter<
  IArticleTitleAndBody,
  Nullable<IArticleTitleAndBody>
> {
  adapt: (source: any) => Nullable<IArticleTitleAndBody> = (source) => {
    if (!source.length) return null;
    const data = source[0];

    const backToListText = data?.related?.filter(
      (e: any) => e.viewtype?.toLowerCase() === "backtolist"
    )[0]?.teaserTargets[0]?.callToActionText;
    const tags = data?.subjectTaxonomy.map((e: any) => e.settings);
    const shareText = data?.related.filter(
      (e: any) => e.viewtype?.toLowerCase() === "share"
    )[0]?.teaserTitle;
    const title = data?.title;
    const text = data?.teaserText;
    const text2 = data?.detailText;
    const publishDate = dateConverter_2(data?.extDisplayedDate.split("[")?.[0]);
    const backgroundImage = data?.pictures[0]?.data?.uri;

    const tagsToQuery = data?.subjectTaxonomy
      .map((e: any) => e.externalReference)
      ?.slice(1);

    return {
      backToListText: backToListText,
      tags: tags,
      shareText: shareText,
      publishDate: publishDate,
      publishText: data?.teaserTitle,
      timeToRead: data?.related?.filter((e: any) => e.viewtype?.toLowerCase() === "cta")[0]?.teaserTitle,
      title: title,
      text: data?.related?.[2]?.detailText,
      text2: text2,
      backgroundImage: backgroundImage,
      croppings: getAdapterCroppings(data?.pictures)?.[0],
      tagsToQuery: tagsToQuery || [],
      articleId: data?.id || "",
    };
  };

  adaptReverse: (source: Nullable<any>) => any = (source) => {
    return source;
  };
}
