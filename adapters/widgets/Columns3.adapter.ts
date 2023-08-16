import AppConfig from "../../logic/configs/AppConfig";
import { Nullable } from "../../models/Nullable.interface";
import { IColumns3 } from "../../models/widgets/IColumns3";
import { Adapter } from "../Adapter";

export class Columns3Adapter extends Adapter<
  { columns: IColumns3[] },
  Nullable<{ columns: IColumns3[] }>
> {
  adapt: (source: any) => Nullable<{ columns: IColumns3[] }> = (source) => {
    if (!source.length) return null;
    const data = source;
    const columns = data?.map(
      (column: any): IColumns3 => ({
        paragraph: column?.teaserText,
      })
    );

    return {
      columns: columns,
    };
  };

  adaptReverse: (source: Nullable<any>) => any = (source) => {
    return source;
  };
}
