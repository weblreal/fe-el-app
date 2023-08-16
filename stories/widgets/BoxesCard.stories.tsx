import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Components
import BoxesCard from "../../widgets/BoxesCard";

export default {
  title: "Widgets/BoxesCard",
  component: BoxesCard,
  argTypes: {},
} as ComponentMeta<typeof BoxesCard>;

const Template: ComponentStory<typeof BoxesCard> = (args) => {
  return <BoxesCard {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  headerTitle: "Eyes on the Planet",
  left: [
    {
      title: "Eyes on Carbon",
      cardBgColor: "#acd8aacc",
      cardTitleColor: "#000000",
      cta: [
        {
          label: "Know more",
          url: "en/sustainability/eyes-on-carbon",
          isExternal: false,
        },
      ],
      description:
        "<div><p>Learn more about our commitment to addressing climate change and preserving the environment.</p></div>",
    },
    {
      title: "Eyes on Inclusion",
      cardBgColor: "#f3777acc",
      cardTitleColor: "#000000",
      cta: [
        {
          label: "Know more",
          url: "en/sustainability/eyes-on-inclusion",
          isExternal: false,
        },
      ],
      description:
        "<div><p>Learn about how we are committed to providing equal opportunity to all of our people.</p></div>",
    },
    {
      title: "Eyes on Ethics",
      cardBgColor: "#999999",
      cardTitleColor: "#000000",
      cta: [
        {
          label: "Know more",
          url: "en/sustainability/eyes-on-ethics",
          isExternal: false,
        },
      ],
      description:
        "<div><p>Learn more about our ethical approach. We are not just in this to do business, we are in this to do business in a way that benefits those around us.</p></div>",
    },
  ],
  right: [
    {
      title: "Eyes on Circularity",
      cardBgColor: "#8ec5e2cc",
      cardTitleColor: "#000000",
      cta: [
        {
          label: "Know more",
          url: "en/sustainability/eyes-on-circularity",
          isExternal: false,
        },
      ],
      description:
        "<div><p>Learn more about why we see circularity as crucial to safeguard not just our business but our planet too.</p></div>",
    },
    {
      title: "Eyes on World Sight",
      cardBgColor: "#faf06acc",
      cardTitleColor: "#000000",
      cta: [
        {
          label: "Know more",
          url: "en/sustainability/eyes-on-world-sight",
          isExternal: false,
        },
      ],
      description:
        "<div><p>Learn more about why good vision is a basic human right and a way to help people lead their best life possible.</p></div>",
    },
  ],
  mobile: [
    {
      title: "Eyes on Carbon",
      cardBgColor: "#acd8aacc",
      cardTitleColor: "#000000",
      cta: [
        {
          label: "Know more",
          url: "en/sustainability/eyes-on-carbon",
          isExternal: false,
        },
      ],
      description:
        "<div><p>Learn more about our commitment to addressing climate change and preserving the environment.</p></div>",
    },
    {
      title: "Eyes on Circularity",
      cardBgColor: "#8ec5e2cc",
      cardTitleColor: "#000000",
      cta: [
        {
          label: "Know more",
          url: "en/sustainability/eyes-on-circularity",
          isExternal: false,
        },
      ],
      description:
        "<div><p>Learn more about why we see circularity as crucial to safeguard not just our business but our planet too.</p></div>",
    },
    {
      title: "Eyes on Inclusion",
      cardBgColor: "#f3777acc",
      cardTitleColor: "#000000",
      cta: [
        {
          label: "Know more",
          url: "en/sustainability/eyes-on-inclusion",
          isExternal: false,
        },
      ],
      description:
        "<div><p>Learn about how we are committed to providing equal opportunity to all of our people.</p></div>",
    },
    {
      title: "Eyes on World Sight",
      cardBgColor: "#faf06acc",
      cardTitleColor: "#000000",
      cta: [
        {
          label: "Know more",
          url: "en/sustainability/eyes-on-world-sight",
          isExternal: false,
        },
      ],
      description:
        "<div><p>Learn more about why good vision is a basic human right and a way to help people lead their best life possible.</p></div>",
    },
    {
      title: "Eyes on Ethics",
      cardBgColor: "#999999",
      cardTitleColor: "#000000",
      cta: [
        {
          label: "Know more",
          url: "en/sustainability/eyes-on-ethics",
          isExternal: false,
        },
      ],
      description:
        "<div><p>Learn more about our ethical approach. We are not just in this to do business, we are in this to do business in a way that benefits those around us.</p></div>",
    },
  ],
};
