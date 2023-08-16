import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Components
import NumbersModule from "../../widgets/NumbersModule";

export default {
  title: "Widgets/NumbersModule",
  component: NumbersModule,
  argTypes: {},
} as ComponentMeta<typeof NumbersModule>;

const Template: ComponentStory<typeof NumbersModule> = (args) => {
  return <NumbersModule {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  slide: [
    {
      backgroundImage: "/Images/dummy4.jpg",
      header: "+180.000",
      longText: "EssilorLuxotticans",
    },
    {
      backgroundImage: "/Images/dummy5.jpg",
      header: "+150",
      longText: "Countries",
    },
    {
      backgroundImage: "/Images/dummy6.jpg",
      header: "18.000",
      longText: "Stores",
    },
    {
      backgroundImage: "/Images/dummy7.jpg",
      header: "+21.5",
      longText: "Billion revenues",
    },
  ],
};
