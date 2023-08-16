import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Components
import Accordion from "../../components/Accordion/Accordion";

export default {
  title: "Components/Accordion",
  component: Accordion,
  argTypes: {},
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = (args) => {
  return <Accordion {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  header: "This is a header",
  children: <h1>This is the Content</h1>,
};
