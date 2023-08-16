import { getAdapterCTA, getAdapterImage } from "../../logic/utilities";
import { Nullable } from "../../models/Nullable.interface";
import { IBrand, IImagesBrands } from "../../models/widgets/IImagesBrands";
import { Adapter } from "../Adapter";

export class ImagesBrandsAdapter extends Adapter<
  IImagesBrands,
  Nullable<IImagesBrands>
> {
  adapt: (source: any) => Nullable<IImagesBrands> = (source) => {
    if (!source.length) return null;
    const data = source[0];

    const brands = data?.items?.map(
      (brand: any): IBrand => ({
        title: brand?.teaserTitle,
        backgroundImage: getAdapterImage(brand?.pictures),
        cta: getAdapterCTA(brand?.teaserTargets)?.[0] || {
          label: "Discover",
          url: "#",
        },
      })
    );

    return {
      title: data?.collectionTitle,
      brands: brands,
    };
  };

  adaptReverse: (source: Nullable<any>) => any = (source) => {
    return source;
  };
}
