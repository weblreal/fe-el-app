import { getAdapterImage } from "../../logic/utilities";
import { Nullable } from "../../models/Nullable.interface";
import { IBlurredSlider, ISlide } from "../../models/widgets/IBlurredSlider";
import { Adapter } from "../Adapter";

export class BlurredSliderAdapter extends Adapter<
  IBlurredSlider,
  Nullable<IBlurredSlider>
> {
  adapt: (source: any) => Nullable<IBlurredSlider> = (source) => {
    if (!source.length) return null;
    const data = source[0];

    const slides = data.items?.map(
      (slide: any): ISlide => ({
        alt: getAdapterImage(slide?.pictures)?.[0],
        src: getAdapterImage(slide?.pictures)?.[0],
        longText: slide?.teaserText,
        longText2: slide?.teaserTargets?.[0]?.callToActionText,
        header: slide?.teaserTitle,
      })
    );

    return {
      slides: slides,
      backgroundImage: getAdapterImage(data?.pictures)?.[0],
      header: data?.collectionTitle,
    };
  };

  adaptReverse: (source: Nullable<any>) => any = (source) => {
    return source;
  };
}
