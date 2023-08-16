import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Components
import NumberCard from "../../components/NumberCard/NumberCard";

export default {
  title: "Components/NumberCard",
  component: NumberCard,
  argTypes: {},
} as ComponentMeta<typeof NumberCard>;

const Template: ComponentStory<typeof NumberCard> = (args) => {
  return <NumberCard {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  header: "180.000+",
  longText: "EssilorLuxotticans",
  backgroundImage: "/Images/dummy4.jpg",
};
