import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Components
import Search from "../../widgets/Search";

export default {
  title: "Widgets/Search",
  component: Search,
  argTypes: {},
} as ComponentMeta<typeof Search>;

const Template: ComponentStory<typeof Search> = (args) => {
  return <Search {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  input: {
    label1: "Search",
    placeholder: "Search for topics, articles, data",
  },
  popular: {
    label: "Popular searches",
    items: [
      { label: "Brands", url: "#" },
      { label: "Sustainability", url: "#" },
      { label: "Corporate", url: "#" },
    ],
  },
  previous: {
    label: "Previous searches",
    searches: ["Ray-ban"],
  },
};
