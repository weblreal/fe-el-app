import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Components
import Tooltip from "../../components/TooltipConformity/TooltipConformity";

export default {
  title: "Components/Tooltip",
  component: Tooltip,
  argTypes: {},
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = (args) => {
  return <Tooltip {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  title: "WHERE IS THE CODE FOR THE EYEWEAR MODEL?",
  description: "You’ll find the code for the EYEWEAR MODEL on the box.",
  image: "Images/upc-img.png",
};
