import { getAdapterCTA, getAdapterImage } from "../../logic/utilities";
import { Nullable } from "../../models/Nullable.interface";
import { IBrandsItem, IBrandsGrid } from "../../models/widgets/IBrandsGrid";
import { Adapter } from "../Adapter";

export class BrandsGridAdapter extends Adapter<
  IBrandsGrid,
  Nullable<IBrandsGrid>
> {
  adapt: (source: any) => Nullable<IBrandsGrid> = (source) => {
    if (!source.length) return null;
    const data = source[0];

    // const getAdapterCTA = (obj: any[]): ICta[] => {
    //   return obj?.map((link: any) => ({
    //     label: link?.callToActionText,
    //     url:
    //       link?.target?.url || "#",
    //   }));
    // };

    const brands = data?.items?.map(
      (brand: any): IBrandsItem => ({
        title: brand?.teaserTitle1,
        title2: brand?.teaserTitle2,
        longText1: brand?.teaserText1,
        logoImage: getAdapterImage(brand?.teaserLogoImage),
        cta: getAdapterCTA(brand?.teaserTargets.map((link: any) => link)),
        keyword: brand?.keywords
      })
    )

    let filters: any = [];
    if (source.length > 1) {
      //FOR GETTING FILTER PARAMS TABS
      let filterParams = source[1];
      filterParams.items?.map((item: any) => filters.push({ name: item.name, value: item.externalReference, translations: item.settings }))
    }

    return {
      title: data?.collectionTitle,
      title2: data?.collectionSubTitle,
      brands: brands,
      filters: filters
    }
  };

  adaptReverse: (source: Nullable<any>) => any = (source) => {
    return source;
  };
}
