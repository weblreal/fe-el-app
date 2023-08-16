import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Components
import GalleryItem from "../../components/Gallery/GalleryItem";

export default {
  title: "Components/GalleryItem",
  component: GalleryItem,
  argTypes: {},
} as ComponentMeta<typeof GalleryItem>;

const Template: ComponentStory<typeof GalleryItem> = (args) => {
  return <GalleryItem {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  item: {
    title: "Medianame",
    copyright: "Copyright: <EssilorLuxottica TBD>",
    media: "/Images/dummy3.jpg",
    endofrights:"End of rights: <date/”no limitation”>",
    mediaFile:{
     url: "/Images/dummy3.jpg",
     size: 100,
     type: "image/jpeg"
    }
  }
  };
