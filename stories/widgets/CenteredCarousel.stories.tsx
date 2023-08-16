import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Components
import CenteredCarousel from "../../widgets/CenteredCarousel";

export default {
  title: "Widgets/CenteredCarousel",
  component: CenteredCarousel,
  argTypes: {},
} as ComponentMeta<typeof CenteredCarousel>;

const Template: ComponentStory<typeof CenteredCarousel> = (args) => {
  return <CenteredCarousel {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  backgroundImage: [
    // "/Images/dummy3.jpg",
    // "/Images/dummy2.jpg",
    // "/Images/dummy3.jpg",
  ],
  backgroundVideo: [
    "https://vimeo.com/763421056/666af388d5",
    "https://vimeo.com/763422022/893bc1b8a7",
    "https://vimeo.com/763422443/2d5c1c75ea",
  ],
};
