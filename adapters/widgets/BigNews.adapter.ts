import { getAdapterCTA, getAdapterImage } from "../../logic/utilities";
import { Nullable } from "../../models/Nullable.interface";
import {
  IBrandsNewsRow,
  IBrandsNews,
} from "../../models/widgets/IBrandsNewsRow";
import { Adapter } from "../Adapter";

export class BigNewsAdapter extends Adapter<
  IBrandsNewsRow,
  Nullable<IBrandsNewsRow>
> {
  adapt: (source: any) => Nullable<IBrandsNewsRow> = (source) => {
    if (!source.length) return null;
    const data = source;
    
    const brandList = data?.filter(
      (item: any) => item?.viewtype !== "CTA"
    );
    const cta = data?.find((item: any) => item?.viewtype === "CTA");
    const brands = brandList?.map(
      (brand: any): IBrandsNews => ({
        backgroundImage: getAdapterImage(brand?.pictures)[0],
        date: brand?.teaserTitle,
        title: brand?.title,
        longText: brand?.teaserText,
        cta: getAdapterCTA(brand?.teaserTargets)?.[0] || null,
        tagArray: brand?.subjectTaxonomy.map((e: any) => e.settings),
      })
    );

    
    return {
      title: cta.teaserTitle,
      news: brands,
      cta: getAdapterCTA(cta?.teaserTargets)?.[0],
    };
  };

  adaptReverse: (source: Nullable<any>) => any = (source) => {
    return source;
  };
}
