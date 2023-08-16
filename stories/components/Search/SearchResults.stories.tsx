import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Components
import SearchResults from "../../../components/Search/SearchResults/SearchResults";

export default {
  title: "Components/Search/SearchResults",
  component: SearchResults,
  argTypes: {},
} as ComponentMeta<typeof SearchResults>;

const Template: ComponentStory<typeof SearchResults> = (args) => {
  return <SearchResults {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  results: [
    {
      cta: {
        label: "Ray-Ban Authentic: the “Perfect Match” by EssilorLuxottica",
        url: "#",
      },
    },
    {
      cta: {
        label: "Ray-Ban Authentic: the “Perfect Match” by EssilorLuxottica",
        url: "#",
      },
    },
    {
      cta: {
        label: "Ray-Ban Authentic: the “Perfect Match” by EssilorLuxottica",
        url: "#",
      },
    },
  ],
};
