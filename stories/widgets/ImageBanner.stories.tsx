import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Components
import ImageBanner from "../../widgets/ImageBanner";

export default {
  title: "Widgets/ImageBanner",
  component: ImageBanner,
  argTypes: {},
} as ComponentMeta<typeof ImageBanner>;

const Template: ComponentStory<typeof ImageBanner> = (args) => {
  return <ImageBanner {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  image1: "/Images/dummy.jpg",
  image2: "/Images/dummy.jpg",
  title1: "Mission",
  title2: "Overview",
  longText1:
    "We promise a brighter future for the hundreds of millions of people we serve globally.",
  longText2:
    "We bring together our world-leading expertise in lens and eyewear technology.",
  cta1: {
    label: "Explore our global priority",
    url: "#",
  },
  cta2: {
    label: "Explore our vision",
    url: "#",
  },
};
