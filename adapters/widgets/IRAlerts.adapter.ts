import { Nullable } from "../../models/Nullable.interface";
import { IIRAlerts } from "../../models/widgets/IIRAlerts";
import { Adapter } from "../Adapter";

export class IRAlertsAdapter extends Adapter<
  IIRAlerts,
  Nullable<IIRAlerts>
> {
  adapt: (source: any) => Nullable<IIRAlerts> = (source) => {
    if (!source.length) return null;

    const { items, collectionTitle } = source[0] || "";
    const { teaserTitle1: title, teaserText1: description } = source[1] || "";
    const { teaserTitle: src } = source[2] || "";

    const contacts = items?.map((contact: any) => {
      const {
        teaserTitle1: name,
        teaserTitle2: role,
        teaserTitle3: email,
       } = contact || null

      return {
        email,
        name,
        role, 
      }
    });

    const widgetData: IIRAlerts = {
      contactHeader: collectionTitle,
      contacts,
      src,
      forms: {
        title,
        description,
      },
    }
    
    return widgetData;
  };

  adaptReverse: (source: Nullable<any>) => any = (source) => {
    return source;
  };
}