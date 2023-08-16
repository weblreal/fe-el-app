import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Components
import Tab from "../../../components/Tab/Tab";
import TabContent from "../../../components/Tab/TabContent";

export default {
  title: "Components/Tab",
  component: Tab,
  argTypes: {},
} as ComponentMeta<typeof Tab>;

const Template: ComponentStory<typeof Tab> = (args) => {
  return <Tab {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  children: (
    <TabContent label="First Tab">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis ducimus
      laboriosam totam blanditiis voluptatum assumenda rem optio placeat
      reiciendis, cumque adipisci enim voluptate explicabo nisi magni impedit
      perferendis! Nisi, fuga.
    </TabContent>
  ),
};
