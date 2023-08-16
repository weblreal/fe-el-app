import { getAdapterCTA, getAdapterImage } from "../../logic/utilities";
import { Nullable } from "../../models/Nullable.interface";
import { IClosedBackgroundImage } from "../../models/widgets/IClosedBackgroundImage";
import { Adapter } from "../Adapter";

export class ClosedBackgroundImageAdapter extends Adapter<
  IClosedBackgroundImage,
  Nullable<IClosedBackgroundImage>
> {
  adapt: (source: any) => Nullable<IClosedBackgroundImage> = (source) => {
    if (!source.length) return null;
    const data = source[0];
    const splittedTd = data?.detailText?.split("</td>") || data?.teaserText2?.split("</td>");
    const tds = splittedTd?.splice?.(0, splittedTd.length === 1 ? 0 : splittedTd.length - 1);

    const tableWithPortalDiv = tds
      ?.map(
        (td: string, key: number) =>
          td +
          `<p id="link-${data?.id}-${
            key + 1
          }" className="cta-link"></p></td>`
      )
      ?.join("");

      const title = data?.title === "-" ? "" : data?.title || data?.teaserTitle1 === "-" ? "" : data?.teaserTitle1;
      return {
      title: title,
      subTitle: data?.teaserText1,
      paragraphs: tableWithPortalDiv,
      cta: getAdapterCTA(data?.teaserTargets || data?.teaserTargets)?.[0],
      backgroundImage: getAdapterImage(data?.teaserBackgroundImage) || [],
      portalId: `link-${data?.id}-${tds?.length || 0}`,
      showLabel: data?.teaserTitle2,
      hideLabel: data?.teaserTitle3,
      blackColor: data?.viewtype === "Black",
      darkOverlay: data?.viewtype === "DarkOverlay",
    };
  };

  adaptReverse: (source: Nullable<any>) => any = (source) => {
    return source;
  };
}
