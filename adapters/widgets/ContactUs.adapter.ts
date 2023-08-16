import { Nullable } from "../../models/Nullable.interface";
import { IContactUs } from "../../models/widgets/IContactUs";
import { Adapter } from "../Adapter";

export class ContactUsAdapter extends Adapter<
  IContactUs,
  Nullable<IContactUs>
> {
  adapt: (source: any) => Nullable<IContactUs> = (source) => {
    if (!source.length) return null;
    const {
      teaserTitle1: header,
      teaserTitle2: requiredField,
      teaserText1: descriptions,
      teaserText2: disclaimer,
    } = source[0] || "";
    const { items: formItems } = source[1] || null;
    const {
      teaserTitle1: submit,
      teaserTitle2: recipient,
      teaserTitle3: captchaLabel,
    } = source[2] || "";

    const forms = formItems
      ?.map((item: any) => {
          const {
            teaserPreTitle: name,
            teaserTitle1: label,
            teaserTitle2: type,
            teaserTitle3: placeholder,
            teaserTitle4: required,
          } = item || "";

          const parseValue = (value: string) => {
            const data = value
              ?.split("=")[1]
            return data;
          }

          return {
            name: parseValue(name),
            label: parseValue(label),
            placeholder: parseValue(placeholder),
            type: parseValue(type),
            required: JSON.parse(parseValue(required)),
          };
      });

    const widgetData: IContactUs = {
      captchaLabel,
      descriptions,
      disclaimer,
      forms,
      header,
      recipient,
      requiredField,
      submit,
    }
    
    return widgetData;
  };

  adaptReverse: (source: Nullable<any>) => any = (source) => {
    return source;
  };
}
