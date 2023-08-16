import { getAdapterCTA } from "../../logic/utilities";
import { Nullable } from "../../models/Nullable.interface";
import { IPressReleases } from "../../models/widgets/IPressReleases";
import { IStoriesSlide } from "../../models/widgets/IStoriesCarousel";
import { Adapter } from "../Adapter";

export class PressReleasesAdapter extends Adapter<
  IPressReleases,
  Nullable<IPressReleases>
> {
  adapt: (source: any) => Nullable<IPressReleases> = (source) => {
    if (!source.length) return null;
    const main = source[0];
    const rawSlides = source[1];
    const slides = rawSlides?.items?.map(
      (slide: any): IStoriesSlide => ({
        date: slide?.teaserTitle,
        title: slide?.teaserText,
        cta: getAdapterCTA(slide?.teaserTargets)?.[0],
      })
    );

    return {
      header: main?.teaserTitle,
      slides: slides || [],
      cta: getAdapterCTA(main?.teaserTargets)?.[0],
    };
  };

  adaptReverse: (source: Nullable<any>) => any = (source) => {
    return source;
  };
}
