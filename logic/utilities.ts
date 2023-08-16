import getConfig from "next/config";
import { ICta } from "../models/components/ICta";
import { IEvent } from "../models/components/IEvent";
import { ICrops } from "../models/ICrops";
import { MONTHS_LIST } from "./constants/MONTHS_LIST";

export const getAkamayUrl = (src: string) => {
  let url = "";
  const { publicRuntimeConfig } = getConfig();

  if (src && src.length) {
    const basePath =
      publicRuntimeConfig.RUNTIME_AKAMAY_URL ||
      process.env.NEXT_PUBLIC_AKAMAY_PATH;

    if (src.indexOf("data:") < 0) {
      if (src.indexOf(":/") >= 0) {
        const path = new URL(src);
        url = (basePath + "/" + path.pathname)
          .split("///")
          .join("/")
          .split("//")
          .join("/")
          .split(":/")
          .join("://");
      } else {
        url = (basePath + "/" + src)
          .split("///")
          .join("/")
          .split("//")
          .join("/")
          .split(":/")
          .join("://");
      }
    } else {
      url = src;
    }
  }

  return url;
};

interface IGetAdapterViewtype<T> {
  selected?: T;
  unselected?: T;
}

export const getAdapterViewtype = (
  arr: [],
  viewtype: string
): IGetAdapterViewtype<any> => {
  return {
    selected: arr.find((item: any) => item.viewtype === viewtype),
    unselected: arr.filter((item: any) => item.viewtype !== viewtype),
  };
};

export const getAdapterImage = (obj: []) => {
  return obj?.map((img: any) => img?.data?.uri);
};

export const elSegmentRemoval = (segment: string = "") => {
  // Move to APP CONFIG
  const el = segment?.substring(0, 3);
  if (el === "el-") return segment?.replace("el-", "");
  return segment;
};

export const getAnalyticsId = (
  placement?: string,
  level1?: string,
  level2?: string,
  level3?: string
) => {
  if (placement === "Navigation") {
    placement = "MainNav";
  }
  return [
    "X_X",
    placement?.split(" ").join(""),
    level1?.split(" ").join(""),
    level2?.split(" ").join(""),
    level3?.split(" ").join(""),
  ]
    .filter((s) => !!s)
    .join("_");
};

export const getAdapterCTA = (obj: any[]): ICta[] => {
  return obj?.map((link: any) => {
    const hash = link?.callToActionHash;
    const isExternal = link?.target?.type === "CMExternalLink";
    const formattedPath =
      link?.target?.navigationPath
        ?.map((path: any) => elSegmentRemoval(path?.segment))
        ?.join("/") || link?.target?.url;

    return {
      label: link?.callToActionText || link?.target?.teaserText,
      url: isExternal
        ? link?.target?.url
        : `${formattedPath}${hash ? `#${hash}` : ""}` || "#",
      isExternal: isExternal,
    };
  });
};

export const getAdapterPressFileCat = (arr: any[] = []) => {
  const chunkedData: any[] = [];
  const categories: any[] = [];

  arr.forEach((element) => {
    if (!categories.includes(element?.category)) {
      categories.push(element?.category);
    }
  });

  for (const cat of categories) {
    chunkedData.push(arr.filter((item) => item.category === cat));
  }

  return chunkedData;
};

export const getAdapterEventList = (arr: []) => {
  return arr?.map(
    (event: any): IEvent => ({
      date: event?.extDisplayedDate?.split("[")?.[0]
        ? dateConverter_2(event?.extDisplayedDate?.split("[")?.[0])
        : "",
      startDate: event?.extDisplayedDate?.split("[")?.[0],
      endDate: event?.validTo?.split("[")?.[0],
      link: {
        label: event?.teaserTargets?.[0]?.callToActionText,
        url: "#",
      },
      location: event?.detailText,
      title: event?.title,
    })
  );
};

export const getAdapterVideoUrl = (data: any[]) => {
  return data?.map((image: any) => image?.data?.uri || image?.dataUrl) || [];
};

