import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Components
import AccordionLarge from "../../components/AccordionLarge/AccordionLarge";

export default {
  title: "Components/AccordionLarge",
  component: AccordionLarge,
  argTypes: {},
} as ComponentMeta<typeof AccordionLarge>;

const Template: ComponentStory<typeof AccordionLarge> = (args) => {
  return <AccordionLarge {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  header: "This is a header",
  children: <h1>This is the Content</h1>,
};
