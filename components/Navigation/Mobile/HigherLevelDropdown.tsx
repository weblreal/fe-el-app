// Modules
import { ILevelOneLinks, ILevelTwoLinks, INavigation } from "../INavigation";
import Link from "next/link";
import { ICta } from "../../../models/components/ICta";
import useGetFormattedPath from "../../../hooks/useGetFormattedPath";
import { useAppDispatch } from "../../../redux/hooks";
import {
  setNavigationLevel,
  subNavigationLevel,
} from "../../../redux/slices/Navigation/NavigationSlice";
import { getAnalyticsId } from "../../../logic/utilities";
// Components
import { GridRow } from "../../UI/Grid/Grid";
import Text from "../../UI/Text/Text";
import Center from "../../UI/Center/Center";
import Icon from "../../UI/Icon/Icon";
import styled from "styled-components";
import Flex from "../../UI/Flex/Flex";

interface IHigherLevelDropdown extends ILevelOneLinks {
  updateActiveHandler?: (key: number) => void;
  cta?: ICta;

  // Analytics
  LevelOneLabel?: string;
  LevelTwoLabel?: string;
}
const HigherLevelDropdown = ({
  LevelTwoLinks,
  label,
  updateActiveHandler,
  LevelOneLabel,
  LevelTwoLabel,
  analyticsId,
}: IHigherLevelDropdown) => {
  // Hooks
  const { checkLvl3Active, currentPath } = useGetFormattedPath();
  const dispatch = useAppDispatch();

  // Functions
  const checkActive = (link: ILevelTwoLinks): boolean => {
    return currentPath === link?.url || checkLvl3Active(link);
  };

  return (
    <FlexWrapper overflowY="auto" flexDirection="column" height="calc(100vh - 60px)">
      <GridRow
        backgroundColor="neutral.10"
        px={2}
        py="12px"
        pointer
        noSelect
        onClick={() => dispatch(subNavigationLevel())}
      >
        <Center justifyContent="flex-start">
          <IconRotate2 type="angle-right" size={32} />
          <Text fontSize="h5" ml="4px">
            {label}
          </Text>
        </Center>
      </GridRow>

      {LevelTwoLinks?.map((link: ILevelTwoLinks, key: number) =>
        link.url && link.label ? (
          <GridRow pointer key={key} pr={2} maxHeight={64}>
            <Center
              justifyContent="space-between"
              noSelect
              onClick={() => {
                if (updateActiveHandler) updateActiveHandler(key);
                if (link.LevelThreeLinks) dispatch(setNavigationLevel(3));
              }}
            >
              {!link?.LevelThreeLinks?.length && (
                <Link
                  href={link.url || "#"}
                  data-element-id={getAnalyticsId(
                    analyticsId,
                    LevelOneLabel,
                    LevelTwoLabel,
                    link?.label
                  )}
                  style={{ width: "100%" }}
                >
                  <Text
                    fontSize="h5"
                    py={21}
                    px={2}
                    fontFamily={
                      checkActive(link) ? "Avenir Bold" : "Avenir Light"
                    }
                    fontWeight={checkActive(link) ? "bolder" : "normal"}
                  >
                    {link?.label}
                  </Text>
                </Link>
              )}

              {!!link.LevelThreeLinks?.length && (
                <Text
                  fontSize="h5"
                  py={21}
                  px={2}
                  fontFamily={
                    checkActive(link) ? "Avenir Bold" : "Avenir Light"
                  }
                  fontWeight={checkActive(link) ? "bolder" : "normal"}
                >
                  {link?.label}
                </Text>
              )}

              {!!link.LevelThreeLinks?.length && (
                <Icon type="angle-right" size={32} />
              )}
            </Center>
          </GridRow>
        ) : null
      )}
    </FlexWrapper>
  );
};

const IconRotate2 = styled(Icon)`
  transform: rotate(180deg);
`;

const FlexWrapper = styled(Flex)`
  /* width */
  &::-webkit-scrollbar {
    cursor: pointer;
    width: 4px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: ${(props) => props.theme.colors.neutral["10"]};
    border-radius: 2px;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.colors.text};
    margin-right: 1em;
  }
`;

export default HigherLevelDropdown;
