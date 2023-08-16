// Modules
import styled from "styled-components";
import { INavigation } from "../INavigation";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { ICta } from "../../../models/components/ICta";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { setNavigationLevel } from "../../../redux/slices/Navigation/NavigationSlice";
// Components
import SuperHeaderMobile from "./SuperHeaderMobile";
import LanguagePicker from "./LanguagePicker";
import ThemeToggle from "./ThemeToggle";
import SubLinks from "./SubLinks";
import Container from "../../UI/Container/Container";
import Flex from "../../UI/Flex/Flex";
import LevelOneDropdown from "./LevelOneDropdown";
import HigherLevelDropdown from "./HigherLevelDropdown";

const variant = {
  fromRight: {
    x: "100%",
    opacity: 0,
  },
  fromLeft: {
    x: "-100%",
    opacity: 0,
  },
  view: {
    x: 0,
    opacity: 1,
  },
};

const Dropdown = ({ LevelOneLinks, footerLinks, analyticsId }: INavigation) => {
  // Hooks
  const [active, setActive] = useState<number | null>(null);
  const [active2, setActive2] = useState<number | null>(null);

  const { navigationLevel } = useAppSelector((state) => state.Navigation);
  const dispatch = useAppDispatch();

  // Functions
  const getSelectedLvlLinks = (LevelLinks: any, index: number | null) => {
    return index !== null ? LevelLinks?.[index]?.LevelTwoLinks || [] : [];
  };

  const getSelectedLvl2Links = (LevelLinks: any, index: number | null) => {
    return index !== null ? LevelLinks?.[index]?.LevelThreeLinks || [] : [];
  };

  const getActiveLabel = (LevelLinks: any, index: number | null) => {
    return index !== null ? LevelLinks?.[index]?.label : "";
  };

  const updateActiveHandler = (key: number) => {
    if (key !== undefined || key !== null) setActive(key);
  };

  const updateActiveHandler2 = (key: number) => {
    if (key !== undefined || key !== null) setActive2(key);
  };

  const getParentCTA = (
    LevelLinks: any,
    index: number | null
  ): ICta | undefined => {
    if (index !== null) {
      return {
        label: LevelLinks?.[index]?.label,
        url: LevelLinks?.[index]?.url,
      };
    }
  };

  // Effects
  useEffect(() => {
    return () => {
      dispatch(setNavigationLevel(1));
    };
  }, [dispatch]);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "initial";
    };
  }, []);

  const selectedLvl2Links = getSelectedLvlLinks(LevelOneLinks, active);
  const selectedLvl3Links = getSelectedLvl2Links(selectedLvl2Links, active2);

  return (
    <Container position="relative">
      {/* Level 1 */}
      <AnimatePresence>
        {navigationLevel === 1 && (
          <MotionWrapper
            variants={variant}
            initial="fromLeft"
            exit="fromLeft"
            animate="view"
            transition={{
              ease: "easeOut",
              duration: 0.5,
              delay: navigationLevel === 1 ? 0 : 0.5,
            }}
          >
            {/* Stats */}
            <SuperHeaderMobile />

            <ScrollWrapper
              overflowY="auto"
              flexDirection="column"
              height="calc(100vh - 96px)"
            >
              {/* Level one Links */}
              <LevelOneDropdown
                LevelOneLinks={LevelOneLinks}
                updateActiveHandler={updateActiveHandler}
              />

              {/* Language */}
              <LanguagePicker />

              {/* Theme Toggle */}
              <ThemeToggle />

              {/* Sub links */}
              <SubLinks footerLinks={footerLinks} analyticsId={analyticsId} />
            </ScrollWrapper>
          </MotionWrapper>
        )}
      </AnimatePresence>

      {/* Level 2 */}
      <AnimatePresence>
        {navigationLevel === 2 && (
          <MotionWrapper
            variants={variant}
            initial="fromLeft"
            exit="fromLeft"
            animate="view"
            transition={{
              ease: "easeOut",
              duration: 0.5,
              delay: navigationLevel === 2 ? 0 : 0.5,
            }}
          >
            <HigherLevelDropdown
              LevelTwoLinks={selectedLvl2Links}
              label={getActiveLabel(LevelOneLinks, active) || ""}
              updateActiveHandler={updateActiveHandler2}
              cta={getParentCTA(LevelOneLinks, active)}
              analyticsId={analyticsId}
              LevelOneLabel={
                active !== null ? LevelOneLinks?.[active]?.label : ""
              }
            />
          </MotionWrapper>
        )}
      </AnimatePresence>

      {/* Level 3 */}
      <AnimatePresence>
        {navigationLevel >= 3 && (
          <MotionWrapper
            variants={variant}
            initial="fromLeft"
            exit="fromLeft"
            animate="view"
            transition={{
              ease: "easeOut",
              duration: 0.5,
              delay: navigationLevel === 3 ? 0 : 0.5,
            }}
          >
            <HigherLevelDropdown
              LevelTwoLinks={selectedLvl3Links}
              label={getActiveLabel(selectedLvl2Links, active2) || ""}
              analyticsId={analyticsId}
              LevelOneLabel={
                active !== null ? LevelOneLinks?.[active]?.label || "" : ""
              }
              LevelTwoLabel={
                active2 !== null
                  ? getSelectedLvlLinks(LevelOneLinks, active)?.[active2]
                      ?.label || ""
                  : ""
              }
            />
          </MotionWrapper>
        )}
      </AnimatePresence>
    </Container>
  );
};

const MotionWrapper = styled(Container)`
  z-index: navigationLevel;
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
`;

const ScrollWrapper = styled(Flex)`
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

export default Dropdown;
