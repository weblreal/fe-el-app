import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Components
import SingleLaunch from "../../widgets/SingleLaunch";

export default {
  title: "Widgets/SingleLaunch",
  component: SingleLaunch,
  argTypes: {},
} as ComponentMeta<typeof SingleLaunch>;

const Template: ComponentStory<typeof SingleLaunch> = (args) => {
  return <SingleLaunch {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  title: "",
  description: "",
  cta: [],
};
