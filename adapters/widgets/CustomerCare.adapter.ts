import { Nullable } from "../../models/Nullable.interface";
import { Adapter } from "../Adapter";
import {
  IBrandsSelection,
  ICountries,
  ICustomerCare,
} from "../../models/widgets/ICustomerCare";

export class CustomerCareAdapter extends Adapter<
  ICustomerCare,
  Nullable<ICustomerCare>
> {
  adapt: (source: any) => Nullable<ICustomerCare> = (source) => {
    if (!source.length) return null;

    const data = source[0];
    const stepOne = data?.items?.[0];

    const brandsSelection = stepOne?.pictures?.map(
      (picture: any, key: number): IBrandsSelection => {
        const rawCountries = picture?.settings?.SelectionBox[0];

        const countries = Object.keys(rawCountries || {})?.map(
          (country: string): ICountries => ({
            label: country,
            value: country,
            parameterOne: rawCountries?.[country]?.[0] || "",
            parameterTwo: rawCountries?.[country]?.[1] || "",
          })
        );

        countries.sort(function (a, b) {
          var textA = (a?.label || "").toUpperCase();
          var textB = (b?.label || "").toUpperCase();
          // return textA < textB ? -1 : textA > textB ? 1 : 0;
          return textA.localeCompare(textB);
        });

        // zzz_ filters
        const otherCountriesItem = countries?.find((country: ICountries) => country.label.includes("zzz_")) || null;
        const filteredZZZ = countries?.filter((country: ICountries) => !country.label.includes("zzz_"))

        if(otherCountriesItem) {
          filteredZZZ.push(otherCountriesItem);
        }

        const formattedCountry = filteredZZZ?.map((country: ICountries) => ({
          ...country, 
          label: country.label.replace(/zzz_/, ""), 
          value: country.value.replace(/zzz_/, "") 
        }));

        return {
          id: key || 0,
          countries: formattedCountry,
          cta: [],
          logo: "",
          logoImage: [picture?.data?.uri],
        };
      }
    );

    return {
      header: stepOne?.title,
      stepLabel: data?.collectionTitle,
      stepLabel2: stepOne?.detailText,
      templateText: stepOne?.teaserText,
      brandsSelection,
      countryPlaceholder: stepOne?.teaserTitle || "",
    };
  };

  adaptReverse: (source: Nullable<any>) => any = (source) => {
    return source;
  };
}
