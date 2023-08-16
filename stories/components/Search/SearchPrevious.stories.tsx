import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Components
import SearchPrevious from "../../../components/Search/SearchPrevious/SearchPrevious";

export default {
  title: "Components/Search/SearchPrevious",
  component: SearchPrevious,
  argTypes: {},
} as ComponentMeta<typeof SearchPrevious>;

const Template: ComponentStory<typeof SearchPrevious> = (args) => {
  return <SearchPrevious {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  label: "Previous searches",
};
