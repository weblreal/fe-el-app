import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Components
import ContactUs from "../../widgets/ContactUs";

export default {
  title: "Widgets/ContactUs",
  component: ContactUs,
  argTypes: {},
} as ComponentMeta<typeof ContactUs>;

const Template: ComponentStory<typeof ContactUs> = (args) => {
  return <ContactUs {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  header: "",
  descriptions: "",
  requiredField: "",
  forms: [
    {
      label: "",
      placeholder: "",
      required: "",
      type: "",
    },
  ],
  recipient: "",
  disclaimer: "",
  submit: "",
};
