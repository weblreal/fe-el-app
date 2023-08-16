import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Components
import DiscoverPortfolio from "../../widgets/DiscoverPortfolio";

export default {
  title: "Widgets/DiscoverPortfolio",
  component: DiscoverPortfolio,
  argTypes: {},
} as ComponentMeta<typeof DiscoverPortfolio>;

const Template: ComponentStory<typeof DiscoverPortfolio> = (args) => {
  return <DiscoverPortfolio {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  header: "Continue discovering our brands portfolio",
  content: [
    {
      bgImage: ["/Images/dummy.jpg"],
      ctaText: "Discover",
      link: "#",
      title: "Eyewear brands",
    },
    {
      bgImage: ["/Images/dummy2.jpg"],
      ctaText: "Discover",
      link: "#",
      title: "Direct to consumer",
    },
  ]
};
