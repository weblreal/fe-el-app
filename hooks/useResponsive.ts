import { useEffect, useState } from "react";
import { DeviceType } from "../models/IResponsive";

const ORDER: DeviceType[] = ["mobile", "tablet", "desktopS", "desktopL", "desktopXL"];

const breakpoints: {
  [key: string]: number;
} = {
  mobile: 425,
  tablet: 834,
  desktopS: 1280,
  desktopL: 1440,
  desktopXL: 1920,
};

interface HookType {
  size: DeviceType | undefined;
  is: (type: DeviceType, condition?: ">" | "<") => boolean;
}

const useResponsive = (): HookType => {
  const [windowSize, setWindowSize] = useState<DeviceType>();
  const [width, setWidth] = useState<number | undefined>(undefined);

  useEffect(() => {
    const size = () => {
      const wwidth = window.innerWidth;
      if (wwidth <= breakpoints["mobile"]) return "mobile";
      if (wwidth <= breakpoints["tablet"]) return "tablet";
      if (wwidth <= breakpoints["desktopS"]) return "desktopS";
      if (wwidth <= breakpoints["desktopL"]) return "desktopL";

      return "desktopL";
    };

    const handleResize = () => {
      setWidth(window.innerWidth);
      setWindowSize(size());
    };

    // Initial Values
    setWidth(window.innerWidth);
    setWindowSize(size());

    window.addEventListener("resize", handleResize, { passive: true });
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const is = (type: DeviceType, condition?: ">" | "<"): boolean => {
    if (condition === ">") {
      const previousBreakpoint = ORDER[ORDER.indexOf(type) - 1];
      if (!previousBreakpoint) return true;
      return !!width ? width > breakpoints[previousBreakpoint] : false;
    }
    if (condition === "<") return !!width ? width <= breakpoints[type] : false;
    return windowSize === type;
  };

  return {
    size: windowSize,
    is,
  };
};

export default useResponsive;
