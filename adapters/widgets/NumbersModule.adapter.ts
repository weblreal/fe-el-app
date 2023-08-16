import { INumberCard } from "../../components/NumberCard/INumberCard";
import { getAdapterImage } from "../../logic/utilities";
import { Nullable } from "../../models/Nullable.interface";
import { INumbersModule } from "../../models/widgets/INumbersModule";
import { Adapter } from "../Adapter";

export class NumbersModuleAdapter extends Adapter<
  INumbersModule,
  Nullable<INumbersModule>
> {
  adapt: (source: any) => Nullable<INumbersModule> = (source) => {
    if (!source.length) return null;
    const data = source[0];

    const slide = data?.items?.map(
      (number: any): INumberCard => ({
        backgroundImage: getAdapterImage(number?.pictures)?.[0],
        header: number?.teaserTitle,
        longText: number?.teaserText,
      })
    );

    return {
      header: data?.collectionTitle,
      slide: slide,
    };
  };

  adaptReverse: (source: Nullable<any>) => any = (source) => {
    return source;
  };
}
