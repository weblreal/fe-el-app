// Modules
import { useState } from "react";
import styled from "styled-components";

// Components
import Column from "../UI/Column/Column";
import Container from "../UI/Container/Container";
import Flex from "../UI/Flex/Flex";
import Text from "../UI/Text/Text";

type ITabProps = {
  children: React.ReactNode;
};

const Tab: React.FC<ITabProps> = ({ children }) => {
  // Variables
  const arrChildren = children as React.ReactNode[];
  const fixedArrChildren = !arrChildren?.length ? [arrChildren] : arrChildren;

  // Hooks
  const [activeTab, setActiveTab] = useState<number>(0);

  // Functions
  const setActiveHandler = (key: number) => {
    setActiveTab(key);
  };

  return (
    <>
      <TabHeader
        zIndex={2}
        pb={2}
        px={{ _: 2, desktopS: 0 }}
        maxWidth="100vw"
        overflowX="auto"
        backgroundTheme
      >
        {/* Tabs */}
        {fixedArrChildren?.map((child: any, key: number) => (
          <Column
            pointer
            key={key}
            onClick={(event: any) => {
              setActiveHandler(key);
              setTimeout(() => {
                event?.target?.scrollIntoView({
                  behavior: "smooth",
                  block: "nearest",
                  inline: "center",
                });
              }, 50);
            }}
          >
            <Text p="18px 21px 18px 21px" style={{ whiteSpace: "nowrap" }}>
              {child?.props?.label}
            </Text>
            {activeTab === key && (
              <ActiveLine backgroundColor="text" layoutId="tab-header" />
            )}
          </Column>
        ))}
      </TabHeader>

      {/* Content */}
      {fixedArrChildren?.map((child: any, key: number) => {
        return activeTab === key ? (
          <Container key={key}>{child}</Container>
        ) : null;
      })}
    </>
  );
};

const ActiveLine = styled(Column)`
  height: 3px;
  width: 100%;
`;

const TabHeader = styled(Flex)`
  ::-webkit-scrollbar {
    appearance: none;
  }
`;

export default Tab;
