// Modules
import ThemeContextProvider from "../context/ThemeContextProvider";
import { withThemesProvider } from "storybook-addon-styled-component-theme";
import { addDecorator } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { RouterContext } from "next/dist/shared/lib/router-context";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { setConfig } from "next/config";
// Themes
import dark from "./../themes/dark";
import light from "./../themes/light";
import * as nextImage from "next/image";

// CSS
import SwiperCore, { Navigation, Pagination } from "swiper";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "../stories/styles/global.css";

setConfig({
  publicRuntimeConfig: { RUNTIME_AKAMAY_URL: "https://preview-stageessilorluxottica.luxgroup.net/graphql" },
  serverRuntimeConfig: { RUNTIME_GRAPHQL_URL: "https://preview-stageessilorluxottica.luxgroup.net/" },
});

SwiperCore.use([Navigation, Pagination]);
Object.defineProperty(nextImage, "default", {
  configurable: true,
  value: (props) => <img {...props} />,
});

// Set global decorator for theme/contexts
export const decorators = [
  (Story) => (
    <Provider store={store}>
      <ThemeContextProvider defaultTheme="Light Theme">
        <Story />
      </ThemeContextProvider>
      <div id="portal"></div>
    </Provider>
  ),
];

addDecorator(withThemesProvider([light, dark]), ThemeProvider);

export const parameters = {
  nextRouter: {
    Provider: RouterContext.Provider,
    path: "/",
    asPath: "/",
    query: {},
    push() {},
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
