import {
  ILevelOneLinks,
  ILevelThreeLinks,
  ILevelTwoLinks,
  INavigation,
} from "../../components/Navigation/INavigation";
import { getAdapterCTA } from "../../logic/utilities";
import { ICta } from "../../models/components/ICta";
import { Nullable } from "../../models/Nullable.interface";
import { Adapter } from "../Adapter";

export class NavigationAdapter extends Adapter<
  INavigation,
  Nullable<INavigation>
> {
  adapt: (source: any) => Nullable<INavigation> = (source) => {
    if (!source.length) return null;
    const data = source[0]?.placements[0];
    const data2 = source?.[1]?.placements?.[0]?.items;

    const LevelOneLinks = data?.items?.map((levelOne: any): ILevelOneLinks => {
      const LevelTwoLinks: ILevelTwoLinks[] = levelOne?.items
        ?.slice(1)
        ?.map((levelTwo: any): ILevelTwoLinks => {
          const linkFormat = { target: { navigationPath: levelTwo?.navigationPath } };

          const LevelThreeLinks: ILevelThreeLinks[] = levelTwo?.items?.slice(1)?.map((levelThree: any): ILevelThreeLinks => {
            return {
              label: levelThree?.teaserTitle,
              url: getAdapterCTA([{ target: { navigationPath: levelThree?.navigationPath } }])?.[0]?.url,
            }
          });

          return { // Level 2
            label: levelTwo?.teaserTitle || levelTwo?.collectionTitle || levelTwo?.teaserTitle,
            url: getAdapterCTA([linkFormat])?.[0]?.url,
            longText: levelTwo?.teaserText,
            LevelThreeLinks: getAdapterCTA(levelTwo?.teaserTargets) || LevelThreeLinks,
          }
        });

      return { // Level 1
        label: levelOne?.collectionTitle,
        // url: getAdapterCTA(levelOne?.teaserTargets)?.[0]?.url,
        url: getAdapterCTA(levelOne?.items?.[0]?.teaserTargets)?.[0]?.url,
        longText: levelOne?.items?.[0]?.teaserText,
        header: levelOne?.items?.[0]?.teaserTitle,
        LevelTwoLinks: LevelTwoLinks,
      };
    });

    // Footer Links
    const footerLinks = data2?.map((link: any): ICta => ({
      label: link?.teaserTitle,
      url: getAdapterCTA([{ target: { navigationPath: link?.navigationPath } }])?.[0]?.url,
    }));

    return {
      LevelOneLinks: LevelOneLinks?.filter((links: any) => links?.label && links?.url),
      footerLinks: footerLinks,
    };
  };

  adaptReverse: (source: Nullable<any>) => any = (source) => {
    return source;
  };
}
