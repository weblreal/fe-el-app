import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Components
import NotFound from "../../widgets/NotFound";

export default {
  title: "Widgets/NotFound",
  component: NotFound,
  argTypes: {},
} as ComponentMeta<typeof NotFound>;

const Template: ComponentStory<typeof NotFound> = (args) => {
  return <NotFound {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
