import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Components
import HeroImageFullscreen from "../../widgets/HeroImageFullscreen";

export default {
  title: "Widgets/HeroImageFullscreen",
  component: HeroImageFullscreen,
  argTypes: {},
} as ComponentMeta<typeof HeroImageFullscreen>;

const Template: ComponentStory<typeof HeroImageFullscreen> = (args) => {
  return <HeroImageFullscreen {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  header: "See more. Be more.",
  backgroundImage: {
    desktop: "/Images/dummy2.jpg",
  },
};
