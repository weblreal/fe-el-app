import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Components
import CustomerCare from "../../widgets/CustomerCare";

export default {
  title: "Widgets/CustomerCare",
  component: CustomerCare,
  argTypes: {},
} as ComponentMeta<typeof CustomerCare>;

const Template: ComponentStory<typeof CustomerCare> = (args) => {
  return <CustomerCare {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  "header": "How to take advantage of the warranty or purchase replacement parts",
  "stepLabel": "Step 1: Select the brand​",
  "stepLabel2": "<div><p>Step 2: Select your country​</p></div>",
  "templateText": "<div><p>For warranty, repairs or to purchase replacement parts, please contact us here: {{PARAMETER_1}}.</p><p><br/></p><p>For defects on prescription lenses, we recommend that you contact the retailer from whom you made your purchase.</p><p><br/></p><p>For other requests, please contact us here: {{PARAMETER_2}} .</p></div>",
  "brandsSelection": [
      {
          "id": 0,
          "countries": [
              {
                  "label": "AMERICAN SAMOA",
                  "value": "AMERICAN SAMOA",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "AUSTRALIA",
                  "value": "AUSTRALIA",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": ""
              },
              {
                  "label": "AUSTRIA",
                  "value": "AUSTRIA",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "BELGIUM",
                  "value": "BELGIUM",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "BRAZIL",
                  "value": "BRAZIL",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "CANADA",
                  "value": "CANADA",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125170]"
              },
              {
                  "label": "CHINA",
                  "value": "CHINA",
                  "parameterOne": "Content[coremedia:///cap/content/125160]",
                  "parameterTwo": "Content[coremedia:///cap/content/125160]"
              },
              {
                  "label": "DENMARK",
                  "value": "DENMARK",
                  "parameterOne": "Content[coremedia:///cap/content/125182]",
                  "parameterTwo": "Content[coremedia:///cap/content/125174]"
              },
              {
                  "label": "FINLAND",
                  "value": "FINLAND",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "FRANCE",
                  "value": "FRANCE",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "GERMANY",
                  "value": "GERMANY",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "GUAM",
                  "value": "GUAM",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "HONG KONG",
                  "value": "HONG KONG",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "INDIA",
                  "value": "INDIA",
                  "parameterOne": "Content[coremedia:///cap/content/125162]",
                  "parameterTwo": "Content[coremedia:///cap/content/125162]"
              },
              {
                  "label": "INDONESIA",
                  "value": "INDONESIA",
                  "parameterOne": "Content[coremedia:///cap/content/125164]",
                  "parameterTwo": "Content[coremedia:///cap/content/125164]"
              },
              {
                  "label": "IRELAND",
                  "value": "IRELAND",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "ITALY",
                  "value": "ITALY",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "JAPAN",
                  "value": "JAPAN",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "LUXEMBOURG",
                  "value": "LUXEMBOURG",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "MALAYSIA",
                  "value": "MALAYSIA",
                  "parameterOne": "Content[coremedia:///cap/content/125168]",
                  "parameterTwo": "Content[coremedia:///cap/content/125168]"
              },
              {
                  "label": "NETHERLANDS",
                  "value": "NETHERLANDS",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "NORTHERN MARIANA ISLANDS",
                  "value": "NORTHERN MARIANA ISLANDS",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "OTHER COUNTRY",
                  "value": "OTHER COUNTRY",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "POLAND",
                  "value": "POLAND",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "PORTUGAL",
                  "value": "PORTUGAL",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "PUERTO RICO",
                  "value": "PUERTO RICO",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "SINGAPORE",
                  "value": "SINGAPORE",
                  "parameterOne": "Content[coremedia:///cap/content/125166]",
                  "parameterTwo": "Content[coremedia:///cap/content/125166]"
              },
              {
                  "label": "SPAIN",
                  "value": "SPAIN",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "SWEDEN",
                  "value": "SWEDEN",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "THAILAND",
                  "value": "THAILAND",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "UK",
                  "value": "UK",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "US",
                  "value": "US",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125170]"
              },
              {
                  "label": "US VIRGIN ISLANDS",
                  "value": "US VIRGIN ISLANDS",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              }
          ],
          "cta": [],
          "logo": "",
          "logoImage": [
              "https://preview-stageessilorluxottica.luxgroup.net/caas/v1/media/125192/data/picture/184a2d28553c2b50231eb421f7213e45.png"
          ]
      },
      {
          "id": 1,
          "countries": [
              {
                  "label": "AMERICAN SAMOA",
                  "value": "AMERICAN SAMOA",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "AUSTRALIA",
                  "value": "AUSTRALIA",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": ""
              },
              {
                  "label": "AUSTRIA",
                  "value": "AUSTRIA",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "BELGIUM",
                  "value": "BELGIUM",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "BRAZIL",
                  "value": "BRAZIL",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "CANADA",
                  "value": "CANADA",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125170]"
              },
              {
                  "label": "CHINA",
                  "value": "CHINA",
                  "parameterOne": "Content[coremedia:///cap/content/125160]",
                  "parameterTwo": "Content[coremedia:///cap/content/125160]"
              },
              {
                  "label": "DENMARK",
                  "value": "DENMARK",
                  "parameterOne": "Content[coremedia:///cap/content/125182]",
                  "parameterTwo": "Content[coremedia:///cap/content/125174]"
              },
              {
                  "label": "FINLAND",
                  "value": "FINLAND",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "FRANCE",
                  "value": "FRANCE",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "GERMANY",
                  "value": "GERMANY",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "GUAM",
                  "value": "GUAM",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "HONG KONG",
                  "value": "HONG KONG",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "INDIA",
                  "value": "INDIA",
                  "parameterOne": "Content[coremedia:///cap/content/125162]",
                  "parameterTwo": "Content[coremedia:///cap/content/125162]"
              },
              {
                  "label": "INDONESIA",
                  "value": "INDONESIA",
                  "parameterOne": "Content[coremedia:///cap/content/125164]",
                  "parameterTwo": "Content[coremedia:///cap/content/125164]"
              },
              {
                  "label": "IRELAND",
                  "value": "IRELAND",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "ITALY",
                  "value": "ITALY",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "JAPAN",
                  "value": "JAPAN",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "LUXEMBOURG",
                  "value": "LUXEMBOURG",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "MALAYSIA",
                  "value": "MALAYSIA",
                  "parameterOne": "Content[coremedia:///cap/content/125168]",
                  "parameterTwo": "Content[coremedia:///cap/content/125168]"
              },
              {
                  "label": "NETHERLANDS",
                  "value": "NETHERLANDS",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "NORTHERN MARIANA ISLANDS",
                  "value": "NORTHERN MARIANA ISLANDS",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "OTHER COUNTRY",
                  "value": "OTHER COUNTRY",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "POLAND",
                  "value": "POLAND",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "PORTUGAL",
                  "value": "PORTUGAL",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "PUERTO RICO",
                  "value": "PUERTO RICO",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "SINGAPORE",
                  "value": "SINGAPORE",
                  "parameterOne": "Content[coremedia:///cap/content/125166]",
                  "parameterTwo": "Content[coremedia:///cap/content/125166]"
              },
              {
                  "label": "SPAIN",
                  "value": "SPAIN",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "SWEDEN",
                  "value": "SWEDEN",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "THAILAND",
                  "value": "THAILAND",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "UK",
                  "value": "UK",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "US",
                  "value": "US",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125170]"
              },
              {
                  "label": "US VIRGIN ISLANDS",
                  "value": "US VIRGIN ISLANDS",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              }
          ],
          "cta": [],
          "logo": "",
          "logoImage": [
              "https://preview-stageessilorluxottica.luxgroup.net/caas/v1/media/124894/data/picture/b4da0a0f9d88746a1121a438225f34fe.png"
          ]
      },
      {
          "id": 2,
          "countries": [
              {
                  "label": "AMERICAN SAMOA",
                  "value": "AMERICAN SAMOA",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "AUSTRALIA",
                  "value": "AUSTRALIA",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": ""
              },
              {
                  "label": "AUSTRIA",
                  "value": "AUSTRIA",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "BELGIUM",
                  "value": "BELGIUM",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "BRAZIL",
                  "value": "BRAZIL",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "CANADA",
                  "value": "CANADA",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125170]"
              },
              {
                  "label": "CHINA",
                  "value": "CHINA",
                  "parameterOne": "Content[coremedia:///cap/content/125160]",
                  "parameterTwo": "Content[coremedia:///cap/content/125160]"
              },
              {
                  "label": "DENMARK",
                  "value": "DENMARK",
                  "parameterOne": "Content[coremedia:///cap/content/125182]",
                  "parameterTwo": "Content[coremedia:///cap/content/125174]"
              },
              {
                  "label": "FINLAND",
                  "value": "FINLAND",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "FRANCE",
                  "value": "FRANCE",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "GERMANY",
                  "value": "GERMANY",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "GUAM",
                  "value": "GUAM",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "HONG KONG",
                  "value": "HONG KONG",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "INDIA",
                  "value": "INDIA",
                  "parameterOne": "Content[coremedia:///cap/content/125162]",
                  "parameterTwo": "Content[coremedia:///cap/content/125162]"
              },
              {
                  "label": "INDONESIA",
                  "value": "INDONESIA",
                  "parameterOne": "Content[coremedia:///cap/content/125164]",
                  "parameterTwo": "Content[coremedia:///cap/content/125164]"
              },
              {
                  "label": "IRELAND",
                  "value": "IRELAND",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "ITALY",
                  "value": "ITALY",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "JAPAN",
                  "value": "JAPAN",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "LUXEMBOURG",
                  "value": "LUXEMBOURG",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "MALAYSIA",
                  "value": "MALAYSIA",
                  "parameterOne": "Content[coremedia:///cap/content/125168]",
                  "parameterTwo": "Content[coremedia:///cap/content/125168]"
              },
              {
                  "label": "NETHERLANDS",
                  "value": "NETHERLANDS",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "NORTHERN MARIANA ISLANDS",
                  "value": "NORTHERN MARIANA ISLANDS",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "OTHER COUNTRY",
                  "value": "OTHER COUNTRY",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "POLAND",
                  "value": "POLAND",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "PORTUGAL",
                  "value": "PORTUGAL",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "PUERTO RICO",
                  "value": "PUERTO RICO",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "SINGAPORE",
                  "value": "SINGAPORE",
                  "parameterOne": "Content[coremedia:///cap/content/125166]",
                  "parameterTwo": "Content[coremedia:///cap/content/125166]"
              },
              {
                  "label": "SPAIN",
                  "value": "SPAIN",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "SWEDEN",
                  "value": "SWEDEN",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "THAILAND",
                  "value": "THAILAND",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "UK",
                  "value": "UK",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "US",
                  "value": "US",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125170]"
              },
              {
                  "label": "US VIRGIN ISLANDS",
                  "value": "US VIRGIN ISLANDS",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              }
          ],
          "cta": [],
          "logo": "",
          "logoImage": [
              "https://preview-stageessilorluxottica.luxgroup.net/caas/v1/media/124896/data/picture/bd96463ebd9344c16e97e38ffc5c809a.png"
          ]
      },
      {
          "id": 3,
          "countries": [
              {
                  "label": "AMERICAN SAMOA",
                  "value": "AMERICAN SAMOA",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "AUSTRALIA",
                  "value": "AUSTRALIA",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": ""
              },
              {
                  "label": "AUSTRIA",
                  "value": "AUSTRIA",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "BELGIUM",
                  "value": "BELGIUM",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "BRAZIL",
                  "value": "BRAZIL",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "CANADA",
                  "value": "CANADA",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125170]"
              },
              {
                  "label": "CHINA",
                  "value": "CHINA",
                  "parameterOne": "Content[coremedia:///cap/content/125160]",
                  "parameterTwo": "Content[coremedia:///cap/content/125160]"
              },
              {
                  "label": "DENMARK",
                  "value": "DENMARK",
                  "parameterOne": "Content[coremedia:///cap/content/125182]",
                  "parameterTwo": "Content[coremedia:///cap/content/125174]"
              },
              {
                  "label": "FINLAND",
                  "value": "FINLAND",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "FRANCE",
                  "value": "FRANCE",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "GERMANY",
                  "value": "GERMANY",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "GUAM",
                  "value": "GUAM",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "HONG KONG",
                  "value": "HONG KONG",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "INDIA",
                  "value": "INDIA",
                  "parameterOne": "Content[coremedia:///cap/content/125162]",
                  "parameterTwo": "Content[coremedia:///cap/content/125162]"
              },
              {
                  "label": "INDONESIA",
                  "value": "INDONESIA",
                  "parameterOne": "Content[coremedia:///cap/content/125164]",
                  "parameterTwo": "Content[coremedia:///cap/content/125164]"
              },
              {
                  "label": "IRELAND",
                  "value": "IRELAND",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "ITALY",
                  "value": "ITALY",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "JAPAN",
                  "value": "JAPAN",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "LUXEMBOURG",
                  "value": "LUXEMBOURG",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "MALAYSIA",
                  "value": "MALAYSIA",
                  "parameterOne": "Content[coremedia:///cap/content/125168]",
                  "parameterTwo": "Content[coremedia:///cap/content/125168]"
              },
              {
                  "label": "NETHERLANDS",
                  "value": "NETHERLANDS",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "NORTHERN MARIANA ISLANDS",
                  "value": "NORTHERN MARIANA ISLANDS",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "OTHER COUNTRY",
                  "value": "OTHER COUNTRY",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "POLAND",
                  "value": "POLAND",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "PORTUGAL",
                  "value": "PORTUGAL",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "PUERTO RICO",
                  "value": "PUERTO RICO",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "SINGAPORE",
                  "value": "SINGAPORE",
                  "parameterOne": "Content[coremedia:///cap/content/125166]",
                  "parameterTwo": "Content[coremedia:///cap/content/125166]"
              },
              {
                  "label": "SPAIN",
                  "value": "SPAIN",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "SWEDEN",
                  "value": "SWEDEN",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "THAILAND",
                  "value": "THAILAND",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "UK",
                  "value": "UK",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "US",
                  "value": "US",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125170]"
              },
              {
                  "label": "US VIRGIN ISLANDS",
                  "value": "US VIRGIN ISLANDS",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              }
          ],
          "cta": [],
          "logo": "",
          "logoImage": [
              "https://preview-stageessilorluxottica.luxgroup.net/caas/v1/media/125194/data/picture/dad30ed3a1d1517b70bd90c198673836.png"
          ]
      },
      {
          "id": 4,
          "countries": [
              {
                  "label": "AMERICAN SAMOA",
                  "value": "AMERICAN SAMOA",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "AUSTRALIA",
                  "value": "AUSTRALIA",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": ""
              },
              {
                  "label": "AUSTRIA",
                  "value": "AUSTRIA",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "BELGIUM",
                  "value": "BELGIUM",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "BRAZIL",
                  "value": "BRAZIL",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "CANADA",
                  "value": "CANADA",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125170]"
              },
              {
                  "label": "CHINA",
                  "value": "CHINA",
                  "parameterOne": "Content[coremedia:///cap/content/125160]",
                  "parameterTwo": "Content[coremedia:///cap/content/125160]"
              },
              {
                  "label": "DENMARK",
                  "value": "DENMARK",
                  "parameterOne": "Content[coremedia:///cap/content/125182]",
                  "parameterTwo": "Content[coremedia:///cap/content/125174]"
              },
              {
                  "label": "FINLAND",
                  "value": "FINLAND",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "FRANCE",
                  "value": "FRANCE",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "GERMANY",
                  "value": "GERMANY",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "GUAM",
                  "value": "GUAM",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "HONG KONG",
                  "value": "HONG KONG",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "INDIA",
                  "value": "INDIA",
                  "parameterOne": "Content[coremedia:///cap/content/125162]",
                  "parameterTwo": "Content[coremedia:///cap/content/125162]"
              },
              {
                  "label": "INDONESIA",
                  "value": "INDONESIA",
                  "parameterOne": "Content[coremedia:///cap/content/125164]",
                  "parameterTwo": "Content[coremedia:///cap/content/125164]"
              },
              {
                  "label": "IRELAND",
                  "value": "IRELAND",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "ITALY",
                  "value": "ITALY",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "JAPAN",
                  "value": "JAPAN",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "LUXEMBOURG",
                  "value": "LUXEMBOURG",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "MALAYSIA",
                  "value": "MALAYSIA",
                  "parameterOne": "Content[coremedia:///cap/content/125168]",
                  "parameterTwo": "Content[coremedia:///cap/content/125168]"
              },
              {
                  "label": "NETHERLANDS",
                  "value": "NETHERLANDS",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "NORTHERN MARIANA ISLANDS",
                  "value": "NORTHERN MARIANA ISLANDS",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "OTHER COUNTRY",
                  "value": "OTHER COUNTRY",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "POLAND",
                  "value": "POLAND",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "PORTUGAL",
                  "value": "PORTUGAL",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "PUERTO RICO",
                  "value": "PUERTO RICO",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "SINGAPORE",
                  "value": "SINGAPORE",
                  "parameterOne": "Content[coremedia:///cap/content/125166]",
                  "parameterTwo": "Content[coremedia:///cap/content/125166]"
              },
              {
                  "label": "SPAIN",
                  "value": "SPAIN",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "SWEDEN",
                  "value": "SWEDEN",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "THAILAND",
                  "value": "THAILAND",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "UK",
                  "value": "UK",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "US",
                  "value": "US",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125170]"
              },
              {
                  "label": "US VIRGIN ISLANDS",
                  "value": "US VIRGIN ISLANDS",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              }
          ],
          "cta": [],
          "logo": "",
          "logoImage": [
              "https://preview-stageessilorluxottica.luxgroup.net/caas/v1/media/125196/data/picture/de756e7dfcfac54b40ce431fcc791991.png"
          ]
      },
      {
          "id": 5,
          "countries": [
              {
                  "label": "AMERICAN SAMOA",
                  "value": "AMERICAN SAMOA",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "AUSTRALIA",
                  "value": "AUSTRALIA",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": ""
              },
              {
                  "label": "AUSTRIA",
                  "value": "AUSTRIA",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "BELGIUM",
                  "value": "BELGIUM",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "BRAZIL",
                  "value": "BRAZIL",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "CANADA",
                  "value": "CANADA",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125170]"
              },
              {
                  "label": "CHINA",
                  "value": "CHINA",
                  "parameterOne": "Content[coremedia:///cap/content/125160]",
                  "parameterTwo": "Content[coremedia:///cap/content/125160]"
              },
              {
                  "label": "DENMARK",
                  "value": "DENMARK",
                  "parameterOne": "Content[coremedia:///cap/content/125182]",
                  "parameterTwo": "Content[coremedia:///cap/content/125174]"
              },
              {
                  "label": "FINLAND",
                  "value": "FINLAND",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "FRANCE",
                  "value": "FRANCE",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "GERMANY",
                  "value": "GERMANY",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "GUAM",
                  "value": "GUAM",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "HONG KONG",
                  "value": "HONG KONG",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "INDIA",
                  "value": "INDIA",
                  "parameterOne": "Content[coremedia:///cap/content/125162]",
                  "parameterTwo": "Content[coremedia:///cap/content/125162]"
              },
              {
                  "label": "INDONESIA",
                  "value": "INDONESIA",
                  "parameterOne": "Content[coremedia:///cap/content/125164]",
                  "parameterTwo": "Content[coremedia:///cap/content/125164]"
              },
              {
                  "label": "IRELAND",
                  "value": "IRELAND",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "ITALY",
                  "value": "ITALY",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "JAPAN",
                  "value": "JAPAN",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "LUXEMBOURG",
                  "value": "LUXEMBOURG",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "MALAYSIA",
                  "value": "MALAYSIA",
                  "parameterOne": "Content[coremedia:///cap/content/125168]",
                  "parameterTwo": "Content[coremedia:///cap/content/125168]"
              },
              {
                  "label": "NETHERLANDS",
                  "value": "NETHERLANDS",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "NORTHERN MARIANA ISLANDS",
                  "value": "NORTHERN MARIANA ISLANDS",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "OTHER COUNTRY",
                  "value": "OTHER COUNTRY",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "POLAND",
                  "value": "POLAND",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "PORTUGAL",
                  "value": "PORTUGAL",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "PUERTO RICO",
                  "value": "PUERTO RICO",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "SINGAPORE",
                  "value": "SINGAPORE",
                  "parameterOne": "Content[coremedia:///cap/content/125166]",
                  "parameterTwo": "Content[coremedia:///cap/content/125166]"
              },
              {
                  "label": "SPAIN",
                  "value": "SPAIN",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "SWEDEN",
                  "value": "SWEDEN",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "THAILAND",
                  "value": "THAILAND",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "UK",
                  "value": "UK",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "US",
                  "value": "US",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125170]"
              },
              {
                  "label": "US VIRGIN ISLANDS",
                  "value": "US VIRGIN ISLANDS",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              }
          ],
          "cta": [],
          "logo": "",
          "logoImage": [
              "https://preview-stageessilorluxottica.luxgroup.net/caas/v1/media/125210/data/picture/385a4ed3d373b3b190a1914d120c0ff2.png"
          ]
      },
      {
          "id": 6,
          "countries": [
              {
                  "label": "AMERICAN SAMOA",
                  "value": "AMERICAN SAMOA",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "AUSTRALIA",
                  "value": "AUSTRALIA",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": ""
              },
              {
                  "label": "AUSTRIA",
                  "value": "AUSTRIA",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "BELGIUM",
                  "value": "BELGIUM",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "BRAZIL",
                  "value": "BRAZIL",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "CANADA",
                  "value": "CANADA",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125170]"
              },
              {
                  "label": "CHINA",
                  "value": "CHINA",
                  "parameterOne": "Content[coremedia:///cap/content/125160]",
                  "parameterTwo": "Content[coremedia:///cap/content/125160]"
              },
              {
                  "label": "DENMARK",
                  "value": "DENMARK",
                  "parameterOne": "Content[coremedia:///cap/content/125182]",
                  "parameterTwo": "Content[coremedia:///cap/content/125174]"
              },
              {
                  "label": "FINLAND",
                  "value": "FINLAND",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "FRANCE",
                  "value": "FRANCE",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "GERMANY",
                  "value": "GERMANY",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "GUAM",
                  "value": "GUAM",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "HONG KONG",
                  "value": "HONG KONG",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "INDIA",
                  "value": "INDIA",
                  "parameterOne": "Content[coremedia:///cap/content/125162]",
                  "parameterTwo": "Content[coremedia:///cap/content/125162]"
              },
              {
                  "label": "INDONESIA",
                  "value": "INDONESIA",
                  "parameterOne": "Content[coremedia:///cap/content/125164]",
                  "parameterTwo": "Content[coremedia:///cap/content/125164]"
              },
              {
                  "label": "IRELAND",
                  "value": "IRELAND",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "ITALY",
                  "value": "ITALY",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "JAPAN",
                  "value": "JAPAN",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "LUXEMBOURG",
                  "value": "LUXEMBOURG",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "MALAYSIA",
                  "value": "MALAYSIA",
                  "parameterOne": "Content[coremedia:///cap/content/125168]",
                  "parameterTwo": "Content[coremedia:///cap/content/125168]"
              },
              {
                  "label": "NETHERLANDS",
                  "value": "NETHERLANDS",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "NORTHERN MARIANA ISLANDS",
                  "value": "NORTHERN MARIANA ISLANDS",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "OTHER COUNTRY",
                  "value": "OTHER COUNTRY",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "POLAND",
                  "value": "POLAND",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "PORTUGAL",
                  "value": "PORTUGAL",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "PUERTO RICO",
                  "value": "PUERTO RICO",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "SINGAPORE",
                  "value": "SINGAPORE",
                  "parameterOne": "Content[coremedia:///cap/content/125166]",
                  "parameterTwo": "Content[coremedia:///cap/content/125166]"
              },
              {
                  "label": "SPAIN",
                  "value": "SPAIN",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "SWEDEN",
                  "value": "SWEDEN",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "THAILAND",
                  "value": "THAILAND",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "UK",
                  "value": "UK",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "US",
                  "value": "US",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125170]"
              },
              {
                  "label": "US VIRGIN ISLANDS",
                  "value": "US VIRGIN ISLANDS",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              }
          ],
          "cta": [],
          "logo": "",
          "logoImage": [
              "https://preview-stageessilorluxottica.luxgroup.net/caas/v1/media/125212/data/picture/f4feb482be1c3d22625a1efca719b8ea.png"
          ]
      },
      {
          "id": 7,
          "countries": [
              {
                  "label": "AMERICAN SAMOA",
                  "value": "AMERICAN SAMOA",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "AUSTRALIA",
                  "value": "AUSTRALIA",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "AUSTRIA",
                  "value": "AUSTRIA",
                  "parameterOne": "Content[coremedia:///cap/content/125172]",
                  "parameterTwo": "Content[coremedia:///cap/content/125224]"
              },
              {
                  "label": "BELGIUM",
                  "value": "BELGIUM",
                  "parameterOne": "Content[coremedia:///cap/content/125172]",
                  "parameterTwo": "Content[coremedia:///cap/content/125224]"
              },
              {
                  "label": "BRAZIL",
                  "value": "BRAZIL",
                  "parameterOne": "Content[coremedia:///cap/content/125188]",
                  "parameterTwo": "Content[coremedia:///cap/content/125188]"
              },
              {
                  "label": "CANADA",
                  "value": "CANADA",
                  "parameterOne": "Content[coremedia:///cap/content/125172]",
                  "parameterTwo": "Content[coremedia:///cap/content/125170]"
              },
              {
                  "label": "CHINA",
                  "value": "CHINA",
                  "parameterOne": "Content[coremedia:///cap/content/125160]",
                  "parameterTwo": "Content[coremedia:///cap/content/125160]"
              },
              {
                  "label": "DENMARK",
                  "value": "DENMARK",
                  "parameterOne": "Content[coremedia:///cap/content/125172]",
                  "parameterTwo": "Content[coremedia:///cap/content/125224]"
              },
              {
                  "label": "FINLAND",
                  "value": "FINLAND",
                  "parameterOne": "Content[coremedia:///cap/content/125172]",
                  "parameterTwo": "Content[coremedia:///cap/content/125224]"
              },
              {
                  "label": "FRANCE",
                  "value": "FRANCE",
                  "parameterOne": "Content[coremedia:///cap/content/125172]",
                  "parameterTwo": "Content[coremedia:///cap/content/125224]"
              },
              {
                  "label": "GERMANY",
                  "value": "GERMANY",
                  "parameterOne": "Content[coremedia:///cap/content/125172]",
                  "parameterTwo": "Content[coremedia:///cap/content/125224]"
              },
              {
                  "label": "GUAM",
                  "value": "GUAM",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "HONG KONG",
                  "value": "HONG KONG",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "INDIA",
                  "value": "INDIA",
                  "parameterOne": "Content[coremedia:///cap/content/125162]",
                  "parameterTwo": "Content[coremedia:///cap/content/125162]"
              },
              {
                  "label": "INDONESIA",
                  "value": "INDONESIA",
                  "parameterOne": "Content[coremedia:///cap/content/125164]",
                  "parameterTwo": "Content[coremedia:///cap/content/125164]"
              },
              {
                  "label": "IRELAND",
                  "value": "IRELAND",
                  "parameterOne": "Content[coremedia:///cap/content/125172]",
                  "parameterTwo": "Content[coremedia:///cap/content/125224]"
              },
              {
                  "label": "ITALY",
                  "value": "ITALY",
                  "parameterOne": "Content[coremedia:///cap/content/125172]",
                  "parameterTwo": "Content[coremedia:///cap/content/125224]"
              },
              {
                  "label": "JAPAN",
                  "value": "JAPAN",
                  "parameterOne": "Content[coremedia:///cap/content/125218]",
                  "parameterTwo": "Content[coremedia:///cap/content/125218]"
              },
              {
                  "label": "LUXEMBOURG",
                  "value": "LUXEMBOURG",
                  "parameterOne": "Content[coremedia:///cap/content/125172]",
                  "parameterTwo": "Content[coremedia:///cap/content/125224]"
              },
              {
                  "label": "MALAYSIA",
                  "value": "MALAYSIA",
                  "parameterOne": "Content[coremedia:///cap/content/125168]",
                  "parameterTwo": "Content[coremedia:///cap/content/125168]"
              },
              {
                  "label": "NETHERLANDS",
                  "value": "NETHERLANDS",
                  "parameterOne": "Content[coremedia:///cap/content/125172]",
                  "parameterTwo": "Content[coremedia:///cap/content/125224]"
              },
              {
                  "label": "NORTHERN MARIANA ISLANDS",
                  "value": "NORTHERN MARIANA ISLANDS",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "OTHER COUNTRY",
                  "value": "OTHER COUNTRY",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "POLAND",
                  "value": "POLAND",
                  "parameterOne": "Content[coremedia:///cap/content/125172]",
                  "parameterTwo": "Content[coremedia:///cap/content/125224]"
              },
              {
                  "label": "PORTUGAL",
                  "value": "PORTUGAL",
                  "parameterOne": "Content[coremedia:///cap/content/125172]",
                  "parameterTwo": "Content[coremedia:///cap/content/125224]"
              },
              {
                  "label": "PUERTO RICO",
                  "value": "PUERTO RICO",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "SINGAPORE",
                  "value": "SINGAPORE",
                  "parameterOne": "Content[coremedia:///cap/content/125166]",
                  "parameterTwo": "Content[coremedia:///cap/content/125166]"
              },
              {
                  "label": "SPAIN",
                  "value": "SPAIN",
                  "parameterOne": "Content[coremedia:///cap/content/125172]",
                  "parameterTwo": "Content[coremedia:///cap/content/125224]"
              },
              {
                  "label": "SWEDEN",
                  "value": "SWEDEN",
                  "parameterOne": "Content[coremedia:///cap/content/125172]",
                  "parameterTwo": "Content[coremedia:///cap/content/125224]"
              },
              {
                  "label": "THAILAND",
                  "value": "THAILAND",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "UK",
                  "value": "UK",
                  "parameterOne": "Content[coremedia:///cap/content/125172]",
                  "parameterTwo": "Content[coremedia:///cap/content/125224]"
              },
              {
                  "label": "US",
                  "value": "US",
                  "parameterOne": "Content[coremedia:///cap/content/125172]",
                  "parameterTwo": "Content[coremedia:///cap/content/125170]"
              },
              {
                  "label": "US VIRGIN ISLANDS",
                  "value": "US VIRGIN ISLANDS",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              }
          ],
          "cta": [],
          "logo": "",
          "logoImage": [
              "https://preview-stageessilorluxottica.luxgroup.net/caas/v1/media/125214/data/picture/c2514dc83f689ce8da4bb251b0f194ea.png"
          ]
      },
      {
          "id": 8,
          "countries": [
              {
                  "label": "AMERICAN SAMOA",
                  "value": "AMERICAN SAMOA",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "AUSTRALIA",
                  "value": "AUSTRALIA",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "AUSTRIA",
                  "value": "AUSTRIA",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "BELGIUM",
                  "value": "BELGIUM",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "BRAZIL",
                  "value": "BRAZIL",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "CANADA",
                  "value": "CANADA",
                  "parameterOne": "Content[coremedia:///cap/content/125172]",
                  "parameterTwo": "Content[coremedia:///cap/content/125170]"
              },
              {
                  "label": "CHINA",
                  "value": "CHINA",
                  "parameterOne": "Content[coremedia:///cap/content/125160]",
                  "parameterTwo": "Content[coremedia:///cap/content/125160]"
              },
              {
                  "label": "DENMARK",
                  "value": "DENMARK",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "FINLAND",
                  "value": "FINLAND",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "FRANCE",
                  "value": "FRANCE",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "GERMANY",
                  "value": "GERMANY",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "GUAM",
                  "value": "GUAM",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "HONG KONG",
                  "value": "HONG KONG",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "INDIA",
                  "value": "INDIA",
                  "parameterOne": "Content[coremedia:///cap/content/125162]",
                  "parameterTwo": "Content[coremedia:///cap/content/125162]"
              },
              {
                  "label": "INDONESIA",
                  "value": "INDONESIA",
                  "parameterOne": "Content[coremedia:///cap/content/125164]",
                  "parameterTwo": "Content[coremedia:///cap/content/125164]"
              },
              {
                  "label": "IRELAND",
                  "value": "IRELAND",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "ITALY",
                  "value": "ITALY",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "JAPAN",
                  "value": "JAPAN",
                  "parameterOne": "Content[coremedia:///cap/content/125218]",
                  "parameterTwo": "Content[coremedia:///cap/content/125218]"
              },
              {
                  "label": "LUXEMBOURG",
                  "value": "LUXEMBOURG",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "MALAYSIA",
                  "value": "MALAYSIA",
                  "parameterOne": "Content[coremedia:///cap/content/125168]",
                  "parameterTwo": "Content[coremedia:///cap/content/125168]"
              },
              {
                  "label": "NETHERLANDS",
                  "value": "NETHERLANDS",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "NORTHERN MARIANA ISLANDS",
                  "value": "NORTHERN MARIANA ISLANDS",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "OTHER COUNTRY",
                  "value": "OTHER COUNTRY",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "POLAND",
                  "value": "POLAND",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "PORTUGAL",
                  "value": "PORTUGAL",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "PUERTO RICO",
                  "value": "PUERTO RICO",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "SINGAPORE",
                  "value": "SINGAPORE",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "SPAIN",
                  "value": "SPAIN",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "SWEDEN",
                  "value": "SWEDEN",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "THAILAND",
                  "value": "THAILAND",
                  "parameterOne": "Content[coremedia:///cap/content/125226]",
                  "parameterTwo": "Content[coremedia:///cap/content/125226]"
              },
              {
                  "label": "UK",
                  "value": "UK",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "US",
                  "value": "US",
                  "parameterOne": "Content[coremedia:///cap/content/125172]",
                  "parameterTwo": "Content[coremedia:///cap/content/125170]"
              },
              {
                  "label": "US VIRGIN ISLANDS",
                  "value": "US VIRGIN ISLANDS",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              }
          ],
          "cta": [],
          "logo": "",
          "logoImage": [
              "https://preview-stageessilorluxottica.luxgroup.net/caas/v1/media/125220/data/picture/4f31df935d56eb57878f375c1284cfec.jpg"
          ]
      },
      {
          "id": 9,
          "countries": [
              {
                  "label": "AMERICAN SAMOA",
                  "value": "AMERICAN SAMOA",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "AUSTRALIA",
                  "value": "AUSTRALIA",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": ""
              },
              {
                  "label": "AUSTRIA",
                  "value": "AUSTRIA",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "BELGIUM",
                  "value": "BELGIUM",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "BRAZIL",
                  "value": "BRAZIL",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "CANADA",
                  "value": "CANADA",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125170]"
              },
              {
                  "label": "CHINA",
                  "value": "CHINA",
                  "parameterOne": "Content[coremedia:///cap/content/125160]",
                  "parameterTwo": "Content[coremedia:///cap/content/125160]"
              },
              {
                  "label": "DENMARK",
                  "value": "DENMARK",
                  "parameterOne": "Content[coremedia:///cap/content/125182]",
                  "parameterTwo": "Content[coremedia:///cap/content/125174]"
              },
              {
                  "label": "FINLAND",
                  "value": "FINLAND",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "FRANCE",
                  "value": "FRANCE",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "GERMANY",
                  "value": "GERMANY",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "GUAM",
                  "value": "GUAM",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "HONG KONG",
                  "value": "HONG KONG",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "INDIA",
                  "value": "INDIA",
                  "parameterOne": "Content[coremedia:///cap/content/125162]",
                  "parameterTwo": "Content[coremedia:///cap/content/125162]"
              },
              {
                  "label": "INDONESIA",
                  "value": "INDONESIA",
                  "parameterOne": "Content[coremedia:///cap/content/125164]",
                  "parameterTwo": "Content[coremedia:///cap/content/125164]"
              },
              {
                  "label": "IRELAND",
                  "value": "IRELAND",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "ITALY",
                  "value": "ITALY",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "JAPAN",
                  "value": "JAPAN",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "LUXEMBOURG",
                  "value": "LUXEMBOURG",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "MALAYSIA",
                  "value": "MALAYSIA",
                  "parameterOne": "Content[coremedia:///cap/content/125168]",
                  "parameterTwo": "Content[coremedia:///cap/content/125168]"
              },
              {
                  "label": "NETHERLANDS",
                  "value": "NETHERLANDS",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "NORTHERN MARIANA ISLANDS",
                  "value": "NORTHERN MARIANA ISLANDS",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "OTHER COUNTRY",
                  "value": "OTHER COUNTRY",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "POLAND",
                  "value": "POLAND",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "PORTUGAL",
                  "value": "PORTUGAL",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "PUERTO RICO",
                  "value": "PUERTO RICO",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "SINGAPORE",
                  "value": "SINGAPORE",
                  "parameterOne": "Content[coremedia:///cap/content/125166]",
                  "parameterTwo": "Content[coremedia:///cap/content/125166]"
              },
              {
                  "label": "SPAIN",
                  "value": "SPAIN",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "SWEDEN",
                  "value": "SWEDEN",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "THAILAND",
                  "value": "THAILAND",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "UK",
                  "value": "UK",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "US",
                  "value": "US",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125170]"
              },
              {
                  "label": "US VIRGIN ISLANDS",
                  "value": "US VIRGIN ISLANDS",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              }
          ],
          "cta": [],
          "logo": "",
          "logoImage": [
              "https://preview-stageessilorluxottica.luxgroup.net/caas/v1/media/125228/data/picture/13be46ec96ed017b3e1d9b749d9c6270.png"
          ]
      },
      {
          "id": 10,
          "countries": [
              {
                  "label": "AMERICAN SAMOA",
                  "value": "AMERICAN SAMOA",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "AUSTRALIA",
                  "value": "AUSTRALIA",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": ""
              },
              {
                  "label": "AUSTRIA",
                  "value": "AUSTRIA",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "BELGIUM",
                  "value": "BELGIUM",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "BRAZIL",
                  "value": "BRAZIL",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "CANADA",
                  "value": "CANADA",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125170]"
              },
              {
                  "label": "CHINA",
                  "value": "CHINA",
                  "parameterOne": "Content[coremedia:///cap/content/125160]",
                  "parameterTwo": "Content[coremedia:///cap/content/125160]"
              },
              {
                  "label": "DENMARK",
                  "value": "DENMARK",
                  "parameterOne": "Content[coremedia:///cap/content/125182]",
                  "parameterTwo": "Content[coremedia:///cap/content/125174]"
              },
              {
                  "label": "FINLAND",
                  "value": "FINLAND",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "FRANCE",
                  "value": "FRANCE",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "GERMANY",
                  "value": "GERMANY",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "GUAM",
                  "value": "GUAM",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "HONG KONG",
                  "value": "HONG KONG",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "INDIA",
                  "value": "INDIA",
                  "parameterOne": "Content[coremedia:///cap/content/125162]",
                  "parameterTwo": "Content[coremedia:///cap/content/125162]"
              },
              {
                  "label": "INDONESIA",
                  "value": "INDONESIA",
                  "parameterOne": "Content[coremedia:///cap/content/125164]",
                  "parameterTwo": "Content[coremedia:///cap/content/125164]"
              },
              {
                  "label": "IRELAND",
                  "value": "IRELAND",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "ITALY",
                  "value": "ITALY",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "JAPAN",
                  "value": "JAPAN",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "LUXEMBOURG",
                  "value": "LUXEMBOURG",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "MALAYSIA",
                  "value": "MALAYSIA",
                  "parameterOne": "Content[coremedia:///cap/content/125168]",
                  "parameterTwo": "Content[coremedia:///cap/content/125168]"
              },
              {
                  "label": "NETHERLANDS",
                  "value": "NETHERLANDS",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "NORTHERN MARIANA ISLANDS",
                  "value": "NORTHERN MARIANA ISLANDS",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "OTHER COUNTRY",
                  "value": "OTHER COUNTRY",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "POLAND",
                  "value": "POLAND",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "PORTUGAL",
                  "value": "PORTUGAL",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "PUERTO RICO",
                  "value": "PUERTO RICO",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "SINGAPORE",
                  "value": "SINGAPORE",
                  "parameterOne": "Content[coremedia:///cap/content/125166]",
                  "parameterTwo": "Content[coremedia:///cap/content/125166]"
              },
              {
                  "label": "SPAIN",
                  "value": "SPAIN",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "SWEDEN",
                  "value": "SWEDEN",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "THAILAND",
                  "value": "THAILAND",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "UK",
                  "value": "UK",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "US",
                  "value": "US",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125170]"
              },
              {
                  "label": "US VIRGIN ISLANDS",
                  "value": "US VIRGIN ISLANDS",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              }
          ],
          "cta": [],
          "logo": "",
          "logoImage": [
              "https://preview-stageessilorluxottica.luxgroup.net/caas/v1/media/125230/data/picture/bb56609e866edc3c7dec8473b9fbbfe4.png"
          ]
      },
      {
          "id": 11,
          "countries": [
              {
                  "label": "AMERICAN SAMOA",
                  "value": "AMERICAN SAMOA",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "AUSTRALIA",
                  "value": "AUSTRALIA",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": ""
              },
              {
                  "label": "AUSTRIA",
                  "value": "AUSTRIA",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "BELGIUM",
                  "value": "BELGIUM",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "BRAZIL",
                  "value": "BRAZIL",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "CANADA",
                  "value": "CANADA",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125170]"
              },
              {
                  "label": "CHINA",
                  "value": "CHINA",
                  "parameterOne": "Content[coremedia:///cap/content/125160]",
                  "parameterTwo": "Content[coremedia:///cap/content/125160]"
              },
              {
                  "label": "DENMARK",
                  "value": "DENMARK",
                  "parameterOne": "Content[coremedia:///cap/content/125182]",
                  "parameterTwo": "Content[coremedia:///cap/content/125174]"
              },
              {
                  "label": "FINLAND",
                  "value": "FINLAND",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "FRANCE",
                  "value": "FRANCE",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "GERMANY",
                  "value": "GERMANY",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "GUAM",
                  "value": "GUAM",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "HONG KONG",
                  "value": "HONG KONG",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "INDIA",
                  "value": "INDIA",
                  "parameterOne": "Content[coremedia:///cap/content/125162]",
                  "parameterTwo": "Content[coremedia:///cap/content/125162]"
              },
              {
                  "label": "INDONESIA",
                  "value": "INDONESIA",
                  "parameterOne": "Content[coremedia:///cap/content/125164]",
                  "parameterTwo": "Content[coremedia:///cap/content/125164]"
              },
              {
                  "label": "IRELAND",
                  "value": "IRELAND",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "ITALY",
                  "value": "ITALY",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "JAPAN",
                  "value": "JAPAN",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "LUXEMBOURG",
                  "value": "LUXEMBOURG",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "MALAYSIA",
                  "value": "MALAYSIA",
                  "parameterOne": "Content[coremedia:///cap/content/125168]",
                  "parameterTwo": "Content[coremedia:///cap/content/125168]"
              },
              {
                  "label": "NETHERLANDS",
                  "value": "NETHERLANDS",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "NORTHERN MARIANA ISLANDS",
                  "value": "NORTHERN MARIANA ISLANDS",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "OTHER COUNTRY",
                  "value": "OTHER COUNTRY",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "POLAND",
                  "value": "POLAND",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "PORTUGAL",
                  "value": "PORTUGAL",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "PUERTO RICO",
                  "value": "PUERTO RICO",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "SINGAPORE",
                  "value": "SINGAPORE",
                  "parameterOne": "Content[coremedia:///cap/content/125166]",
                  "parameterTwo": "Content[coremedia:///cap/content/125166]"
              },
              {
                  "label": "SPAIN",
                  "value": "SPAIN",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "SWEDEN",
                  "value": "SWEDEN",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "THAILAND",
                  "value": "THAILAND",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "UK",
                  "value": "UK",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "US",
                  "value": "US",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125170]"
              },
              {
                  "label": "US VIRGIN ISLANDS",
                  "value": "US VIRGIN ISLANDS",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              }
          ],
          "cta": [],
          "logo": "",
          "logoImage": [
              "https://preview-stageessilorluxottica.luxgroup.net/caas/v1/media/125204/data/picture/837c801a975d81a165e29edd75170bfb.png"
          ]
      },
      {
          "id": 12,
          "countries": [
              {
                  "label": "AMERICAN SAMOA",
                  "value": "AMERICAN SAMOA",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "AUSTRALIA",
                  "value": "AUSTRALIA",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": ""
              },
              {
                  "label": "AUSTRIA",
                  "value": "AUSTRIA",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "BELGIUM",
                  "value": "BELGIUM",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "BRAZIL",
                  "value": "BRAZIL",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "CANADA",
                  "value": "CANADA",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125170]"
              },
              {
                  "label": "CHINA",
                  "value": "CHINA",
                  "parameterOne": "Content[coremedia:///cap/content/125160]",
                  "parameterTwo": "Content[coremedia:///cap/content/125160]"
              },
              {
                  "label": "DENMARK",
                  "value": "DENMARK",
                  "parameterOne": "Content[coremedia:///cap/content/125182]",
                  "parameterTwo": "Content[coremedia:///cap/content/125174]"
              },
              {
                  "label": "FINLAND",
                  "value": "FINLAND",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "FRANCE",
                  "value": "FRANCE",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "GERMANY",
                  "value": "GERMANY",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "GUAM",
                  "value": "GUAM",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "HONG KONG",
                  "value": "HONG KONG",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "INDIA",
                  "value": "INDIA",
                  "parameterOne": "Content[coremedia:///cap/content/125162]",
                  "parameterTwo": "Content[coremedia:///cap/content/125162]"
              },
              {
                  "label": "INDONESIA",
                  "value": "INDONESIA",
                  "parameterOne": "Content[coremedia:///cap/content/125164]",
                  "parameterTwo": "Content[coremedia:///cap/content/125164]"
              },
              {
                  "label": "IRELAND",
                  "value": "IRELAND",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "ITALY",
                  "value": "ITALY",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "JAPAN",
                  "value": "JAPAN",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "LUXEMBOURG",
                  "value": "LUXEMBOURG",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "MALAYSIA",
                  "value": "MALAYSIA",
                  "parameterOne": "Content[coremedia:///cap/content/125168]",
                  "parameterTwo": "Content[coremedia:///cap/content/125168]"
              },
              {
                  "label": "NETHERLANDS",
                  "value": "NETHERLANDS",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "NORTHERN MARIANA ISLANDS",
                  "value": "NORTHERN MARIANA ISLANDS",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "OTHER COUNTRY",
                  "value": "OTHER COUNTRY",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "POLAND",
                  "value": "POLAND",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "PORTUGAL",
                  "value": "PORTUGAL",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "PUERTO RICO",
                  "value": "PUERTO RICO",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "SINGAPORE",
                  "value": "SINGAPORE",
                  "parameterOne": "Content[coremedia:///cap/content/125166]",
                  "parameterTwo": "Content[coremedia:///cap/content/125166]"
              },
              {
                  "label": "SPAIN",
                  "value": "SPAIN",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "SWEDEN",
                  "value": "SWEDEN",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "THAILAND",
                  "value": "THAILAND",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "UK",
                  "value": "UK",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "US",
                  "value": "US",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125170]"
              },
              {
                  "label": "US VIRGIN ISLANDS",
                  "value": "US VIRGIN ISLANDS",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              }
          ],
          "cta": [],
          "logo": "",
          "logoImage": [
              "https://preview-stageessilorluxottica.luxgroup.net/caas/v1/media/125206/data/picture/e6be19331972a88eb54b6c2fe2a1c0af.png"
          ]
      },
      {
          "id": 13,
          "countries": [
              {
                  "label": "AMERICAN SAMOA",
                  "value": "AMERICAN SAMOA",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "AUSTRALIA",
                  "value": "AUSTRALIA",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": ""
              },
              {
                  "label": "AUSTRIA",
                  "value": "AUSTRIA",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "BELGIUM",
                  "value": "BELGIUM",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "BRAZIL",
                  "value": "BRAZIL",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "CANADA",
                  "value": "CANADA",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125170]"
              },
              {
                  "label": "CHINA",
                  "value": "CHINA",
                  "parameterOne": "Content[coremedia:///cap/content/125160]",
                  "parameterTwo": "Content[coremedia:///cap/content/125160]"
              },
              {
                  "label": "DENMARK",
                  "value": "DENMARK",
                  "parameterOne": "Content[coremedia:///cap/content/125182]",
                  "parameterTwo": "Content[coremedia:///cap/content/125174]"
              },
              {
                  "label": "FINLAND",
                  "value": "FINLAND",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "FRANCE",
                  "value": "FRANCE",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "GERMANY",
                  "value": "GERMANY",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "GUAM",
                  "value": "GUAM",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "HONG KONG",
                  "value": "HONG KONG",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "INDIA",
                  "value": "INDIA",
                  "parameterOne": "Content[coremedia:///cap/content/125162]",
                  "parameterTwo": "Content[coremedia:///cap/content/125162]"
              },
              {
                  "label": "INDONESIA",
                  "value": "INDONESIA",
                  "parameterOne": "Content[coremedia:///cap/content/125164]",
                  "parameterTwo": "Content[coremedia:///cap/content/125164]"
              },
              {
                  "label": "IRELAND",
                  "value": "IRELAND",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "ITALY",
                  "value": "ITALY",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "JAPAN",
                  "value": "JAPAN",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "LUXEMBOURG",
                  "value": "LUXEMBOURG",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "MALAYSIA",
                  "value": "MALAYSIA",
                  "parameterOne": "Content[coremedia:///cap/content/125168]",
                  "parameterTwo": "Content[coremedia:///cap/content/125168]"
              },
              {
                  "label": "NETHERLANDS",
                  "value": "NETHERLANDS",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "NORTHERN MARIANA ISLANDS",
                  "value": "NORTHERN MARIANA ISLANDS",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "OTHER COUNTRY",
                  "value": "OTHER COUNTRY",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "POLAND",
                  "value": "POLAND",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "PORTUGAL",
                  "value": "PORTUGAL",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "PUERTO RICO",
                  "value": "PUERTO RICO",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "SINGAPORE",
                  "value": "SINGAPORE",
                  "parameterOne": "Content[coremedia:///cap/content/125166]",
                  "parameterTwo": "Content[coremedia:///cap/content/125166]"
              },
              {
                  "label": "SPAIN",
                  "value": "SPAIN",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "SWEDEN",
                  "value": "SWEDEN",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "THAILAND",
                  "value": "THAILAND",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "UK",
                  "value": "UK",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125182]"
              },
              {
                  "label": "US",
                  "value": "US",
                  "parameterOne": "Content[coremedia:///cap/content/125174]",
                  "parameterTwo": "Content[coremedia:///cap/content/125170]"
              },
              {
                  "label": "US VIRGIN ISLANDS",
                  "value": "US VIRGIN ISLANDS",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              }
          ],
          "cta": [],
          "logo": "",
          "logoImage": [
              "https://preview-stageessilorluxottica.luxgroup.net/caas/v1/media/125208/data/picture/4a37b5b16ded7ee005f243ad2e71192e.png"
          ]
      },
      {
          "id": 14,
          "countries": [
              {
                  "label": "AMERICAN SAMOA",
                  "value": "AMERICAN SAMOA",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "AUSTRALIA",
                  "value": "AUSTRALIA",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "AUSTRIA",
                  "value": "AUSTRIA",
                  "parameterOne": "Content[coremedia:///cap/content/125056]",
                  "parameterTwo": "Content[coremedia:///cap/content/125058]"
              },
              {
                  "label": "BELGIUM",
                  "value": "BELGIUM",
                  "parameterOne": "Content[coremedia:///cap/content/125056]",
                  "parameterTwo": "Content[coremedia:///cap/content/125058]"
              },
              {
                  "label": "BRAZIL",
                  "value": "BRAZIL",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "CANADA",
                  "value": "CANADA",
                  "parameterOne": "Content[coremedia:///cap/content/125056]",
                  "parameterTwo": "Content[coremedia:///cap/content/125170]"
              },
              {
                  "label": "CHINA",
                  "value": "CHINA",
                  "parameterOne": "Content[coremedia:///cap/content/125160]",
                  "parameterTwo": "Content[coremedia:///cap/content/125160]"
              },
              {
                  "label": "DENMARK",
                  "value": "DENMARK",
                  "parameterOne": "Content[coremedia:///cap/content/125056]",
                  "parameterTwo": "Content[coremedia:///cap/content/125058]"
              },
              {
                  "label": "FINLAND",
                  "value": "FINLAND",
                  "parameterOne": "Content[coremedia:///cap/content/125056]",
                  "parameterTwo": "Content[coremedia:///cap/content/125058]"
              },
              {
                  "label": "FRANCE",
                  "value": "FRANCE",
                  "parameterOne": "Content[coremedia:///cap/content/125056]",
                  "parameterTwo": "Content[coremedia:///cap/content/125058]"
              },
              {
                  "label": "GERMANY",
                  "value": "GERMANY",
                  "parameterOne": "Content[coremedia:///cap/content/125056]",
                  "parameterTwo": "Content[coremedia:///cap/content/125058]"
              },
              {
                  "label": "GUAM",
                  "value": "GUAM",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "HONG KONG",
                  "value": "HONG KONG",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "INDIA",
                  "value": "INDIA",
                  "parameterOne": "Content[coremedia:///cap/content/125162]",
                  "parameterTwo": "Content[coremedia:///cap/content/125162]"
              },
              {
                  "label": "INDONESIA",
                  "value": "INDONESIA",
                  "parameterOne": "Content[coremedia:///cap/content/125164]",
                  "parameterTwo": "Content[coremedia:///cap/content/125164]"
              },
              {
                  "label": "IRELAND",
                  "value": "IRELAND",
                  "parameterOne": "Content[coremedia:///cap/content/125056]",
                  "parameterTwo": "Content[coremedia:///cap/content/125058]"
              },
              {
                  "label": "ITALY",
                  "value": "ITALY",
                  "parameterOne": "Content[coremedia:///cap/content/125056]",
                  "parameterTwo": "Content[coremedia:///cap/content/125058]"
              },
              {
                  "label": "JAPAN",
                  "value": "JAPAN",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "LUXEMBOURG",
                  "value": "LUXEMBOURG",
                  "parameterOne": "Content[coremedia:///cap/content/125056]",
                  "parameterTwo": "Content[coremedia:///cap/content/125058]"
              },
              {
                  "label": "MALAYSIA",
                  "value": "MALAYSIA",
                  "parameterOne": "Content[coremedia:///cap/content/125168]",
                  "parameterTwo": "Content[coremedia:///cap/content/125168]"
              },
              {
                  "label": "NETHERLANDS",
                  "value": "NETHERLANDS",
                  "parameterOne": "Content[coremedia:///cap/content/125056]",
                  "parameterTwo": "Content[coremedia:///cap/content/125058]"
              },
              {
                  "label": "NORTHERN MARIANA ISLANDS",
                  "value": "NORTHERN MARIANA ISLANDS",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "OTHER COUNTRY",
                  "value": "OTHER COUNTRY",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "POLAND",
                  "value": "POLAND",
                  "parameterOne": "Content[coremedia:///cap/content/125056]",
                  "parameterTwo": "Content[coremedia:///cap/content/125058]"
              },
              {
                  "label": "PORTUGAL",
                  "value": "PORTUGAL",
                  "parameterOne": "Content[coremedia:///cap/content/125056]",
                  "parameterTwo": "Content[coremedia:///cap/content/125058]"
              },
              {
                  "label": "PUERTO RICO",
                  "value": "PUERTO RICO",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "SINGAPORE",
                  "value": "SINGAPORE",
                  "parameterOne": "Content[coremedia:///cap/content/125166]",
                  "parameterTwo": "Content[coremedia:///cap/content/125166]"
              },
              {
                  "label": "SPAIN",
                  "value": "SPAIN",
                  "parameterOne": "Content[coremedia:///cap/content/125056]",
                  "parameterTwo": "Content[coremedia:///cap/content/125058]"
              },
              {
                  "label": "SWEDEN",
                  "value": "SWEDEN",
                  "parameterOne": "Content[coremedia:///cap/content/125056]",
                  "parameterTwo": "Content[coremedia:///cap/content/125058]"
              },
              {
                  "label": "THAILAND",
                  "value": "THAILAND",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "UK",
                  "value": "UK",
                  "parameterOne": "Content[coremedia:///cap/content/125056]",
                  "parameterTwo": "Content[coremedia:///cap/content/125058]"
              },
              {
                  "label": "US",
                  "value": "US",
                  "parameterOne": "Content[coremedia:///cap/content/125056]",
                  "parameterTwo": "Content[coremedia:///cap/content/125170]"
              },
              {
                  "label": "US VIRGIN ISLANDS",
                  "value": "US VIRGIN ISLANDS",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              }
          ],
          "cta": [],
          "logo": "",
          "logoImage": [
              "https://preview-stageessilorluxottica.luxgroup.net/caas/v1/media/125054/data/picture/14e06b3d55ce4ec43ab186c6e576b929.png"
          ]
      },
      {
          "id": 15,
          "countries": [
              {
                  "label": "AMERICAN SAMOA",
                  "value": "AMERICAN SAMOA",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "AUSTRALIA",
                  "value": "AUSTRALIA",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "AUSTRIA",
                  "value": "AUSTRIA",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "BELGIUM",
                  "value": "BELGIUM",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "BRAZIL",
                  "value": "BRAZIL",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "CANADA",
                  "value": "CANADA",
                  "parameterOne": "Content[coremedia:///cap/content/125056]",
                  "parameterTwo": "Content[coremedia:///cap/content/125170]"
              },
              {
                  "label": "CHINA",
                  "value": "CHINA",
                  "parameterOne": "Content[coremedia:///cap/content/125160]",
                  "parameterTwo": "Content[coremedia:///cap/content/125160]"
              },
              {
                  "label": "DENMARK",
                  "value": "DENMARK",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "FINLAND",
                  "value": "FINLAND",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "FRANCE",
                  "value": "FRANCE",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "GERMANY",
                  "value": "GERMANY",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "GUAM",
                  "value": "GUAM",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "HONG KONG",
                  "value": "HONG KONG",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "INDIA",
                  "value": "INDIA",
                  "parameterOne": "Content[coremedia:///cap/content/125162]",
                  "parameterTwo": "Content[coremedia:///cap/content/125162]"
              },
              {
                  "label": "INDONESIA",
                  "value": "INDONESIA",
                  "parameterOne": "Content[coremedia:///cap/content/125164]",
                  "parameterTwo": "Content[coremedia:///cap/content/125164]"
              },
              {
                  "label": "IRELAND",
                  "value": "IRELAND",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "ITALY",
                  "value": "ITALY",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "JAPAN",
                  "value": "JAPAN",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "LUXEMBOURG",
                  "value": "LUXEMBOURG",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "MALAYSIA",
                  "value": "MALAYSIA",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "NETHERLANDS",
                  "value": "NETHERLANDS",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "NORTHERN MARIANA ISLANDS",
                  "value": "NORTHERN MARIANA ISLANDS",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "OTHER COUNTRY",
                  "value": "OTHER COUNTRY",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "POLAND",
                  "value": "POLAND",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "PORTUGAL",
                  "value": "PORTUGAL",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "PUERTO RICO",
                  "value": "PUERTO RICO",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "SINGAPORE",
                  "value": "SINGAPORE",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "SPAIN",
                  "value": "SPAIN",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "SWEDEN",
                  "value": "SWEDEN",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "THAILAND",
                  "value": "THAILAND",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "UK",
                  "value": "UK",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              },
              {
                  "label": "US",
                  "value": "US",
                  "parameterOne": "Content[coremedia:///cap/content/125056]",
                  "parameterTwo": "Content[coremedia:///cap/content/125170]"
              },
              {
                  "label": "US VIRGIN ISLANDS",
                  "value": "US VIRGIN ISLANDS",
                  "parameterOne": "Content[coremedia:///cap/content/125060]",
                  "parameterTwo": "Content[coremedia:///cap/content/125060]"
              }
          ],
          "cta": [],
          "logo": "",
          "logoImage": [
              "https://preview-stageessilorluxottica.luxgroup.net/caas/v1/media/125186/data/picture/1eae97a4be1086d085d66964d5b60a7e.jpg"
          ]
      }
  ]
};
