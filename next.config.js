/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  experimental: {
    forceSwcTransforms: false,
  },
  compiler: {
    styledComponents: {
      ssr: true,
      fileName: true,
      displayName: true,
    },
  },
  i18n: {
    locales: ["default", "en", "it", "fr"],
    defaultLocale: "default",
    localeDetection: false,
  },
  images: {
    domains: [
      "preview-stageintlens.luxgroup.net",
      "media-lens.essilor.com",
      "preview-stageintessilorluxottica.luxgroup.net",
      "media.essilorluxottica.com",
      "preview-stageuatessilorluxottica.luxgroup.net",
      "preview-stageessilorluxottica.luxgroup.net",
    ],
    deviceSizes: [425, 834, 1280, 1440, 1920],
  },
};

// CMS Config
const fs = require("fs");
const path = require("path");

const envPath =
  process.env.NODE_ENV === "production" ? "" : "_" + process.env.NODE_ENV;
const configPathFile = path.join(
  process.cwd(),
  "config_transitions" + envPath + ".json"
);

try {
  const data = fs.readFileSync(configPathFile, { encoding: "utf8" });
  const runtimeConfig = JSON.parse(data);

  nextConfig.publicRuntimeConfig = {
    RUNTIME_AKAMAY_URL: runtimeConfig.AKAMAY_PATH,
  };
  nextConfig.serverRuntimeConfig = {
    RUNTIME_GRAPHQL_URL: runtimeConfig.GRAPHQL_URL,
  };
} catch (err) {
  console.error("cannot read config " + configPathFile);
} finally {
  module.exports = nextConfig;
}
