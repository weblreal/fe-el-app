// Modules
import Link from "next/link";
import styled from "styled-components";
import useScrolledTop from "../../../hooks/useScrolledTop";
import { INavigation } from "../INavigation";
import { useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { getAnalyticsId } from "../../../logic/utilities";
import { toggleSearch } from "../../../redux/slices/Search/SearchSlice";
import { useRouter } from "next/router";
// Components
import Logo from "../../Logo/Logo";
import Column from "../../UI/Column/Column";
import Container from "../../UI/Container/Container";
import Flex from "../../UI/Flex/Flex";
import Dropdown from "./Dropdown";
import Center from "../../UI/Center/Center";
import Icon from "../../UI/Icon/Icon";
import Grid from "../../UI/Grid/Grid";

const Mobile = ({ LevelOneLinks, footerLinks, analyticsId }: INavigation) => {
  // Hooks
  const [showMenu, setShowMenu] = useState(false);
  const triggerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const { onTop } = useScrolledTop(triggerRef);
  const { navigationTransparentCMS } = useAppSelector(
    (state: any) => state.Navigation
  );

  const dispatch = useAppDispatch();

  router.events.on("routeChangeComplete", () => {
    setShowMenu(false);
  });

  // Variables
  const isBackgroundColor = navigationTransparentCMS ? onTop : true;
  const isIconColorWhite = navigationTransparentCMS
    ? !onTop && !showMenu
    : false;

  // Functions
  const onOpenMenuHandler = (open: boolean) => {
    setShowMenu(open);
  };

  const openSearchModalHandler = () => {
    dispatch(toggleSearch());
  };

  return (
    <>
      <Container ref={triggerRef}></Container>
      {!navigationTransparentCMS && <Container height={60}></Container>}
      <Container
        backgroundTheme={isBackgroundColor || showMenu}
        width="100%"
        height={showMenu ? "screen" : "unset"}
        position="fixed"
        left={0}
        top={0}
        zIndex={999}
      >
        <Flex justifyContent="space-between" py="14px" px={2}>
          {/* Logo */}
          <Column justifyContent="center" alignItems="center">
            <Link
              href="/"
              data-element-id={getAnalyticsId(analyticsId, "Logo")}
              className="tappable"
            >
              <Flex>
                <Logo theme={isIconColorWhite ? "Dark Theme" : "Light Theme"} />
              </Flex>
            </Link>
          </Column>

          {/* Icons */}
          <Grid gridGap={1} gridTemplateColumns="1fr 1fr">
            <Column
              justifyContent="center"
              alignItems="center"
              flexDirection="row"
              ml="auto"
            >
              <Container
                pointer
                data-element-id={getAnalyticsId(analyticsId, "Search")}
                className="tappable"
                onClick={openSearchModalHandler}
              >
                <Center>
                  <Icon
                    type="search"
                    size={32}
                    color={isIconColorWhite ? "#ffffff" : undefined}
                  />
                </Center>
              </Container>
            </Column>

            <Column
              justifyContent="center"
              alignItems="center"
              flexDirection="row"
              height={32}
              width={32}
              pointer
              onClick={() => onOpenMenuHandler(!showMenu)}
            >
              <a className="tappable">
                <Burger
                  width={21}
                  height={16.5}
                  justifyContent="space-between"
                  flexDirection="column"
                >
                  <Line isTop={showMenu} transparent={isIconColorWhite}></Line>
                  <Line
                    half
                    hide={showMenu}
                    transparent={isIconColorWhite}
                  ></Line>
                  <Line
                    isBottom={showMenu}
                    transparent={isIconColorWhite}
                  ></Line>
                </Burger>
              </a>
            </Column>
          </Grid>
        </Flex>
        {showMenu && (
          <Dropdown
            LevelOneLinks={LevelOneLinks}
            footerLinks={footerLinks}
            analyticsId={analyticsId}
          />
        )}
      </Container>
    </>
  );
};

const Line = styled(Container)<{
  half?: boolean;
  isBottom?: boolean;
  isTop?: boolean;
  hide?: boolean;
  transparent?: boolean;
}>`
  height: 2px;
  width: ${(props) => (props.half ? "50%" : "100%")};
  background-color: ${(props) =>
    props.transparent // If Transparent make it white
      ? "white"
      : props.theme.name === "Dark Theme"
      ? "white"
      : "black"};
  transform: ${(props) =>
    props.isTop
      ? "rotate(45deg) translate(4px,6px)"
      : props.isBottom
      ? "rotate(-45deg) translate(4px,-6px)"
      : ""};
  transition: 250ms ease;
  opacity: ${(props) => (props.hide ? 0 : 1)};
`;

const Burger = styled(Flex)``;

export default Mobile;
