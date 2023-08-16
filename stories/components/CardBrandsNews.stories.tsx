import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Components
import CardBrandsNews from "../../components/CardBrandsNews/CardBrandsNews";
import CardBrandsBigNews from "../../components/CardBrandsNews/CardBrandsBigNews";

export default {
  title: "Components/CardBrandsNews",
  component: CardBrandsNews,
  argTypes: {},
} as ComponentMeta<typeof CardBrandsNews>;

const Template: ComponentStory<typeof CardBrandsNews> = (args) => {
  return <CardBrandsNews {...args} />;
};

const Template2: ComponentStory<typeof CardBrandsBigNews> = (args) => {
  return <CardBrandsBigNews {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  backgroundImage: "/images/dummy2.jpg",
  category: "BRANDS",
  title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  date: "04 Apr 2022",
  cta: {
    label: "Read more",
    url: "/",
  },
};

export const BigNews = Template2.bind({});
BigNews.args = {
  backgroundImage: "/images/dummy2.jpg",
  category: "BRANDS,PRODUCTS",
  title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  date: "04 Apr 2022",
  cta: {
    label: "Read more",
    url: "/",
  },
};
