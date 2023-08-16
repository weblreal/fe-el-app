import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Icon from "../../components/UI/Icon/Icon";

export default {
  title: "UI/Icon",
  component: Icon,
  argTypes: {},
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const ArrowDown = Template.bind({});
ArrowDown.args = {
  size: 80,
  type: "arrow-down",
};

export const EssilorDot = Template.bind({});
EssilorDot.args = {
  size: 80,
  type: "essilor-dot",
};

export const AngleDown = Template.bind({});
AngleDown.args = {
  size: 80,
  type: "angle-down",
};

export const AngleUp = Template.bind({});
AngleUp.args = {
  size: 80,
  type: "angle-up",
};

export const AngleLeft = Template.bind({});
AngleLeft.args = {
  size: 80,
  type: "angle-left",
};

export const AngleRight = Template.bind({});
AngleRight.args = {
  size: 80,
  type: "angle-right",
};

export const Calendar = Template.bind({});
Calendar.args = {
  size: 80,
  type: "calendar",
};

export const Check = Template.bind({});
Check.args = {
  size: 80,
  type: "check",
};

export const Clock = Template.bind({});
Clock.args = {
  size: 80,
  type: "clock",
};

export const Close = Template.bind({});
Close.args = {
  size: 80,
  type: "close",
};

export const Copy = Template.bind({});
Copy.args = {
  size: 80,
  type: "copy",
};

export const Download = Template.bind({});
Download.args = {
  size: 80,
  type: "download",
};

export const Alert = Template.bind({});
Alert.args = {
  size: 80,
  type: "alert",
};

export const File = Template.bind({});
File.args = {
  size: 80,
  type: "file",
};

export const Filter = Template.bind({});
Filter.args = {
  size: 80,
  type: "filter",
};

export const Player = Template.bind({});
Player.args = {
  size: 80,
  type: "player",
};

export const Search = Template.bind({});
Search.args = {
  size: 80,
  type: "search",
};

export const Upload = Template.bind({});
Upload.args = {
  size: 80,
  type: "upload",
};

export const ExternalLink = Template.bind({});
ExternalLink.args = {
  size: 80,
  type: "external-link",
};

export const CheckboxChecked = Template.bind({});
CheckboxChecked.args = {
  size: 80,
  type: "checkboxchecked",
};

export const CheckboxEmpty = Template.bind({});
CheckboxEmpty.args = {
  size: 80,
  type: "checkboxempty",
};

export const Infotip = Template.bind({});
Infotip.args = {
  size: 80,
  type: "infotip",
};
