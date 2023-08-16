import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Components
import ImageBlock from "../../widgets/ImageBlock";

export default {
  title: "Widgets/ImageBlock",
  component: ImageBlock,
  argTypes: {},
} as ComponentMeta<typeof ImageBlock>;

const Template: ComponentStory<typeof ImageBlock> = (args) => {
  return <ImageBlock {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  backgroundImage: {
    desktop: "/Images/dummy3.jpg",
    mobile: "/Images/dummy3.jpg",
  },
};
