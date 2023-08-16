import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Components
import PressRelease from "../../components/PressRelease/PressRelease";

export default {
  title: "Components/PressRelease",
  component: PressRelease,
  argTypes: {},
} as ComponentMeta<typeof PressRelease>;

const Template: ComponentStory<typeof PressRelease> = (args) => {
  return <PressRelease {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  title: "Sample document with one category of attachments",
  tag: "Executive Corporate",
  date: "15 Feb 2023",
  longText: "",
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
      {
        label: "2.pdf",
        size: 351161,
        url: "https://preview-stageintessilorluxottica.luxgroup.net/caas/v1/media/1720/data/download/29c39f28649ce76f6f85deffd7ae8f2f.pdf",
        category: "<div><p>REPORTS</p></div>",
      },
      {
        label: "3.pdf",
        size: 165577,
        url: "https://preview-stageintessilorluxottica.luxgroup.net/caas/v1/media/1722/data/download/a57628ba105692d23b4764c58fd81202.pdf",
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
    {
      label: "2.pdf",
      size: 351161,
      url: "https://preview-stageintessilorluxottica.luxgroup.net/caas/v1/media/1720/data/download/29c39f28649ce76f6f85deffd7ae8f2f.pdf",
      category: "<div><p>REPORTS</p></div>",
    },
    {
      label: "3.pdf",
      size: 165577,
      url: "https://preview-stageintessilorluxottica.luxgroup.net/caas/v1/media/1722/data/download/a57628ba105692d23b4764c58fd81202.pdf",
      category: "<div><p>REPORTS</p></div>",
    },
  ],
};
