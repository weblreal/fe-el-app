import { ITestimonial } from "../../models/widgets/ITestimonial";
import { ITestimonialCards } from "../../components/Testimonial/ITestimonialCards";
import { getAdapterImage } from "../../logic/utilities";
import { Nullable } from "../../models/Nullable.interface";
import { Adapter } from "../Adapter";

export class TestimonialAdapter extends Adapter<
ITestimonial,
  Nullable<ITestimonial>
> {
  adapt: (source: any) => Nullable<ITestimonial> = (source) => {
    if (!source.length) return null;
    const data = source[0];

    const cards = data.items?.map(
      (item: any): ITestimonialCards => ({
        name: item.title,
        title: item.teaserTitle,
        paragraph: item.detailText,
        picture: getAdapterImage(item?.pictures)?.[0]
      })
   );

    return {
      title: data.collectionTitle,
      testimonialCards: cards
    };
  };

  adaptReverse: (source: Nullable<any>) => any = (source) => {
    return source;
  };
}
