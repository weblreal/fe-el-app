import {
  dateConverter_2,
  getAdapterCroppings,
  getAdapterCTA,
  getAdapterImage,
  getAdapterViewtype,
} from "../../logic/utilities";
import { Nullable } from "../../models/Nullable.interface";
import { IBrandsNews } from "../../models/widgets/IBrandsNewsRow";
import { Adapter } from "../Adapter";

interface IStoriesAPI {
  data: IBrandsNews[];
  tags: any[];
  numFound: number;
}

export class StoriesAPIAdapter extends Adapter<
  IStoriesAPI,
  Nullable<IStoriesAPI>
> {
  adapt: (source: any) => Nullable<IStoriesAPI> = (source) => {
    if (!source) return null;

    const fetchedStories = (source?.data as [])?.map(
      (story: any): IBrandsNews => {
        const tagArray = story?.subjectTaxonomy
          ?.slice(1)
          ?.map((tag: any) => tag.settings);

        const CTA = getAdapterCTA(
          getAdapterViewtype(story?.related, "CTA")?.selected?.teaserTargets
        );

        const SHARE = getAdapterViewtype(story?.related, "Share")?.selected;

        return {
          title: story?.title,
          articleId: story?.id,
          longText: story?.detailText,
          date: dateConverter_2(story?.extDisplayedDate?.split("[")?.[0]),
          cta: CTA?.[0],
          tagArray: tagArray,
          backgroundImage: getAdapterImage(story?.pictures)?.[0],
          share: {
            label: SHARE?.teaserTitle,
            url: CTA?.[0]?.url || "#",
            title1: SHARE?.teaserText,
            title2: SHARE?.teaserTitle,
          },
          picture: getAdapterCroppings(story?.pictures),
        };
      }
    );

    return {
      data: fetchedStories,
      tags: source?.tags || [],
      numFound: source?.numFound || 0,
    };
  };

  adaptReverse: (source: Nullable<any>) => any = (source) => {
    return source;
  };
}
