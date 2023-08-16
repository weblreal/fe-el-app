import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Components
import ClosedBackgroundWParagraph from "../../widgets/ClosedBackgroundWParagraph";

export default {
  title: "Widgets/ClosedBackgroundWParagraph",
  component: ClosedBackgroundWParagraph,
  argTypes: {},
} as ComponentMeta<typeof ClosedBackgroundWParagraph>;

const Template: ComponentStory<typeof ClosedBackgroundWParagraph> = (args) => {
  return <ClosedBackgroundWParagraph {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  title: "Hello governance",
  title2: "hello governance 2",
  longText1: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus, cumque? Ducimus illo magni expedita, reprehenderit natus quis earum quaerat, ullam eaque rerum aliquid omnis, dolorem cupiditate accusantium eligendi dicta vero!",
  longText2: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus, cumque? Ducimus illo magni expedita, reprehenderit natus quis earum quaerat, ullam eaque rerum aliquid omnis, dolorem cupiditate accusantium eligendi dicta vero!",
  background: "/Images/dummy3.jpg",
  cta: {
    label: "Read More",
    url: "#"
  }
};
