import { useEffect, useState } from "react";
import { getAkamayUrl, getVideoType } from "../logic/utilities";
import useResponsive from "./useResponsive";

const useResponsiveBackground = (
  media: string[] | string | any[],
  getAkamay: boolean = false,
  isTablet: boolean = false
): [
  background: string | null,
  getResponsiveBackground: (
    media: string[] | string,
    getAkamay?: boolean,
    isTablet?: boolean
  ) => string | undefined | null
] => {  
  // Hooks
  const { is } = useResponsive();
  const [background, setBackground] = useState<string | null>(null);

  // Effects
  useEffect(() => {
    // Single Media
    if (media?.length <= 1) {
      if (getVideoType(media?.[0]) !== "unknown") {
        setBackground(getAkamay ? getAkamayUrl(media?.[0]) : media?.[0]);
      } else {
        if (getAkamay) {
          setBackground(getAkamayUrl(media?.[0]));
        } else {
          setBackground(media?.[0]);
        }
      }

      return;
    }

    // Multiple Media
    if (
      getVideoType(media?.[is(isTablet ? "tablet" : "mobile", "<") ? 1 : 0]) !== "unknown") {
      setBackground(getAkamay ? getAkamayUrl(media?.[is(isTablet ? "tablet" : "mobile", "<") ? 1 : 0]) : media?.[is(isTablet ? "tablet" : "mobile", "<") ? 1 : 0]);
      return;
    }

    if (media?.length === 3) {
      let bgIndex = 0;
      if (is("desktopS", ">")) bgIndex = 1;
      if (is(isTablet ? "tablet" : "mobile", "<")) bgIndex = 2;
      setBackground(getAkamay ? getAkamayUrl(media?.[bgIndex]) : media?.[bgIndex]);
      return;
    }

    if (media?.length === 1) {
      setBackground(getAkamay ? getAkamayUrl(media?.[0]) : media?.[0]);
      return;
    }

    setBackground(
      getAkamay
        ? getAkamayUrl(media?.[is(isTablet ? "tablet" : "mobile", "<") ? 1 : 0])
        : media?.[is(isTablet ? "tablet" : "mobile", "<") ? 1 : 0]
    );
  }, [media, getAkamayUrl, is]);

  const getResponsiveBackground = (
    media: string[] | string,
    getAkamay: boolean = false,
    isTablet: boolean = false
  ) => {
    // Single Media
    if (media?.length <= 1) {
      if (getVideoType(media?.[0]) !== "unknown") {
        return media?.[0];
      } else {
        if (getAkamay) {
          return getAkamayUrl(media?.[0]);
        } else {
          return media?.[0];
        }
      }
    }

    // Multiple Media
    if (
      getVideoType(media?.[is(isTablet ? "tablet" : "mobile", "<") ? 1 : 0]) !== "unknown") {
      return getAkamay ? getAkamayUrl(media?.[is(isTablet ? "tablet" : "mobile", "<") ? 1 : 0]) : media?.[is(isTablet ? "tablet" : "mobile", "<") ? 1 : 0];
    }

    if (media?.length === 3) {
      let bgIndex = 0;
      if (is("desktopS", ">")) bgIndex = 1;
      if (is(isTablet ? "tablet" : "mobile", "<")) bgIndex = 2;
      return getAkamay ? getAkamayUrl(media?.[bgIndex]) : media?.[bgIndex];
    }

    if (media?.length === 1) {
      return getAkamay ? getAkamayUrl(media?.[0]) : media?.[0];
    }

    return getAkamay
      ? getAkamayUrl(media?.[is(isTablet ? "tablet" : "mobile", "<") ? 1 : 0])
      : media?.[is(isTablet ? "tablet" : "mobile", "<") ? 1 : 0];
  };

  return [background, getResponsiveBackground];
};

export default useResponsiveBackground;
