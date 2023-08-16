import AppConfig from "../../logic/configs/AppConfig";
import { getAdapterCTA, getAdapterImage, getAdapterVideoUrl } from "../../logic/utilities";
import { Nullable } from "../../models/Nullable.interface";
import { IBrands } from "../../models/widgets/IBrandsModule";
import { Adapter } from "../Adapter";

export class BrandsModuleAdapter extends Adapter<
  { brands: IBrands[] },
  Nullable<{ brands: IBrands[] }>
> {
  adapt: (source: any) => Nullable<{ brands: IBrands[] }> = (source) => {
    if (!source.length) return null;
    const data = source;

    const brandList = data?.map(
      (brand: any, key: number): IBrands => ({
        id: key,
        backgroundImage: getAdapterImage(brand?.teaserBackgroundImage),
        logo: getAdapterImage(brand?.teaserLogoImage)?.[0],
        category: brand?.teaserTitle1,
        backgroundVideo: getAdapterVideoUrl(brand?.teaserOverlayVideo),
        categoryCTA: getAdapterCTA(brand?.teaserTargets)?.[0],
      })
    );

    const randomizedBrands = AppConfig.randomizeArray(brandList);

    return {
      brands: [...randomizedBrands],
    };
  };

  adaptReverse: (source: Nullable<any>) => any = (source) => {
    return source;
  };
}
