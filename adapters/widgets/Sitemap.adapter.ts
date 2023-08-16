import { getAdapterCTA } from "../../logic/utilities";
import { Nullable } from "../../models/Nullable.interface";
import { ILinkList, ISitemap } from "../../models/widgets/ISitemap";
import { Adapter } from "../Adapter";

export class SitemapAdapter extends Adapter<ISitemap, Nullable<ISitemap>> {
  adapt: (source: any) => Nullable<ISitemap> = (source) => {
    if (!source.length) return null;
    const data = source;

    const linkList: ILinkList[] = data?.map((linkGroup: any): ILinkList => {
      const links: any[] = [];

      linkGroup?.items?.forEach((link: any) => {
        const isSecondLevel = link?.viewtype === "navMenuSecondLevel";
        const isHash = link?.type === "CMTeaser";

        const secondLevelItems =
          link?.items?.filter((item: any) => item?.viewtype !== "Level2CTA") ||
          [];

        if (isSecondLevel && !isHash) {
          links?.push(...secondLevelItems);
          return;
        }

        if (isHash) {
          const secondLevelItemsHash = link?.teaserTargets?.map(
            (target: any) => {
              const hashToAppend = {
                segment: `#${target?.callToActionHash}` || "",
              };
              return {
                target: {
                  navigationPath: [
                    ...target?.target?.navigationPath,
                    hashToAppend,
                  ],
                  title: target?.callToActionText,
                  teaserTitle: target?.callToActionText,
                },
              };
            }
          );

          links?.push(
            ...secondLevelItemsHash?.map((target: any) => target?.target)
          );
        }

        if (!isSecondLevel) {
          links?.push(link);
          return;
        }
      });

      return {
        title: linkGroup?.collectionTitle,
        links: getAdapterCTA(
          links?.map((link: any) => ({
            callToActionText: link?.teaserTitle,
            target: { navigationPath: link?.navigationPath },
          }))
        ),
      };
    });

    return {
      linkList: linkList,
    };
  };

  adaptReverse: (source: Nullable<any>) => any = (source) => {
    return source;
  };
}
