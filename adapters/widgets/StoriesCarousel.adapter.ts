import { getAdapterImage, getAdapterCTA } from "../../logic/utilities";
import { Nullable } from "../../models/Nullable.interface";
import {
  IStoriesCarousel,
  IStoriesSlide,
} from "../../models/widgets/IStoriesCarousel";
import { Adapter } from "../Adapter";

export class StoriesCarouselAdapter extends Adapter<
  IStoriesCarousel,
  Nullable<IStoriesCarousel>
> {
  adapt: (source: any) => Nullable<IStoriesCarousel> = (source) => {
    if (!source.length) return null;
    const data = source?.filter((item: any) => item?.viewtype !== "CTA");
    const cta = source?.find((item: any) => item?.viewtype === "CTA");

    const richText = data?.[0];
    const stories = data?.[1];

    const slides = stories?.items?.map(
      (story: any): IStoriesSlide => ({
        backgroundImage: getAdapterImage(story?.pictures)?.[0],
        title: story?.teaserText,
        date: story?.teaserTitle,
        cta: getAdapterCTA(story?.teaserTargets)?.[0] || {
          label: "Read more",
          url: "#",
        },
      })
    );

    return {
      header: richText?.title,
      longText: richText?.teaserText,
      cta: getAdapterCTA(cta?.teaserTargets)?.[0],
      slides: slides,
    };
  };

  adaptReverse: (source: Nullable<any>) => any = (source) => {
    return source;
  };
}
