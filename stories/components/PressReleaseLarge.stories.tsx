import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Components
import PressReleaseLarge from "../../components/PressReleaseLarge/PressReleaseLarge";

export default {
  title: "Components/PressReleaseLarge",
  component: PressReleaseLarge,
  argTypes: {},
} as ComponentMeta<typeof PressReleaseLarge>;

const Template: ComponentStory<typeof PressReleaseLarge> = (args) => {
  return <PressReleaseLarge {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  title: "Sample document with one category of attachments",
  tag: "Executive Corporate",
  date: "15 Feb 2023",
  longText:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus.",
  cta: {
    label: "Read more",
    url: "el-en/",
  },
  files: [
    [
      {
        label: "1.pdf",
        size: 348285,
        url: "https://preview-stageintessilorluxottica.luxgroup.net/caas/v1/media/1724/data/download/43b4262be452d8aa7c31679bc92d7363.pdf",
        category: "<div><p>REPORTS</p></div>",
      },
    ],
  ],
  allFiles: [
    {
      label: "1.pdf",
      size: 348285,
      url: "https://preview-stageintessilorluxottica.luxgroup.net/caas/v1/media/1724/data/download/43b4262be452d8aa7c31679bc92d7363.pdf",
      category: "<div><p>REPORTS</p></div>",
    },
  ],
};
