import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Components
import TitleAndCTA from "../../widgets/TitleAndCTA";

export default {
  title: "Widgets/TitleAndCTA",
  component: TitleAndCTA,
  argTypes: {},
} as ComponentMeta<typeof TitleAndCTA>;

const Template: ComponentStory<typeof TitleAndCTA> = (args) => {
  return <TitleAndCTA {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  title: "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem",
  cta: {
      label: "READ MORE",
      url: "#"
  }
};
