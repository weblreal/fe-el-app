import { ComponentMeta, ComponentStory } from "@storybook/react";
import ConformityDeclaration from "../../widgets/ConformityDeclaration";

export default {
  title: " Widgets/ConformityDecleration",
  component: ConformityDeclaration,
  argTypes: {},
} as ComponentMeta<typeof ConformityDeclaration>;

const Template: ComponentStory<typeof ConformityDeclaration> = (args) => {
  return <ConformityDeclaration {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  paragraph:
    "The Conformity Declaration specifies our product compliance with the applicable EU laws. You may download the Conformity Declaration by entering the Universal Product Code or Eyewear Model.",
  options: [
    {
      id: "",
      label: "Universal Product Code (UPC)",
      tooltipDescription: "",
      tooltipPicture: "",
      tooltipTitle: "",
    },
    {
      id: "",
      label: "Eyewear Model",
      tooltipDescription: "",
      tooltipPicture: "",
      tooltipTitle: "",
    },
  ],
};
