import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Components
import Columns3 from "../../widgets/Columns3";

export default {
  title: "Widgets/Columns3",
  component: Columns3,
  argTypes: {},
} as ComponentMeta<typeof Columns3>;

const Template: ComponentStory<typeof Columns3> = (args) => {
  return <Columns3 {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  columns: [
    {paragraph: "At the very start of the pandemic, we immediately reinforced hygiene practices, health check protocols and social distances across our global network of offices, stores, factories, labs and distribution centers. Beyond that, we committed a 160 million Euro fund to support employees and their families in need, including emergency pay schemes for our most vulnerable employee groups."},
    {paragraph: "We work with partners such as ESAT (Company and Service for Assistance through Work, ex-CAT) or EA (Adapted Companies) who provide additional workplace support to those living with a disability who are unable to work in a traditional environment."},
    {paragraph: "We work with partners such as ESAT (Company and Service for Assistance through Work, ex-CAT) or EA (Adapted Companies) who provide additional workplace support to those living with a disability who are unable to work in a traditional environment."}
  ]
};
