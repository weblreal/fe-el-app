import getConfig from "next/config";
import { ImageLoaderProps } from "next/image";

const conf = getConfig();
const akamaiURL = conf?.publicRuntimeConfig?.RUNTIME_AKAMAY_URL;

const akamaiLoader = ({ src, width, quality }: ImageLoaderProps) => {
  const env = process.env.NODE_ENV;
  const formattedSrc = src?.split("/")?.slice(3)?.join("/");

  if (env === "development" || !akamaiURL) {
    return `${src}`;
  } else {
    return `${akamaiURL}${formattedSrc}?w=${width}&q=${quality || 100}`;
  }
};

export default akamaiLoader;
