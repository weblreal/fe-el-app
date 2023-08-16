// Modules
import { INavigation } from "./INavigation";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { setNavigationTransparent } from "../../redux/slices/Navigation/NavigationSlice";
// Components
import Hidden from "../UI/Hidden/Hidden";
import Desktop from "./Desktop/Desktop";
import Mobile from "./Mobile/Mobile";

const Navigation = ({ LevelOneLinks, footerLinks }: INavigation) => {
  // Hooks
  const router = useRouter();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setNavigationTransparent(router.asPath === "/"));
  }, [router, dispatch]);

  return !!LevelOneLinks?.length || footerLinks ? (
    <>
      {/* Desktop */}
      <Hidden till="desktopS">
        <Desktop LevelOneLinks={LevelOneLinks} analyticsId="Navigation" />
      </Hidden>

      {/* Mobile */}
      <Hidden from="desktopS">
        <Mobile
          LevelOneLinks={LevelOneLinks}
          footerLinks={footerLinks}
          analyticsId="Navigation"
        />
      </Hidden>
    </>
  ) : (
    <></>
  );
};

export default Navigation;
