import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Gallery from "../../widgets/Gallery";


export default {
  title: "Widgets/Gallery",
  component: Gallery,
  argTypes: {},
} as ComponentMeta<typeof Gallery>;

const Template: ComponentStory<typeof Gallery> = (args) => {
  return <Gallery {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  gallerySection:[{
    title: "Offices",
    galleryItems: [
      {
        title: "Medianame",
        copyright: "Copyright: <EssilorLuxottica TBD>",
        media: "/Images/dummy3.jpg",
        endofrights:"End of rights: <date/”no limitation”>",
        mediaFile:{
          url: "/Images/dummy3.jpg",
          size: 100,
          type: "image/jpeg"
         }
      },
      {
        title: "Medianame",
        copyright: "Copyright: <EssilorLuxottica TBD>",
        media: "/Images/dummy3.jpg",
        endofrights:"End of rights: <date/”no limitation”>",
        mediaFile:{
          url: "/Images/dummy3.jpg",
          size: 100,
          type: "image/jpeg"
         }
      },
      {
        title: "Medianame",
        copyright: "Copyright: <EssilorLuxottica TBD>",
        media: "/Images/dummy3.jpg",
        endofrights:"End of rights: <date/”no limitation”>",
        mediaFile:{
          url: "/Images/dummy3.jpg",
          size: 100,
          type: "image/jpeg"
         }
      },
      {
        title: "Medianame",
        copyright: "Copyright: <EssilorLuxottica TBD>",
        media: "/Images/dummy3.jpg",
        endofrights:"End of rights: <date/”no limitation”>",
        mediaFile:{
          url: "/Images/dummy3.jpg",
          size: 100,
          type: "image/jpeg"
         }
      },
      {
        title: "Medianame",
        copyright: "Copyright: <EssilorLuxottica TBD>",
        media: "/Images/M_Overview.png",
        endofrights:"End of rights: <date/”no limitation”>",
        mediaFile:{
          url: "/Images/M_Overview.png",
          size: 100,
          type: "image/png"
         }
      },
    ]},
    {
      title: "Brands",
      galleryItems: [
        {
          title: "Medianame",
          copyright: "Copyright: <EssilorLuxottica TBD>",
          media: "/Images/dummy3.jpg",
          endofrights:"End of rights: <date/”no limitation”>",
          mediaFile:{
            url: "/Images/dummy3.jpg",
            size: 100,
            type: "image/jpeg"
           }
        },
        {
          title: "Medianame",
          copyright: "Copyright: <EssilorLuxottica TBD>",
          media: "/Images/dummy3.jpg",
          endofrights:"End of rights: <date/”no limitation”>",
          mediaFile:{
            url: "/Images/dummy3.jpg",
            size: 100,
            type: "image/jpeg"
           }
        },
        {
          title: "Medianame",
          copyright: "Copyright: <EssilorLuxottica TBD>",
          media: "/Images/dummy3.jpg",
          endofrights:"End of rights: <date/”no limitation”>",
          mediaFile:{
            url: "/Images/dummy3.jpg",
            size: 100,
            type: "image/jpeg"
           }
        },
        {
          title: "Medianame",
          copyright: "Copyright: <EssilorLuxottica TBD>",
          media: "/Images/dummy3.jpg",
          endofrights:"End of rights: <date/”no limitation”>",
          mediaFile:{
            url: "/Images/dummy3.jpg",
            size: 100,
            type: "image/jpeg"
           }
        },
        {
          title: "Medianame",
          copyright: "Copyright: <EssilorLuxottica TBD>",
          media: "/Images/dummy3.jpg",
          endofrights:"End of rights: <date/”no limitation”>",
          mediaFile:{
            url: "/Images/dummy3.jpg",
            size: 100,
            type: "image/jpeg"
           }
        },
      ]
    }
  ]
};
