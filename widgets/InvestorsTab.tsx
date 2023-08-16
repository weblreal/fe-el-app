import AppConfig from "../logic/configs/AppConfig";
import { useEffect, useState } from "react";
import { IInvestorsTab } from "../models/widgets/IInvestorsTab";
// Components
import styled from "styled-components";
import Container from "../components/UI/Container/Container";
import Flex from "../components/UI/Flex/Flex";
import Text from "../components/UI/Text/Text";

type Props = {
  tabs: IInvestorsTab[];
};

const InvestorsTab = ({ tabs }: Props) => {
  // Hooks
  const [hash, setHash] = useState<string>("");  
  const [selectedTab, setSelectedTab] = useState<string>(hash);
  const [selectedLink, setSelectedLink] = useState<number | null>(0);

  // Handlers
  const handleSelect = (selected: string) => {
    window.location.hash = selected;
    setSelectedTab(`#${selected}`);
  };

  const tabHandler = (event: any) => {
    // Scroll To View
    event.target.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  };

  // Events
  useEffect(() => {
    const hash = globalThis?.window?.location?.hash;
    const hashIndex = tabs?.findIndex((tab) => tab.hash === hash?.split("#")?.[1])

    if (hash) {
      setHash(`${hash}`);
      setSelectedTab(`${hash}`);
      setSelectedLink(hashIndex);
    } else {
      setSelectedTab(`#${tabs[0].hash}`);
    }
  }, [tabs]);

  const allTabs = tabs?.map((tab) => ({ ...tab }));
  return (
    <Container overflow="hidden">
      {/* Tabs */}
      <Tab
        backgroundColor="transparent"
        maxWidth="screen"
        width="full"
        height="69px"
        overflowX="auto"
        margin="0 auto"
        paddingLeft={{ _: 0, desktopS: "90px" }}
      >
        {allTabs.map((tab: IInvestorsTab, index: number) => (
          <Tab
            pointer
            position="relative"
            p="18px 21px 18px 21px"
            width="fit content"
            height="100%"
            justifyContent="center"
            key={index}
            onClick={(event: any) => {
              setSelectedLink(index);
              handleSelect(tab.hash);
              tabHandler(event);
            }}
          >
            <TabLabel textAlign="center">{tab.title}</TabLabel>

            {selectedLink === index && <ActiveLine layoutId="tab-bg-id-m" />}
          </Tab>
        ))}
      </Tab>

      {/* Tab contents */}
      <Container maxWidth="screen" width="full" m="auto" minHeight={600}>
        {allTabs.map((tab: IInvestorsTab, index: number) => (
          <Container
            key={index}
            display={`#${tab.hash}` === selectedTab ? "block" : "none"}
            maxWidth="1200px"
            margin="30px auto 30px"
          >
            {tab.layout === "textArticle" && (
              <TextWrapper px={2}>
                <Text>{AppConfig.html(tab.subTitle1)}</Text>
              </TextWrapper>
            )}

            {tab.layout === "iframe" && <Iframe src={tab.src}></Iframe>}
          </Container>
        ))}
      </Container>
    </Container>
  );
};

const Iframe = styled.iframe`
  width: 100%;
  height: 1895px;
  padding-left: 24px;
  padding-right: 24px;
`;

const TextWrapper = styled(Container)`
  p {
    font-size: 19px;
    margin-bottom: 10px;
  }

  ul {
    font-size: 19px;
    padding-left: 1.2em;
    margin: 20px 0 20px 0;
  }

  table {
    tbody {
      tr {
        &:first-child {
          background-color: black;
          color: white;
        }
      }

      tr:not(:first-child) {
        td:first-child {
          background-color: #8080802d;
        }
      }

      tr,
      td {
        padding: 1em;
        vertical-align: top;
      }
    }
  }
`;

const ActiveLine = styled(Container)`
  height: 3px;
  width: 100%;
  background-color: ${(props) => props.theme.colors.text};

  position: absolute;
  bottom: 0;
  left: 0;
`;

const Tab = styled(Flex)`
  ::-webkit-scrollbar {
    appearance: none;
  }
`;

const TabLabel = styled(Text)`
  white-space: nowrap;
  display: flex;
  align-items: center;
`;

export default InvestorsTab;
