import parse, { HTMLReactParserOptions } from "html-react-parser";
import { getAkamayUrl, getCoreMediaUrl } from "../utilities";
import { IAnimationTypes } from "../../models/IAnimationTypes";
import ANIMATION_VARIANTS from "../constants/ANIMATION_VARIANTS";
import { META_IMAGES_NAMES } from "../constants/METATAGS";
import { PLACEMENT_NO_PADDING } from "../constants/PLACEMENT_NO_PADDING";
import { Variants } from "framer-motion";

const AppConfig = (() => {
  // NO padding top
  const isPlacementNoPadding = (widgetName: string) => {
    return PLACEMENT_NO_PADDING.includes(widgetName);
  };

  // Animation Variants
  const setAnimationVariant = (animation: IAnimationTypes) => {
    return ANIMATION_VARIANTS[animation] as Variants;
  };

  // Newline Parser
  const newLineToHTML = (str: string) => {
    if (typeof str === "string") {
      return (str || "")?.replace(/\n/g, "<br />")?.replace(/\\n/g, "<br />");
    } else {
      return "";
    }
  };

  // URI Temp
  const setUriTemplates = (str: string = ""): string | null => {
    if (!str) return null;

    //set img tag src
    const imgTemplate = "data-uritemplate=";
    const imgRegex = new RegExp(`${imgTemplate}"(.+?)"`, "g");
    const imgs =
      str.match(imgRegex)?.map((match) => {
        return match.replace(imgTemplate, "").slice(1, -1);
      }) || [];

    for (let n = 0; n < imgs.length; n++) {
      const src = imgs[n].replace("{cropName}/{width}/", "");
      str = str.replace(
        `${imgTemplate}"${imgs[n]}"`,
        `src="${getAkamayUrl(src)}"`
      );
    }

    //set anchor tag href
    const anchorTemplate = "data-href=";
    const anchorRegex = new RegExp(`${anchorTemplate}"(.+?)"`, "g");
    const anchors =
      str.match(anchorRegex)?.map((match) => {
        return match.replace(anchorTemplate, "").slice(1, -1);
      }) || [];

    for (let n = 0; n < anchors.length; n++) {
      let rawHref = anchors[n].replace("le-", "");
      let href = rawHref?.replace("coremedia://", "");
      if (href.charAt(href.length - 1) !== "/") href += "/";
      str = str.replace(
        `${anchorTemplate}"${anchors[n]}"`,
        `href="${href}" target="_blank"`
      );
    }

    return str;
  };

  // Decode HTML Entities
  const decodeHTMLEntities = (str: string) => {
    var textArea = globalThis?.window?.document?.createElement("textarea");
    let convertedEntities = str;

    if (textArea) {
      textArea.innerHTML = str;
      convertedEntities = textArea.value;

      return convertedEntities;
    }

    return convertedEntities;
  };

  // Styled HTML Text
  const styledHTMLText = (str: string) => {
    const decodedEntities = decodeHTMLEntities(str || "");
    let convertedEntities = "";
    convertedEntities = decodedEntities.replace(
      /<iframe /g,
      "<div class='longtext-iframe' style='position: relative; width: 100%; padding-bottom: 56.326%'><iframe style='position: absolute; left: 0; top: 0; width: 100%; height: 100%;' "
    );
    convertedEntities = convertedEntities.replace(
      /<\/iframe>/g,
      "</iframe></div>"
    );
    convertedEntities = convertedEntities.replace(
      /<table>/g,
      "<div class='longtext-table' style='overflow-x: auto;'><table>"
    );
    convertedEntities = convertedEntities.replace(
      /<\/table>/g,
      "</table></div>"
    );

    return convertedEntities;
  };

  // HTML Parse
  const html = (str?: string) => {
    const newLine = newLineToHTML(styledHTMLText(str || "") || "");
    const templated = setUriTemplates(newLine) || "";

    const options: HTMLReactParserOptions = {
      replace: (domNode: any) => {
        // parse images
        if (domNode?.name === "img" && domNode?.type === "tag") {
          const template = domNode?.attribs?.["data-uritemplate"];
          if (template) {
            const image = template.replace("{cropName}/{width}/", "");
            domNode.attribs["src"] = getAkamayUrl(image);
          }
        }

        // parse links and footnotes
        if (domNode?.name === "a" && domNode?.type === "tag") {
          const template =
            domNode?.attribs?.["data-href"] || domNode?.attribs?.["href"];
          if (template) {
            // parse coremedia urls
            const href = getCoreMediaUrl(template);

            domNode.attribs.className = "article-anchor";
            domNode.attribs["href"] = href;
          }

          // parse external links
          // const target = domNode?.attribs?.["data-show"];
          // if (target === "new") {
          //   domNode.attribs["target"] = "_blank";
          // }

          if (domNode?.attribs?.href?.includes("www.essilorluxottica.com")) {
            domNode.attribs["target"] = "_self";
          } else {
            domNode.attribs["target"] = "_blank";
          }
        }

        return domNode;
      },
    };

    return parse(templated?.replace(/el-/g, ""), options);
  };

  // Limit text
  const limitText = (str: string = "", limit: number = 100) => {
    return str && str?.length >= limit
      ? str.substring(0, limit).trim() + "..."
      : str;
  };

  // Randomize Array
  const randomizeArray = (arr: []) => {
    let shuffled = arr
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);

    return shuffled;
  };

  // Placement Merger
  const mergePlacement = (
    data: any,
    newViewType: string,
    viewTypeToMerge: string[]
  ) => {
    const dataWithId = data?.map((placement: any, key: number) => ({
      ...placement,
      orderId: key + 1,
    }));

    const filteredData = dataWithId
      ?.filter((obj: any) => {
        return viewTypeToMerge.includes(obj?.placements[0]?.viewtype);
      })
      ?.map((obj: any) => obj);

    return {
      placements: [
        {
          name: filteredData?.[0]?.placements?.[0].name,
          viewtype: newViewType,
          items: filteredData,
        },
      ],
      orderId: filteredData?.[0]?.orderId,
    };
  };

  const getMetaTagsLinks = (metaTagsData?: any): [] => {
    try {
      const html = metaTagsData?.placements[0]?.items[0]?.html;
      const image = metaTagsData?.placements[0]?.items[1]?.data?.uri || "";

      const list = html?.split("<meta")?.map((link: any) => {
        const cleanupLink = link?.trim()?.replace(/\\n/g, "");

        const name = (cleanupLink?.split('name="')[1] || "")?.split('"')[0];
        const property = (cleanupLink?.split('property="')[1] || "")?.split(
          '"'
        )[0];

        const isImage = META_IMAGES_NAMES?.some(
          (itemName: string) => itemName === name || itemName === property
        );
        const content = !isImage
          ? (cleanupLink?.split('content="')[1] || "")?.split('"')[0]
          : getAkamayUrl(image || "");

        return { property, content, name };
      });

      list?.shift();

      return list || [];
    } catch (err) {
      console.log(err);
      return [];
    }
  };

  // Generate Calendar URL
  const generateCalendarUrl = (event: {
    startTime: Date;
    endTime: Date;
    title?: string;
    description?: string;
    location?: string;
  }) => {
    const startTime = event.startTime.toISOString().replace(/-|:|\.\d+/g, "");
    const endTime = event.endTime.toISOString().replace(/-|:|\.\d+/g, "");
    const title = encodeURIComponent(event?.title || "");
    const description = encodeURIComponent(event?.description || "");
    const location = encodeURIComponent(event?.location || "");

    return (
      `data:text/calendar;charset=utf-8,` +
      `BEGIN:VCALENDAR
      VERSION:2.0
      BEGIN:VEVENT
      DTSTART:${startTime}
      DTEND:${endTime}
      SUMMARY:${title}
      DESCRIPTION:${description}
      LOCATION:${location}
      END:VEVENT
      END:VCALENDAR`
    );
  };

  // Strip elements
  const stripHtml = (html: string) => {
    let tmp = globalThis?.window?.document?.createElement("DIV");

    if (!tmp) return html;

    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
  };

  // Capitalize string
  const toCapitalizeString = (str: string) => {
    const firstLetter = str.charAt(0);

    const firstLetterCap = firstLetter.toUpperCase();

    const remainingLetters = str.slice(1);

    const capitalizedWord = firstLetterCap + remainingLetters;

    return capitalizedWord;
  };

  return {
    html,
    mergePlacement,
    limitText,
    randomizeArray,
    setUriTemplates,
    getMetaTagsLinks,
    setAnimationVariant,
    generateCalendarUrl,
    isPlacementNoPadding,
    stripHtml,
    toCapitalizeString,
    decodeHTMLEntities,
    styledHTMLText,
  };
})();

export default AppConfig;
