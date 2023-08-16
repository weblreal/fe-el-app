// Modules
import Link from "next/link";
import styled from "styled-components";
import AppConfig from "../../../logic/configs/AppConfig";
import { useState } from "react";
import { ILevelOneLinks, ILevelTwoLinks } from "../INavigation";
import { getAnalyticsId } from "../../../logic/utilities";
import useGetFormattedPath from "../../../hooks/useGetFormattedPath";
// Components
import Container from "../../UI/Container/Container";
import Flex from "../../UI/Flex/Flex";
import Grid, { GridRow } from "../../UI/Grid/Grid";
import Icon from "../../UI/Icon/Icon";
import Text from "../../UI/Text/Text";
import Center from "../../UI/Center/Center";

const Menu = ({ activeLinkData }: { activeLinkData: ILevelOneLinks }) => {
  // Hooks
  const [active, setActive] = useState<number | null>(null);
  const { checkLvl3Active, currentPath } = useGetFormattedPath();

  // Variables
  const links = activeLinkData.LevelTwoLinks;
  const activeLvl3Links = active !== null ? links?.[active] : null;

  return (
    <Flex backgroundTheme flexDirection="column">
      <Flex maxWidth="screen" m="auto" px={8} pt={5} pb={10}>
        {/* Level 2 */}
        <Grid
          gridGap="14px"
          minWidth="500px"
          maxWidth="500px"
          width="500px"
          height="full"
          mr={2}
          borderRight="thin"
          borderColor="neutral.10"
          alignItems="start"
        >
          {links?.map((link: ILevelTwoLinks, key: number) => {
            return link?.label ? (
              <GridRow key={key} width="fit-content">
                {!link?.LevelThreeLinks?.length && (
                  <Link
                    href={link?.url || "#"}
                    data-element-id={getAnalyticsId(
                      activeLinkData?.analyticsId,
                      activeLinkData?.label,
                      link?.label
                    )}
                  >
                    <HoverText
                      fontSize="h3"
                      fontFamily="Avenir Light"
                      fontWeight="light"
                      active={link?.url === currentPath}
                      onMouseOver={() => setActive(null)}
                    >
                      {link.label}
                    </HoverText>
                  </Link>
                )}

                {!!link?.LevelThreeLinks?.length && (
                  <Link
                    href={link?.LevelThreeLinks?.[0]?.url || "#"}
                    data-element-id={getAnalyticsId(
                      activeLinkData?.analyticsId,
                      activeLinkData?.label,
                      link?.label
                    )}
                  >
                    <Center pointer>
                      <HoverText
                        fontSize="h3"
                        onMouseOver={() => setActive(key)}
                        active={checkLvl3Active(link) || active === key}
                        userSelect={false}
                      >
                        {link.label}
                      </HoverText>
                      <Center ml={1}>
                        <Icon type="angle-right-b" size={24} />
                      </Center>
                    </Center>
                  </Link>
                )}
              </GridRow>
            ) : null;
          })}
        </Grid>

        <Container>
          {/* Overview */}
          {!activeLvl3Links && (
            <Container px={5} maxWidth={804} width="50vw">
              <Text
                fontSize="h1"
                fontFamily="Avenir Bold"
                fontWeight="bolder"
                mb={2}
              >
                {activeLinkData?.header}
              </Text>
              <Text fontSize="h5">
                {AppConfig.html(activeLinkData?.longText)}
              </Text>
            </Container>
          )}

          {/* Level 3 */}
          {activeLvl3Links && (
            <Container px={5} maxWidth={804} width="50vw">
              {/* Header */}
              <Text fontSize="h5" mb={2} color="neutral.50">
                {activeLvl3Links?.label}
              </Text>

              {/* Longtext */}
              {activeLvl3Links?.longText && (
                <Text fontSize="h5">
                  {AppConfig.html(activeLvl3Links?.longText)}
                </Text>
              )}

              {/* Lvl 3 Links */}
              <Grid gridGap={1} mt={1} width="fit-content">
                {activeLvl3Links?.LevelThreeLinks?.map(
                  (link: ILevelTwoLinks, key: number) =>
                    link.label ? (
                      <Link
                        href={link.url || "#"}
                        key={key}
                        data-element-id={getAnalyticsId(
                          activeLinkData?.analyticsId,
                          activeLinkData?.label,
                          activeLvl3Links?.label,
                          link?.label
                        )}
                      >
                        <HoverText
                          fontSize="h3"
                          active={currentPath === link?.url}
                        >
                          {link.label}
                        </HoverText>
                      </Link>
                    ) : null
                )}
              </Grid>
            </Container>
          )}
        </Container>
      </Flex>
    </Flex>
  );
};

const HoverText = styled(Text)<{ active?: boolean }>`
  min-height: 29px;

  font-family: ${(props: any) => props.active ? "var(--AvenirBold)" : "var(--AvenirLight)"};
  font-weight: ${(props: any) => (props.active ? 900 : 300)};

  &:hover {
    font-family: var(--AvenirBold);
    font-weight: 900;
  }
`;
export default Menu;
