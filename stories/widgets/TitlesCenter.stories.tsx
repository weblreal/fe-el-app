import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Components
import TitlesCenter from "../../widgets/TitlesCenter";
import TitlesColumn from "../../widgets/TitlesColumn";
import TitlesCenterAlign from "../../widgets/TitlesCenterAlign";

export default {
  title: "Widgets/TitlesCenter",
  component: TitlesCenter,
  argTypes: {},
} as ComponentMeta<typeof TitlesCenter>;

const Template: ComponentStory<typeof TitlesCenter> = (args) => {
  return <TitlesCenter {...args} />;
};

const Template2: ComponentStory<typeof TitlesColumn> = (args) => {
  return <TitlesColumn {...args} />;
};

const Template3: ComponentStory<typeof TitlesCenterAlign> = (args) => {
  return <TitlesCenterAlign {...args} />;
};

export const Center = Template.bind({});
Center.args = {
  title: "EssilorLuxottica is home to the most loved and widely-recognized vision care and eyewear brands in the world.",
  longText: "With a portfolio of proprietary and licensed brands that cover a wide variety of market segments, we tap into the needs and desires of consumers, innovate on everything from design to service, and ultimately deliver products and experiences that stand out in the industry.",
};

export const Column = Template2.bind({});
Column.args = {
  title: "EssilorLuxottica is home to the most loved and widely-recognized vision care and eyewear brands in the world.",
  longText: "With a portfolio of proprietary and licensed brands that cover a wide variety of market segments, we tap into the needs and desires of consumers, innovate on everything from design to service, and ultimately deliver products and experiences that stand out in the industry.",
};

export const CenterAlign = Template3.bind({});
CenterAlign.args = {
  title: "EssilorLuxottica is home to the most loved and widely-recognized vision care and eyewear brands in the world.",
  longText: "With a portfolio of proprietary and licensed brands that cover a wide variety of market segments, we tap into the needs and desires of consumers, innovate on everything from design to service, and ultimately deliver products and experiences that stand out in the industry.",
};