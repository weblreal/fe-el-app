import { elSegmentRemoval, getAdapterCTA } from "../../logic/utilities";
import { IIconType } from "../../models/components/IIcon";
import { ILink } from "../../models/components/ILink";
import { Nullable } from "../../models/Nullable.interface";
import { IFooter, ISocial } from "../../models/widgets/IFooter";
import { Adapter } from "../Adapter";

export class FooterAdapter extends Adapter<IFooter, Nullable<IFooter>> {
  adapt: (source: any) => Nullable<IFooter> = (source) => {
    if (!source.length) return null;

    // Footer Links
    const rawFooterDataLinks = source?.[0]?.placements?.[0]?.items;
    const footerDataLinks = rawFooterDataLinks?.map(
      (link: any): ILink => ({
        label: link?.teaserTitle,
        url: getAdapterCTA(link?.teaserTargets)?.[0]?.url || "#",
      })
    );

    // Ext Links
    const rawExtLinks = source?.[3]?.placements?.[0]?.items;
    const extLinks = rawExtLinks?.map((link: any) => ({
      label: link?.teaserTitle,
      url: elSegmentRemoval(link?.url),
    }));

    // Copyright
    const rawCopyright = source?.[2]?.placements?.[0]?.items?.[0];

    // Sub Links
    const rawSubLinks = source?.[4]?.placements?.[0]?.items;
    const subLinks = rawSubLinks?.map(
      (link: any): ILink => ({
        label: link?.teaserTitle,
        url:
          elSegmentRemoval(
            link?.navigationPath?.map((path: any) => path?.segment)?.join("/")
          ) || "#",
      })
    );

    // Social
    const rawSocial = source?.[1]?.placements?.[0]?.items;
    const getSocialIcon = (name: string): IIconType | null => {
      switch (name) {
        case "FaceBook":
          return "facebook";
        case "Instagram":
          return "instagram";
        case "Linkedin":
          return "linkedin";
        case "Twitter":
          return "twitter";
        default:
          return null;
      }
    };

    return {
      footerData: {
        links: footerDataLinks,
        externalLinks: extLinks,
      },
      subFooterData: {
        copyright: rawCopyright?.teaserTitle,
        links: subLinks,
      },
      socialData: rawSocial?.map(
        (soc: any): ISocial => ({
          icon: getSocialIcon(soc?.name) || "essilor-dot",
          url: elSegmentRemoval(soc?.url),
        })
      ),
    };
  };

  adaptReverse: (source: Nullable<any>) => any = (source) => {
    return source;
  };
}
