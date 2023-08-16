// Modules
import Link from "next/link";
import styled from "styled-components";
import AppConfig from "../../../logic/configs/AppConfig";
import { ILevelOneLinks, INavigation } from "./../INavigation";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { AnimatePresence } from "framer-motion";
import { getAnalyticsId } from "../../../logic/utilities";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { toggleSearch } from "../../../redux/slices/Search/SearchSlice";
// Components
import Logo from "../../Logo/Logo";
import Center from "../../UI/Center/Center";
import Column from "../../UI/Column/Column";
import Container from "../../UI/Container/Container";
import Flex from "../../UI/Flex/Flex";
import Icon from "../../UI/Icon/Icon";
import Text from "../../UI/Text/Text";
import Menu from "./Menu";
import SuperHeader from "../../SuperHeader/SuperHeader";
import MotionContainer from "../../UI/MotionContainer/MotionContainer";

const Desktop = ({ LevelOneLinks, analyticsId }: INavigation) => {
  // Hooks
  const { navigationTransparentCMS } = useAppSelector(
    (state: any) => state.Navigation
  );
  const [showMenu, setShowMenu] = useState(false);
  const [active, setActive] = useState<number | null>(null);

  const router = useRouter();
  const parentRoute = router.asPath
    ?.split("/")
    ?.filter((path: string) => path !== "")?.[0];

  const { direction, onTop } = useWheel();

  const dispatch = useAppDispatch();

  router.events.on("routeChangeStart", () => {
    setShowMenu(false);
  });

  // Variables
  const filteredLevelOneLinks = LevelOneLinks?.filter(
    (link: any) => link?.label && link?.url
  );
  const activeLvl2Links =
    active !== null ? filteredLevelOneLinks?.[active] : null;

  const isBackgroundColor = navigationTransparentCMS
    ? showMenu || !onTop
    : true;
  const isTextTheme = navigationTransparentCMS ? showMenu || !onTop : true;

  // Handlers
  const resetMenu = () => {
    setShowMenu(false);
    setActive(null);
  };

  const openSearchModalHandler = () => {
    dispatch(toggleSearch());
  };

  return filteredLevelOneLinks ? (
    <Container width="100%" left={0} top={0} zIndex={999} overflow="hidden">
      {/* SuperHeader */}
      <TransitionContainer
        position="fixed"
        top={direction === "down" ? "-50px" : 0}
        left={0}
        width="full"
        zIndex={9999}
        onMouseEnter={() => {
          setShowMenu(false);
          setActive(null);
        }}
      >
        <SuperHeader />
      </TransitionContainer>

      {/* Lvl 1 */}
      <TransitionFlex
        minHeight="100px"
        maxWidth="full"
        width="100%"
        position="fixed"
        top={direction === "down" ? "0" : "50px"}
        backgroundTheme={isBackgroundColor}
      >
        <Flex minHeight="100px" px={8} maxWidth="screen" m="auto" width="100%">
          {/* Logo */}
          <Column justifyContent="center" alignItems="center">
            <LogoLink
              href="/"
              data-element-id={getAnalyticsId(analyticsId, "Logo")}
            >
              <Logo theme={!isBackgroundColor ? "Dark Theme" : "Light Theme"} />
            </LogoLink>
          </Column>

          {/* Links */}
          <Center
            width="fit-content"
            px={5}
            mx="auto"
            onMouseLeave={resetMenu}
            mb="unset"
            mt="40px"
            pb="40px"
          >
            <Flex m="auto">
              {filteredLevelOneLinks?.map(
                (link: ILevelOneLinks, key: number) => (
                  <Column
                    key={key}
                    mr={
                      key === filteredLevelOneLinks.length - 1
                        ? 0
                        : link.label
                        ? 32
                        : 0
                    }
                    justifyContent="center"
                  >
                    <LinkText
                      active={
                        active === key ||
                        link?.url?.split("/")?.[1] === parentRoute
                      }
                      transparent={!isTextTheme}
                      onMouseEnter={() => {
                        if (!!link?.LevelTwoLinks?.length) {
                          setShowMenu(true);
                          setActive(key);
                        }
                      }}
                      fontFamily="Avenir Light"
                      fontWeight="light"
                    >
                      <Link
                        href={link?.url || "#"}
                        data-element-id={getAnalyticsId(
                          analyticsId,
                          link?.label
                        )}
                      >
                        {link.label?.toUpperCase()}
                      </Link>
                    </LinkText>
                  </Column>
                )
              )}
            </Flex>

            {/* Lvl 2 */}
            <AnimatePresence>
              {showMenu && (
                <TransitionContainer
                  position="fixed"
                  width="100%"
                  height="fit-content"
                  left={0}
                  top={direction === "down" ? 100 : 150}
                >
                  <MotionContainer
                    variants={AppConfig.setAnimationVariant("OPACITY_VARIANT")}
                    initial="hide"
                    animate="show"
                    exit="hide"
                    transition={{ duration: 0.15, delay: 0.5 }}
                  >
                    {/* Overlay */}
                    <Container
                      backgroundColor="neutral.40"
                      height="100vh"
                      width="100%"
                      position="absolute"
                      top={0}
                      left={0}
                      onMouseEnter={resetMenu}
                    ></Container>

                    {/* Menu */}
                    {activeLvl2Links && (
                      <Container
                        position="absolute"
                        top={0}
                        left={0}
                        width="full"
                      >
                        <Menu
                          activeLinkData={{ ...activeLvl2Links, analyticsId }}
                        />
                      </Container>
                    )}
                  </MotionContainer>
                </TransitionContainer>
              )}
            </AnimatePresence>
          </Center>

          {/* Icons */}
          <Column
            justifyContent="center"
            alignItems="center"
            flexDirection="row"
            ml="auto"
          >
            <Container
              pointer
              onClick={openSearchModalHandler}
              data-element-id={getAnalyticsId(analyticsId, "Search")}
            >
              <Center>
                <Icon
                  type="search"
                  size={41.5}
                  color={!isBackgroundColor ? "#ffffff" : undefined}
                />
              </Center>
            </Container>
          </Column>
        </Flex>
      </TransitionFlex>
    </Container>
  ) : null;
};

