import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Components
import SuperHeader from "../../components/SuperHeader/SuperHeader";

export default {
  title: "Components/SuperHeader",
  component: SuperHeader,
  argTypes: {},
} as ComponentMeta<typeof SuperHeader>;

const Template: ComponentStory<typeof SuperHeader> = (args) => {
  return <SuperHeader {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
