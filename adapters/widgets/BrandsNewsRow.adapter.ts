import { getAdapterCTA, getAdapterImage } from "../../logic/utilities";
import { Nullable } from "../../models/Nullable.interface";
import {
  IBrandsNewsRow,
  IBrandsNews,
} from "../../models/widgets/IBrandsNewsRow";
import { Adapter } from "../Adapter";

export class BrandsNewsRowAdapter extends Adapter<
  IBrandsNewsRow,
  Nullable<IBrandsNewsRow>
> {
  adapt: (source: any) => Nullable<IBrandsNewsRow> = (source) => {
    if (!source.length) return null;
    const data = source[0];

    const brandList = data?.items?.filter(
      (item: any) => item?.viewtype !== "CTA"
    );

    const brands = brandList?.map(
      (brand: any): IBrandsNews => ({
        backgroundImage: getAdapterImage(brand?.pictures)[0],
        // category: "BRANDS",
        date: brand?.teaserTitle,
        title: brand?.teaserText,
        cta: getAdapterCTA(brand?.teaserTargets)?.[0] || null,
      })
    );

    return {
      title: data?.teaserTitle,
      news: brands,
      cta: getAdapterCTA(data?.teaserTargets)?.[0],
      tagsToQuery: data?.subjectTaxonomy?.[0]?.value,
    };
  };

  adaptReverse: (source: Nullable<any>) => any = (source) => {
    return source;
  };
}
