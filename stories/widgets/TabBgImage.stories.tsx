import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Components
import TabBgImage from "../../widgets/TabBgImage";

export default {
  title: "Widgets/TabBgImage",
  component: TabBgImage,
  argTypes: {},
} as ComponentMeta<typeof TabBgImage>;

const Template: ComponentStory<typeof TabBgImage> = (args) => {
  return <TabBgImage {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  tabDetails: [
    {
      tabName: "Electricity",
      textDetails1:
        "<div><p>We have a vision: to produce and procure renewable electricity wherever we can – and for our global electricity mix to eventually be 100% renewable.</p><p>We create our own renewable energy – by investing in solar and biomass heating systems, and in photovoltaic installations for</p><p>electricity. As of  the end of December 2021, these investments had an annual output of 6,300 MWh  of renewable electricity.  Starting from 2023, all the photovoltaic systems in Italy are estimated to produce 8,700 MWh of electricity from renewable sources and avoid 4,000 tCO2e per year.</p></div>",
      textDetails2:
        "<div><p>Across our Italian manufacturing sites, several of these initiatives have enabled us to significantly reduce our reliance on fossil fuels and consequently reduce our greenhouse gas emissions. As a sign of our long-term commitment in this area, we signed a Corporate PPA agreement with ERG Spa for the supply of electricity from renewable sources in Italy between 2023-2034. </p><p><br/></p><p>We also increased the share of renewables in our energy mix by working with the main providers of green energy.</p></div>",
    },
    {
      tabName: "Efficiency",
      textDetails1:
        "<div><p>We are investing in new process designs and guaranteeing a frequent update of equipment and technologies. For example, the introduction of the eco-sustainable electroplating technique (an integrated water treatment and recycling system) in our main manufacturing</p></div>",
      textDetails2:
        "<div><p>sites of metal frames and components in China and Italy allowed us to significantly reduce our annual water and energy consumption.</p></div>",
    },
    {
      tabName: "In-setting",
      textDetails1:
        "<div><p>We are also investing in initiatives to protect and restore natural ecosystems, as well as promoting the well-being of local communities. In December 2020 we launched a major forest restoration project of 30 hectares in the foothills of the Dolomites (UNESCO World Heritage Site) - situated beside our main production plant in Agordo, Italy. Through this project, we have so far safeguarded 15,000 trees and planted an additional 2,000 new ones to increase the forest’s health and biodiversity.</p></div>",
      textDetails2:
        "<div><p>Since 2022, we also support a reforestation project in the rural county of Le'an within the Jiangxi province in China. The ‘Jinzhu’ project contributes to mitigating climate change by allowing for the capture and avoidance of what will be a total of 2,600,406 tons CO2eq over its 30- year lifespan. It also protects the ecosystem and supports the agroforestry development of the area and the creation of new jobs.</p></div>",
    },
  ],
  bgImage:
    "https://preview-stageuatessilorluxottica.luxgroup.net/caas/v1/media/96358/data/picture/0d8af42c1914131391130157ceb06236.jpg",
};
