import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Components
import SearchPopular from "../../../components/Search/SearchPopular/SearchPopular";

export default {
  title: "Components/Search/SearchPopular",
  component: SearchPopular,
  argTypes: {},
} as ComponentMeta<typeof SearchPopular>;

const Template: ComponentStory<typeof SearchPopular> = (args) => {
  return <SearchPopular {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  label: "Popular searches",
};
