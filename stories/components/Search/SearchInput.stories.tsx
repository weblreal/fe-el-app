import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Components
import SearchInput from "../../../components/Search/SearchInput/SearchInput";

export default {
  title: "Components/Search/SearchInput",
  component: SearchInput,
  argTypes: {},
} as ComponentMeta<typeof SearchInput>;

const Template: ComponentStory<typeof SearchInput> = (args) => {
  return <SearchInput {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  label1: "Search",
  placeholder: "Search for topics, articles, data",
};
