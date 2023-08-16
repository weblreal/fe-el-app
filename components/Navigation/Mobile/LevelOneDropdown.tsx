// Modules
import { ILevelOneLinks, INavigation } from "../INavigation";
import Link from "next/link";
import useGetFormattedPath from "../../../hooks/useGetFormattedPath";
import { useAppDispatch } from "../../../redux/hooks";
import { setNavigationLevel } from "../../../redux/slices/Navigation/NavigationSlice";
import { getAnalyticsId } from "../../../logic/utilities";
// Components
import { GridRow } from "../../UI/Grid/Grid";
import Text from "../../UI/Text/Text";
import Center from "../../UI/Center/Center";
import Icon from "../../UI/Icon/Icon";

interface ILevelDrodown extends INavigation {
  updateActiveHandler?: (key: number) => void;
}
const LevelOneDropdown = ({
  LevelOneLinks,
  updateActiveHandler,
  analyticsId,
}: ILevelDrodown) => {
  // Hooks
  const { checkLvl2Active, currentPath, pathArr } = useGetFormattedPath();
  const dispatch = useAppDispatch();

  // Functions
  const checkActive = (link: ILevelOneLinks): boolean => {
    const linkArr = link.url?.split("/");
    linkArr?.shift();

    return (
      currentPath === link?.url ||
      checkLvl2Active(link) ||
      linkArr?.[0] === pathArr?.[0]
    );
  };

  return (
    <>
      {LevelOneLinks?.map((link: ILevelOneLinks, key: number) => (
        <GridRow pointer key={key} pr={2} maxHeight={64}>
          <Center
            justifyContent="space-between"
            noSelect
            onClick={() => {
              if (updateActiveHandler) updateActiveHandler(key);
              if (!!link?.LevelTwoLinks?.length)
                dispatch(setNavigationLevel(2));
            }}
          >
            {!link?.LevelTwoLinks?.length && (
              <Link
                href={link.url || "#"}
                data-element-id={getAnalyticsId(analyticsId, link?.label)}
                style={{ width: "100%" }}
              >
                <Text fontSize="h5" py={21} px={2}>
                  {link?.label}
                </Text>
              </Link>
            )}

            {!!link?.LevelTwoLinks?.length && (
              <Text
                fontSize="h5"
                py={21}
                px={2}
                fontFamily={checkActive(link) ? "Avenir Bold" : "Avenir Light"}
                fontWeight={checkActive(link) ? "bolder" : "normal"}
              >
                {link?.label}
              </Text>
            )}
            {!!link?.LevelTwoLinks?.length && (
              <Icon type="angle-right" size={32} />
            )}
          </Center>
        </GridRow>
      ))}
    </>
  );
};

export default LevelOneDropdown;
