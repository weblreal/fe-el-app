import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Components
import Footer from "../../widgets/Footer";

export default {
  title: "Widgets/Footer",
  component: Footer,
  argTypes: {},
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => {
  return <Footer {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  footerData: {
    links: [
      {
        label: "Home",
        url: "#",
      },
      {
        label: "About",
        url: "#",
      },
      {
        label: "Brands",
        url: "#",
      },
      {
        label: "Governance",
        url: "#",
      },
      {
        label: "Commitments",
        url: "#",
      },
      {
        label: "Investors",
        url: "#",
      },
      {
        label: "Careers",
        url: "#",
      },
      {
        label: "Newsroom",
        url: "#",
      },
    ],
    externalLinks: [
      {
        label: "Essilor.com",
        url: "#",
      },
      {
        label: "Luxottica.com",
        url: "#",
      },
    ],
  },
  socialData: [
    {
      icon: "linkedin",
      url: "#",
    },
    {
      icon: "facebook",
      url: "#",
    },
    {
      icon: "twitter",
      url: "#",
    },
    {
      icon: "instagram",
      url: "#",
    },
  ],
  subFooterData: {
    copyright: "&copy; EssilorLuxottica 2022",
    links: [
      {
        label: "Contacts",
        url: "#",
      },
      {
        label: "Legal Notice",
        url: "#",
      },
      {
        label: "Privacy Notice",
        url: "#",
      },
      {
        label: "Cookie policy",
        url: "#",
      },
      {
        label: "Sitemap",
        url: "#",
      },
      {
        label: "Accessibility",
        url: "#",
      },
    ],
  },
};
