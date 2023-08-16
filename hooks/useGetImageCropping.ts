// Modules
import IMAGE_CROPPINGS from "../logic/constants/IMAGE_CROPPINGS";
import { getAkamayUrl } from "../logic/utilities";
import { ICrops } from "../models/ICrops";
import useResponsive from "./useResponsive";

interface IUseGetImageCroppings {
  crops?: ICrops;
  uriTemplate?: string;
  type: "components" | "widgets";
  name: string;
}

type Breakpoint = "desktopXL" | "desktopL" | "desktopS" | "tablet" | "mobile";

const useGetImageCroppings = ({
  crops,
  uriTemplate,
  type,
  name,
}: IUseGetImageCroppings) => {
  // Hooks
  const { is } = useResponsive();

  // Functions
  const getUriTemplate = (breakpoint: Breakpoint) => {
    const cropName =
      IMAGE_CROPPINGS?.[type]?.[name]?.[breakpoint]?.toString() || "";

    const width = crops?.[cropName];

    if (width === undefined) return null;

    const template: string =
      uriTemplate
        ?.replace("{cropName}", cropName)
        ?.replace("{width}", width.toString()) || "";

    return getAkamayUrl(template);
  };

  if (!type || !name) return null;

  if (is("desktopXL", ">")) {
    return getUriTemplate("desktopXL");
  } else if (is("desktopL", ">")) {
    return getUriTemplate("desktopL");
  } else if (is("desktopS", ">")) {
    return getUriTemplate("desktopS");
  } else if ((is("tablet"), ">")) {
    return getUriTemplate("tablet");
  } else if (is("mobile", ">")) {
    return getUriTemplate("mobile");
  }

  return null;
};

export default useGetImageCroppings;
