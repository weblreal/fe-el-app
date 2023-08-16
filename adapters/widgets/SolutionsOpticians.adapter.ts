import { getAdapterCTA, getAdapterImage } from "../../logic/utilities";
import { Nullable } from "../../models/Nullable.interface";
import {
  ISolutionsOpticians,
  ISolutionBrands,
} from "../../models/widgets/ISolutionsOpticians";
import { Adapter } from "../Adapter";

export class SolutionsOpticiansAdapter extends Adapter<
  ISolutionsOpticians,
  Nullable<ISolutionsOpticians>
> {
  adapt: (source: any) => Nullable<ISolutionsOpticians> = (source) => {
    if (!source.length) return null;
    const data = source[0];

    const brands = data?.related?.map(
      (brand: any, key: number): ISolutionBrands => ({
        logo: getAdapterImage(brand.pictures)?.[0],
        longText: brand.teaserText,
        cta: getAdapterCTA(data?.related?.[key]?.teaserTargets),
      })
    );

    const bgContain = data?.pictures?.[0]?.viewtype;

    return {
      title: data?.title === "-" ? "" : data?.title,
      longText: data?.detailText,
      bannerImage: getAdapterImage(data?.pictures)?.[0],
      logo1: getAdapterImage(data?.related?.[0]?.pictures)?.[0],
      logo2: getAdapterImage(data?.related?.[1]?.pictures)?.[0],
      brands: brands,
    };
  };

  adaptReverse: (source: Nullable<any>) => any = (source) => {
    return source;
  };
}