const LogoLink = styled(Link)`
  display: flex;
`;

const TransitionContainer = styled(Container)`
  transition: 500ms;
`;

const TransitionFlex = styled(Flex)`
  transition: 500ms;
`;

const LinkText = styled(Text)<{ active?: boolean; transparent?: boolean }>`
  position: relative;
  user-select: none;
  cursor: pointer;
  background-color: transparent;

  color: ${(props: any) =>
    props.transparent ? props.theme.colors.white : props.theme.colors.text};

  &:before {
    content: "";
    width: 100%;
    height: 3px;
    background-color: ${(props) =>
      props.transparent ? props.theme.colors.white : props.theme.colors.text};

    position: absolute;
    left: 0;
    bottom: -16px;

    transform: scale(${(props) => (props.active ? 1 : 0)});
    transition: 250ms ease;
  }

  &:hover {
    &:before {
      transform: scale(1);
    }
  }
`;

const useWheel = () => {
  const [direction, setDirection] = useState<"up" | "down">("up");
  const [onTop, setOnTop] = useState(true);

  // Effects
  useEffect(() => {
    const wheelHandler = (event: any) => {
      if (event.deltaY < 0) {
        setDirection("up");
      } else {
        setDirection("down");
      }
    };

    let lastScrollTop = 0;

    const scrollHandler = () => {
      const st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > lastScrollTop) {
        setDirection("down");
      } else if (st < lastScrollTop) {
        setDirection("up");
      }

      lastScrollTop = st <= 0 ? 0 : st;

      if (window.scrollY === 0) {
        setOnTop(true);
      } else {
        setOnTop(false);
      }
    };

    window.addEventListener("wheel", wheelHandler);
    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("wheel", wheelHandler);
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return { direction, onTop };
};

export default Desktop;
