import { getAdapterImage, getAdapterCTA } from "../../logic/utilities";
import { Nullable } from "../../models/Nullable.interface";
import { ICareersCarousel, ICareersSlide } from "../../models/widgets/ICareersCarousel";
import { Adapter } from "../Adapter";

export class CareersCarouselAdapter extends Adapter<
  ICareersCarousel,
  Nullable<ICareersCarousel>
> {
  adapt: (source: any) => Nullable<ICareersCarousel> = (source) => {
    if (!source.length) return null;
    const data = source;

    const careersCollection = data?.[0];
    const collectionItems = data?.[0].items;

    const slides = collectionItems?.map(
         (item: any): ICareersSlide => ({
           backgroundImage: getAdapterImage(item?.pictures)?.[0],
           title: item?.teaserTitle,
           paragraph: item?.teaserText,
           cta: getAdapterCTA(item?.teaserTargets)?.[0] || {
             label: "Read more",
             url: "#",
           },
         })
      );

    return {
      header: careersCollection?.collectionTitle,
      slides: slides,
    };
  };

  adaptReverse: (source: Nullable<any>) => any = (source) => {
    return source;
  };
}