interface IGetAdapterCroppings {
  crops: ICrops;
  uriTemplate: string;
}

export const getAdapterCroppings = (
  pictures: any[]
): IGetAdapterCroppings[] => {
  return pictures?.map((story: any) => {
    const cropObj: { [index: string]: number } = {};

    story?.crops.forEach((crop: any) => {
      const index: string = crop?.name;
      if (index) {
        cropObj[index] = crop?.minWidth;
      }
    });

    return {
      crops: cropObj,
      uriTemplate: story?.uriTemplate,
    };
  });
};

// MOVE TO APP CONFIG
export const dateConverter = (UNIX_timestamp: number, hideDay?: boolean) => {
  const a = new Date(UNIX_timestamp * 1000);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const year = a.getFullYear();
  const month = months[a.getMonth()];
  const date = a.getDate();

  const time = hideDay ? month + " " + year : date + " " + month + " " + year;
  return time;
};

export const dateConverter_2 = (rawDate: string, hideDay?: boolean) => {
  const a = new Date(rawDate);
  const months = MONTHS_LIST;

  const year = a.getFullYear();
  const month = months[a.getMonth()];
  const date = a.getDate();

  const time = hideDay ? month + " " + year : date + " " + month + " " + year;
  return time;
};

export const getVideoType = (
  videoUrl: string
): "youtube" | "vimeo" | "mp4" | "unknown" => {
  if (
    /^(https?:\/\/)?(www\.)?youtube\.com/.test(videoUrl) ||
    /^(https?:\/\/)?(www\.)?youtu\.be/.test(videoUrl)
  ) {
    return "youtube";
  } else if (
    /^(https?:\/\/)?(www\.)?vimeo\.com/.test(videoUrl) ||
    /^(https?:\/\/)?(www\.)?player\.vimeo\.com/.test(videoUrl)
  ) {
    return "vimeo";
  } else if (videoUrl?.endsWith(".mp4")) {
    return "mp4";
  } else {
    return "unknown";
  }
};

export const xmlToJson = (xml: string): Record<string, any> => {
  // Move to APP CONFIG
  function elementToJson(element: Element): Record<string, any> {
    const obj: Record<string, any> = {};

    if (element.hasAttributes()) {
      const attrs = element.attributes;
      for (let i = 0; i < attrs.length; i++) {
        obj[attrs[i].nodeName] = attrs[i].nodeValue;
      }
    }

    if (element.hasChildNodes()) {
      const children = element.childNodes;
      for (let i = 0; i < children.length; i++) {
        const child = children[i];
        if (child.nodeType === Node.ELEMENT_NODE) {
          if (obj[child.nodeName]) {
            if (!Array.isArray(obj[child.nodeName])) {
              obj[child.nodeName] = [obj[child.nodeName]];
            }
            obj[child.nodeName].push(elementToJson(child as Element));
          } else {
            obj[child.nodeName] = elementToJson(child as Element);
          }
        } else if (child.nodeType === Node.TEXT_NODE) {
          const text = child.textContent?.trim();
          if (text) {
            obj["text"] = text;
          }
        }
      }
    }

    return obj;
  }

  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xml, "text/xml");

  const json: Record<string, any> = {};
  json[xmlDoc.documentElement.nodeName] = elementToJson(xmlDoc.documentElement);
  return json;
};

export const getCoreMediaUrl = (str: string) => {
  const prefix = "coremedia://";
  const internalLink = str.includes(prefix);
  let pathname = elSegmentRemoval(
    str.replace(prefix + "/", "").replace(prefix, "")
  );
  // if not footnote, add trailing slash for SEO
  if (pathname.charAt(0) !== "#" && pathname.slice(-1) !== "/") {
    pathname += internalLink ?  "/" : "";
  }
  const origin = globalThis?.location?.origin;

  if (origin) return internalLink ? origin + "/" + pathname : pathname;
  if (!origin) return internalLink ? "https://essilorluxottica.com" + "/" + pathname : pathname;
};
