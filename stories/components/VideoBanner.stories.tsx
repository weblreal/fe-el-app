import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Components
import VideoBanner from "../../components/VideoBanner/VideoBanner";

export default {
  title: "Components/VideoBanner",
  component: VideoBanner,
  argTypes: {},
} as ComponentMeta<typeof VideoBanner>;

const Template: ComponentStory<typeof VideoBanner> = (args) => {
  return <VideoBanner {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  src: "https://player.vimeo.com/video/713315166",
};
