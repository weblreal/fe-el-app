import { useRouter } from "next/router";
import {
  ILevelOneLinks,
  ILevelTwoLinks,
} from "../components/Navigation/INavigation";

interface IProps {
  currentPath: string;
  checkLvl3Active: (data: ILevelTwoLinks) => boolean;
  checkLvl2Active: (data: ILevelOneLinks) => boolean;
  pathArr: string[];
  locale?: string;
}

const useGetFormattedPath = (): IProps => {
  const { query, locale, asPath } = useRouter();

  const pathArr = query.page as string[];
  const hash = asPath?.slice(asPath.indexOf("#"));
  const path = `${locale}/${pathArr?.join("/")}${hash}`;
  const currentPath = path?.[path.length - 1] === "/" ? path.slice(0, path.length - 1) : path;
  
  // Handlers
  const checkLvl3Active = (data: ILevelTwoLinks): boolean => {
    return !!data?.LevelThreeLinks?.map((link) => link?.url)?.includes(
      currentPath
    );
  };

  const checkLvl2Active = (data: ILevelOneLinks): boolean => {
    return !!data?.LevelTwoLinks?.map((link) => link?.url)?.includes(
      currentPath
    );
  };

  return { currentPath, checkLvl2Active, checkLvl3Active, pathArr, locale };
};

export default useGetFormattedPath;
