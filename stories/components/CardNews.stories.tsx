import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Components
import CardNews from "../../components/CardNews/CardNews";

export default {
  title: "Components/CardNews",
  component: CardNews,
  argTypes: {},
} as ComponentMeta<typeof CardNews>;

const Template: ComponentStory<typeof CardNews> = (args) => {
  return <CardNews {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  backgroundImage: "/images/dummy2.jpg",
  title: "Eizen Kids Lenses: Designed for how they see the new world",
  date: "03 Feb 2022",
  cta: {
    label: "Read more",
    url: "/",
  },
};
