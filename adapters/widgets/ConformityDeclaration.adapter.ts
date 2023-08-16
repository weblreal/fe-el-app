import { Nullable } from "../../models/Nullable.interface";
import IConformityDeclaration from "../../models/widgets/IConformityDeclaration";
import { Adapter } from "../Adapter";

export class ConformityDeclarationAdapter extends Adapter<
  IConformityDeclaration,
  Nullable<IConformityDeclaration>
> {
  adapt: (source: any) => Nullable<IConformityDeclaration> = (source) => {
    if (!source.length) return null;
    const optionsData = source?.[0];
    const textData = source?.[1];
    const { items } = optionsData;
    const paragraph = textData?.teaserText;
    const errorMessage = textData?.teaserTitle;

    const options = items.map(
      ({
        id,
        pictures: [
          {
            data: { uri },
          },
        ],
        pictures: [{ title }],
        teaserText,
        teaserTitle,
      }: any) => ({
        id,
        label: teaserTitle,
        tooltipTitle: teaserText,
        tooltipPicture: uri,
        tooltipDescription: title,
      })
    );

    return {
      paragraph,
      errorMessage,
      options,
    };
  };

  adaptReverse: (source: Nullable<any>) => any = (source) => {
    return source;
  };
}
