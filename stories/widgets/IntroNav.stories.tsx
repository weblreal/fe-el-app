import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Components
import IntroNav from "../../widgets/IntroNav";

export default {
  title: "Widgets/IntroNav",
  component: IntroNav,
  argTypes: {},
} as ComponentMeta<typeof IntroNav>;

const Template: ComponentStory<typeof IntroNav> = (args) => {
  return <IntroNav {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  title: "Brands",
  longText: "Enabling people everywhere to be the best version of themselves",
  preTitle: "Quick links",
  backgroundImage: "/Images/01-mission.jpg",
  cta: [
    {
      label: "Lens technologies",
      url: "#",
    },
    {
      label: "Eyewear brands",
      url: "#",
    },
    {
      label: "Direct to consumer",
      url: "#",
    },
  ]
};
