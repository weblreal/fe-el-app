import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Components
import Sitemap from "../../widgets/Sitemap";

export default {
  title: "Widgets/Sitemap",
  component: Sitemap,
  argTypes: {},
} as ComponentMeta<typeof Sitemap>;

const Template: ComponentStory<typeof Sitemap> = (args) => {
  return <Sitemap {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  linkList: [
    {
      title: "Brands",
      links: [
        { label: "Eyewear", url: "#" },
        { label: "Eyecare", url: "#" },
        { label: "Direct to consumers", url: "#" },
      ],
    },
    {
      title: "Governance",
      links: [
        { label: "Overview", url: "#" },
        { label: "Boards of directors", url: "#" },
        { label: "Publications", url: "#" },
        { label: "Ethics and compliance", url: "#" },
      ],
    },
  ],
};
