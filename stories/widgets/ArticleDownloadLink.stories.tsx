import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Components
import ArticleDownloadLink from "../../widgets/ArticleDownloadLink";

export default {
  title: "Widgets/ArticleDownloadLink",
  component: ArticleDownloadLink,
  argTypes: {},
} as ComponentMeta<typeof ArticleDownloadLink>;

const Template: ComponentStory<typeof ArticleDownloadLink> = (args) => {
  return <ArticleDownloadLink {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  paragraph: "Complementing the Code of Ethics, EssilorLuxottica also has a set of Anti-Bribery & Corruption principles and guidelines which provide more details regarding ethical business conduct and compliance. Committed to building a healthy business environment that is delivered with integrity, transparency and honesty, EssilorLuxottica adopts a policy of zero tolerance to corruption in all of its business activities across the Group.",
  picture:"/Images/dummy4.jpg",
  cta: {
    label: "Download the EssilorLuxottica Anti-bribery & corruption principles and guidelines",
    url: "el-en/",
  }
};
