import { ReactNode, useCallback, useContext, useEffect, useState } from "react";
import { ThemeContext } from "styled-components";
import useIsSsr from "../../../hooks/useIsSsr";

type DeviceType = "mobile" | "tablet" | "desktopS" | "desktopL" | "desktopXL";

type Props = {
  children: ReactNode;

  //The from prop takes breakpoint from which the wrapped component is hidden.
  from?: DeviceType;

  //The till prop takes breakpoint till which the wrapped component is hidden.
  till?: DeviceType;

  //The only prop takes array of breakpoints on which the wrapped component is hidden.
  only?: Array<DeviceType> | DeviceType;

  //The colormode takes the theme mode on which the wrapped component must be hidden.
  colorMode?: "light" | "dark";
};

const Hidden = ({ children, from, till, only, colorMode }: Props) => {
  const theme = useContext(ThemeContext);
  const [device, setDevice] = useState<DeviceType>("desktopL");
  const [width, setWidth] = useState<number | undefined>(undefined);
  const isSsr = useIsSsr();

  const getDeviceWidth = useCallback((type: string) => {
    return parseInt(theme?.breakpoints[type]);
  }, [theme]);

  useEffect(() => {
    const size = () => {
      const w = window.innerWidth;
      if (w <= getDeviceWidth("mobile")) return "mobile";
      if (w <= getDeviceWidth("tablet")) return "tablet";
      if (w <= getDeviceWidth("desktopS")) return "desktopS";
      return "desktopXL";
    };

    const handleResize = () => {
      setWidth(window.innerWidth);
      setDevice(size());
    };

    // Set Initial Value
    setWidth(window.innerWidth);
    setDevice(size());

    window.addEventListener("resize", handleResize, { passive: true });
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [getDeviceWidth]);

  //if no prop is passed, it will hide the element wrapped with hidden
  if(isSsr) return null;

  if (!from && !till && !only && !colorMode) {
    return null;
  }

  //if from and till prop exists, it will hide the element wrapped accordingly
  else if (
    from &&
    till &&
    width &&
    width >= getDeviceWidth(from) &&
    width < getDeviceWidth(till)
  ) {
    return null;
  }

  //if from prop exists, it will hide the element wrapped starting from that breakpoint.
  else if (from && !till && width && width >= getDeviceWidth(from)) {
    return null;
  }

  //if till prop exists, it will hide the element wrapped starting from  0 till that breakpoint.
  else if (till && !from && width && width < getDeviceWidth(till)) {
    return null;
  }

  //if platform prop exists and is array, check that array consists current platform value, and if that exists, hide on that platform.
  // if platform prop is string, hide on that platform.
  else if ((Array.isArray(only) && only.includes(device)) || only === device) {
    return null;
  }

  //if colormode prop is valid string, hide on that colormode.
  else if (colorMode === theme?.name) {
    return null;
  }

  return <>{children}</>;
};

export default Hidden;
