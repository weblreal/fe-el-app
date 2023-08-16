import { Theme } from "styled-system";

export const breakpoints: any = [
  "425px",
  "834px",
  "1280px",
  "1440px",
  "1920px",
];

interface ITheme extends Theme {
  name: string;
}

const colors = {
  black: "#000000",
  white: "#ffffff",
  accent: "#1890ff",
  success: "#008a10",
  status: "#f9b740",
  error: "#b60d00",
  text: "#000000",
  background: "#ffffff",
  neutral: {
    5: "rgba(0, 0, 0, 0.05)",
    10: "rgba(0, 0, 0, 0.1)",
    20: "rgba(0, 0, 0, 0.2)",
    30: "rgba(0, 0, 0, 0.3)",
    40: "rgba(0, 0, 0, 0.4)",
    50: "rgba(0, 0, 0, 0.5)",
    60: "rgba(0, 0, 0, 0.6)",
    70: "rgba(0, 0, 0, 0.7)",
    80: "rgba(0, 0, 0, 0.8)",
    90: "rgba(0, 0, 0, 0.9)",
    100: "rgba(0, 0, 0, 1)",
  },
  accents: {
    5: "rgba(24, 144, 255, 0.05)",
    10: "rgba(24, 144, 255, 0.1)",
    20: "rgba(24, 144, 255, 0.2)",
    30: "rgba(24, 144, 255, 0.3)",
    40: "rgba(24, 144, 255, 0.5)",
    50: "rgba(24, 144, 255, 0.6)",
    60: "rgba(24, 144, 255, 0.7)",
    70: "rgba(24, 144, 255, 0.8)",
    80: "rgba(24, 144, 255, 0.9)",
    90: "#1890ff",
  },
  spectrum: {
    5: "#de0312",
    10: "#e32e00",
    20: "#d34600",
    30: "#B85E00",
    40: "#867600",
    50: "#008764",
    60: "#008488",
    70: "#0077d7",
    80: "#0056ff",
    90: "#5366d9",
    100: "#7f63cc",
  },
};

const fonts = {
  "Avenir Bold": "var(--AvenirBold)",
  "Avenir Light": "var(--AvenirLight)",
  "Avenir Medium": "var(--AvenirMedium)",
  "Avenir Regular": "var(--AvenirRegular)",
  "Avenir Roman": "var(--AvenirRoman)",
  "Avenir Black": "var(--AvenirBlack)",
};

const fontWeights = {
  light: 300,
  normal: 400,
  bold: 600,
  bolder: 900,
};

const fontSizes = {
  landing: "80px",
  h1: "40px",
  h2: "32px",
  h3: "24px",
  h4: "20px",
  h5: "18px",
  regular: "16px",
  small: "12px",
};

const space = [0, 8, 16, 24, 32, 40, 48, 56, 64, 72, 80];

const borders = {
  none: "none",
  thin: "1px solid",
  medium: "2px solid",
  thick: "4px solid",
};

const sizes = {
  full: "100%",
  screen: "1920px",
  screen2: "1440px",
  screen3: "1088px",
  screen4: "864px",
};

const defaultButtonCSS: any = {
  appearance: "none",
  cursor: "pointer",

  width: "fit-content",

  display: "flex",
  alignItems: "center",

  fontFamily: "inherit",
  fontSize: "18px",
  fontWeight: "300",

  // userSelect: "none",
  overflow: "hidden",
  whiteSpace: "nowrap",
};

const buttons = {
  primary: {
    ...defaultButtonCSS,
    color: colors.white,
    backgroundColor: colors.black,
    "&:hover": {
      backgroundColor: colors.neutral["80"],
    },
    "&:disabled": {
      backgroundColor: colors.neutral["20"],
      pointerEvents: "none",
      color: "#ffffff50",
    },
  },
  white: {
    ...defaultButtonCSS,
    color: colors.black,
    backgroundColor: colors.white,
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.8)",
    },
    "&:disabled": {
      backgroundColor: "rgba(255, 255, 255, 0.2)",
      pointerEvents: "none",
      color: "#ffffff50",
    },
  },
  secondary: {
    ...defaultButtonCSS,
    color: colors.black,
    backgroundColor: "transparent",
    boxShadow: "0px 0px 0px 1px black",
    position: "relative",
    "div, p": {
      color: colors.black,
      zIndex: 1,
      "svg *": {
        fill: colors.black,
      },
    },
    "&::before": {
      content: `""`,
      position: "absolute",
      top: 0,
      left: 0,
      width: "0%",
      height: "100%",
      backgroundColor: "black",
      transition: "250ms ease",
      zIndex: 0,
      pointerEvents: "none",
    },
    "&:hover": {
      color: colors.white,
      "div, p": {
        color: colors.white,
        "svg *": {
          fill: colors.white,
        },
      },
      "&::before": {
        width: "100%",
      },
    },
    "&:disabled": {
      backgroundColor: colors.neutral["10"],
      color: colors.neutral["20"],
      pointerEvents: "none",
    },
  },
  link: {
    ...defaultButtonCSS,
    border: borders.none,
    height: "unset",
    padding: "0",
    backgroundColor: "none",
    fontSize: fontSizes.regular,
    whiteSpace: "unset",
    "&:hover": {
      textDecoration: "underline",
    },
  },
};

const theme: ITheme = {
  name: "Light Theme",
  colors,
  fonts,
  fontWeights,
  fontSizes,
  space,
  breakpoints,
  borders,
  sizes,
  buttons,
  shadows: {
    ["Card Border"]: `inset 0 0 0 1px ${colors.neutral["10"]}`,
    ["Solid Border"]: `inset 0 0 0 1px ${colors.neutral["100"]}`,
  },
};

// Alias
breakpoints.mobile = breakpoints[0];
breakpoints.tablet = breakpoints[1];
breakpoints.desktopS = breakpoints[2];
breakpoints.desktopL = breakpoints[3];
breakpoints.desktopXL = breakpoints[4];

export default theme;
