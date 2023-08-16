import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Components
import SearchNoResults from "../../../components/Search/SearchNoResults/SearchNoResults";

export default {
  title: "Components/Search/SearchNoResults",
  component: SearchNoResults,
  argTypes: {},
} as ComponentMeta<typeof SearchNoResults>;

const Template: ComponentStory<typeof SearchNoResults> = (args) => {
  return <SearchNoResults {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  input: "XX"
};
