import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
// Components
import BoardOfDirectors from "../../widgets/BoardOfDirectors";

export default {
  title: "Widgets/BoardOfDirectors",
  component: BoardOfDirectors,
  argTypes: {},
} as ComponentMeta<typeof BoardOfDirectors>;

const Template: ComponentStory<typeof BoardOfDirectors> = (args) => {
  return <BoardOfDirectors {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  title: "-",
  directors: [
    {
      imgAlt: "FrancescoMilleri_inside",
      imgUrl:
        "https://preview-stageuatessilorluxottica.luxgroup.net/caas/v1/media/97090/data/picture/558ba41a0228c0fa1beeea16fa1b7e74.jpg",
      name: "Francesco Milleri",
      position: "CHAIRMAN AND CEO",
      route: "en/governance/board-directors/francesco-milleri",
    },
    {
      imgAlt: "Pauldusaillant_inside",
      imgUrl:
        "https://preview-stageuatessilorluxottica.luxgroup.net/caas/v1/media/97158/data/picture/d85ca7ccfe448cb291fbf5078f6d55af.jpg",
      name: "Paul du Saillant",
      position: "DEPUTY CEO",
      route: "en/governance/board-directors/paul-du-saillant",
    },
    {
      imgAlt: "DirectPic#2",
      imgUrl:
        "https://preview-stageuatessilorluxottica.luxgroup.net/caas/v1/media/97108/data/picture/b51c1340a634eeaf7ef0b4fb6b877fe4.jpg",
      name: "Margot Bard",
      position: "Directors representing employees",
      route: "en/governance/board-directors/margot-bard",
    },
    {
      imgAlt: "DirectPic#2",
      imgUrl:
        "https://preview-stageuatessilorluxottica.luxgroup.net/caas/v1/media/97000/data/picture/ad5aba4e434aea3605add3e0fcc4e9e5.jpg",
      name: "Romolo Bardin",
      position: "Non-Independent Director",
      route: "en/governance/board-directors/romolo-bardin",
    },
    {
      imgAlt: "EL_Governance_JeanLucBiamonti",
      imgUrl:
        "https://preview-stageuatessilorluxottica.luxgroup.net/caas/v1/media/96972/data/picture/c726de8fcdc0457cdf1b45f25d7f8004.jpg",
      name: "Jean-Luc Biamonti",
      position: "Lead Director (Independent)",
      route: "en/governance/board-directors/jean-luc-biamonti",
    },
    {
      imgAlt: "EL_Governance_SebastienBrown",
      imgUrl:
        "https://preview-stageuatessilorluxottica.luxgroup.net/caas/v1/media/97172/data/picture/f926b534ee37538cfcc0031afe494522.jpg",
      name: "Sébastien Brown",
      position: "DIRECTORS REPRESENTING EMPLOYEES",
      route: "en/governance/board-directors/sebastien-brown",
    },
    {
      imgAlt: "EL_Governance_MarieChristineCoisneRoquette",
      imgUrl:
        "https://preview-stageuatessilorluxottica.luxgroup.net/caas/v1/media/97120/data/picture/89fe42179eadeaf86dff34097266eaf8.jpg",
      name: "Marie-Christine Coisne-Roquette",
      position: "INDEPENDENT DIRECTOR",
      route: "en/governance/board-directors/marie-christine-coisne-roquette",
    },
    {
      imgAlt: "EL_Governance_JoseGonzalo",
      imgUrl:
        "https://preview-stageuatessilorluxottica.luxgroup.net/caas/v1/media/97030/data/picture/e80795d319af9bbe688a9407752de35c.jpg",
      name: "José Gonzalo",
      position: "INDEPENDENT DIRECTOR",
      route: "en/governance/board-directors/jose-gonzalo",
    },
    {
      imgAlt: "EL_Governance_MarioNotari",
      imgUrl:
        "https://preview-stageuatessilorluxottica.luxgroup.net/caas/v1/media/97136/data/picture/3728d9dc49f404f3c13d9eb82d6f45ea.jpg",
      name: "Mario Notari",
      position: "Non-Independent Director",
      route: "en/governance/board-directors/mario-notari",
    },
    {
      imgAlt: "EL_Governance_SwatiAPiramal",
      imgUrl:
        "https://preview-stageuatessilorluxottica.luxgroup.net/caas/v1/media/97044/data/picture/f1b12bb867063da14583425c4c5832ec.jpg",
      name: "Swati A. Piramal",
      position: "Independent Director",
      route: "en/governance/board-directors/swati-piramal",
    },
    {
      imgAlt: "EL_Governance_VirginieMercierPitre",
      imgUrl:
        "https://preview-stageuatessilorluxottica.luxgroup.net/caas/v1/media/97072/data/picture/4886da2fc1993223c3863ba7c4a1c160.jpg",
      name: "Virginie Mercier Pitre",
      position: "DIRECTOR REPRESENTING VALOPTEC ASSOCIATION",
      route: "en/governance/board-directors/virginie-mercier-pitre",
    },
    {
      imgAlt: "EL_Governance_CristinaScocchia",
      imgUrl:
        "https://preview-stageuatessilorluxottica.luxgroup.net/caas/v1/media/96984/data/picture/6ba18397d675b0af5ec580d735bec01c.jpg",
      name: "Cristina Scocchia",
      position: "INDEPENDENT DIRECTOR",
      route: "en/governance/board-directors/cristina-scocchia",
    },
    {
      imgAlt: "EL_Governance_NathalieVonSiemens",
      imgUrl:
        "https://preview-stageuatessilorluxottica.luxgroup.net/caas/v1/media/97058/data/picture/9ae0de3973aa7a94e48e05c2bc7a4992.jpg",
      name: "Nathalie von Siemens",
      position: "INDEPENDENT DIRECTOR",
      route: "en/governance/board-directors/nathalie-von-siemens",
    },
    {
      imgAlt: "EL_Governance_AndreaZappia",
      imgUrl:
        "https://preview-stageuatessilorluxottica.luxgroup.net/caas/v1/media/97016/data/picture/ebbbef35e98713a446860d7b8437828a.jpg",
      name: "Andrea Zappia",
      position: "Independent Director",
      route: "en/governance/board-directors/andrea-zappia",
    },
  ],
};
