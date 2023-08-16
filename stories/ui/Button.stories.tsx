import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "../../components/UI/Button/Button";

export default {
  title: "UI/Button",
  component: Button,
  argTypes: {},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "Button",
  variant: "primary",
};
Primary.parameters = {
  controls: { include: ["children"] },
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: "Button",
  variant: "secondary",
};
Secondary.parameters = {
  controls: { include: ["children"] },
};

export const Link = Template.bind({});
Link.args = {
  children: "Button",
  variant: "link",
};
Link.parameters = {
  controls: { include: ["children"] },
};
