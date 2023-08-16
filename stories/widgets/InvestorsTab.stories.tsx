import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Components
import InvestorsTab from "../../widgets/InvestorsTab";

export default {
  title: "Widgets/InvestorsTab",
  component: InvestorsTab,
  argTypes: {},
} as ComponentMeta<typeof InvestorsTab>;

const Template: ComponentStory<typeof InvestorsTab> = (args) => {
  return <InvestorsTab {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  tabs: [
    {
      layout: "textArticle",
      title: "KEY INFORMATION",
      hash: "key-information",
      subTitle1:
        "<div><p>Find out more on all the information to help you track the EssilorLuxottica share.</p><p>Market</p><p>Euronext Paris (Compartment A)</p><p>Codes</p><ul><li>ISIN Code/Euronext Paris: FR0000121667</li><li>Euronext Paris ticker: EL</li><li>Reuters: ESLX.PA</li><li>Bloomberg: EL:FP</li></ul><p>Indices</p><ul><li>Stock Market Indices: CAC40, Euro Stoxx 50</li><li>Employee Shareholding Index: Euronext FAS IAS</li></ul><p>Eligible</p><ul><li>For the Deferred Settlement Service (SRD)</li><li>For the PEA (share savings plan)</li></ul><p>As of December 31, 2022</p><ul><li>Total shares outstanding: 447,688,233</li><li>Par value: €0.18</li></ul></div>",
      subTitle2: "",
      src: "",
      pictures: [],
    },
    {
      layout: "iframe",
      title: "REAL-TIME QUOTATION",
      hash: "real-time-quotation",
      subTitle1:
        "<div><p>Here you will find all the needed information about the EssilorLuxottica share and your status as a company shareholder.</p></div>",
      subTitle2: "",
      src: "https://essilorluxottica.symex.be/rd2/finance.html?language=en",
      pictures: [],
    },
    {
      layout: "textArticle",
      title: "SHAREHOLDING STRUCTURE",
      hash: "shareholding-structure",
      subTitle1:
        '<div><p>Find out more about the breakdown in share capital between the different shareholders.</p><p><br/></p><p>Breakdown of capital as at December 31, 2022</p><p><img data-src="coremedia:///cap/content/101870" data-uritemplate="/caas/v1/media/101870/data/17d452d52958f85e7beefa7ca0b1c6e8/{cropName}/{width}/shareholding-structure-2022.png" alt="Shareholding structure 2022"/></p><p><br/></p><p><br/></p><p><sup>(a)</sup> Estimates as at December 31 of the year</p><p><br/></p></div>',
      subTitle2: "",
      src: "",
      pictures: [],
    },
    {
      layout: "textArticle",
      title: "BEING A SHAREHOLDER",
      hash: "being-a-shareholder",
      subTitle1:
        '<div><p>Becoming an EssilorLuxottica shareholder means participating in the ongoing development of a global company that’s a key player in the eyewear and eyecare industry.</p><p><br/></p><p><strong>How can I hold EssilorLuxottica shares?</strong></p><p><br/></p><p>You can hold EssilorLuxottica shares in bearer form (in which case we will not be informed of your name) or in registered form (in which case the shares will be recorded in your name in a share register, either at the Company or with your bank or broker).</p><ul><li>To purchase registered shares recorded with the Company, please contact BNP Paribas Securities Services as follow:<p>BNP Paribas Securities Services<br/>CTO – Pôle Correspondance<br/>Grands Moulins de Pantin<br/>9 rue du Débarcadère<br/>93500 Pantin</p><p>By the contact form available on the Planetshares website (<a href="https://planetshares.bnpparibas.com/" data-show="new">https://planetshares.bnpparibas.com</a>)</p><p>Call center (dedicated number for ESSILORLUXOTTICA SA) :<br/>France : 01 40 14 46 68<br/>Abroad : +33 (0) 1 40 14 46 68</p></li><li>To purchase registered shares that will be recorded in a securities account opened with your bank or broker or to purchase bearer shares, contact your bank or broker who will then manage the shares on your behalf.</li><li>If you already own EssilorLuxottica bearer shares, you can ask your bank to convert them into registered shares.</li></ul><p><br/></p><p><strong>What are the advantages of holding registered shares?</strong></p><p>There are certain advantages in holding registered shares:</p><ul><li>You will receive regular information about the Company.</li><li>You will automatically receive notices of Shareholders’ Meetings.</li><li>To participate in Shareholders’ Meetings, you don’t have to provide evidence of ownership of the shares.</li><li>You can sell or transfer your shares quickly and easily (by fax, phone or on-line).</li><li>If you register the shares with the Company (as opposed to with your bank or broker), you will not have to pay any custodial or administration fees.</li></ul><p><br/></p><p><strong>What are my rights as a shareholder?</strong></p><p>Your rights as a shareholder include:</p><ul><li>The right to dividends: subject to approval by the shareholders, you may be eligible to receive an annual dividend corresponding to a share of the Company’s earnings.</li><li>The right to information: certain documents, such as the Annual Report and the Registration Document, are available on request. Other shareholder information includes interim results and quarterly revenue figures.</li><li>The right to vote at Shareholders’ Meetings: each share carries a voting right that you can use to vote on the resolutions presented at Shareholders’ Meetings.</li><li>The right to participate in certain capital transactions on preferential terms by exercising pre-emptive subscription rights or allocation rights.</li></ul></div>',
      subTitle2: "",
      src: "",
      pictures: [],
    },
  ],
};
