import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Components
import Article from "../../widgets/Article";

export default {
  title: "Widgets/Article",
  component: Article,
  argTypes: {},
} as ComponentMeta<typeof Article>;

const Template: ComponentStory<typeof Article> = (args) => {
  return <Article {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  title:"Ray-Ban Stories",
  paragraph: "EssilorLuxottica’s innovation in lens technology has led to the creation of lens brands that regularly rank among the highest in terms of consumer satisfaction. The company has also successfully partnered with leading companies such as Nikon to distribute specific technologies that enable each consumer's needs to be fully addressed.  These brands make an important contribution to educating consumers about the importance of eye care.\n\nEach solution created by the company, whether designed to correct vision, protect the eyes or improve comfort and performance, is a result of years of R&D with a single goal: how can we improve the lives of our consumers? We carry this responsibility with us always and continue to answer the question with the introduction of groundbreaking ophthalmic and sun lens innovations.",
};
