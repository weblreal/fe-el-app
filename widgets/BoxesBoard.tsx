import AppConfig from "../logic/configs/AppConfig";
import { useContext } from "react";
import { IBoard, IBoxesBoard } from "../models/widgets/IBoxesBoard";
import { ThemeContext } from "styled-components";
// Components
import Flex from "../components/UI/Flex/Flex";
import Column from "../components/UI/Column/Column";
import Text from "../components/UI/Text/Text";
import Hidden from "../components/UI/Hidden/Hidden";
import Picture from "../components/UI/Picture/Picture";
import styled from "styled-components";
import Row from "../components/UI/Row/Row";
import Link from "next/link";
import LinkAngle from "../components/UI/LinkAngle/LinkAngle";
import Button from "../components/UI/Button/Button";
import Icon from "../components/UI/Icon/Icon";
import Container from "../components/UI/Container/Container";

const BoxesBoard = ({ title, boards, cta }: IBoxesBoard) => {
  const theme = useContext(ThemeContext);
  // Functions
  //The funtion below is only limited to 2 elements/board ONLY
  const renderBoard = () => {
    var boardsElem = boards?.slice(0, 2); //Limiting up to 2 elements Only
    return boardsElem?.map((board: IBoard, key: number) => {
      return (
        <Board
          key={key}
          justifyContent={{ _: "end", tablet: "start" }}
          width={{ _: "100%", tablet: "50%" }}
          mb="24px"
        >
          <Link prefetch={false} href={board?.cta?.url || "#"}>
            <Flex width="full" height={{ _: "400px", desktopXL: "600px" }}>
              <Picture
                src={board.backgroundImage}
                alt={board?.title || board.backgroundImage}
              />
            </Flex>
          </Link>
          <Column mt="24px" height="full" justifyContent="space-between">
            <Text
              fontSize={{ _: "24px", tablet: "32px" }}
              mb="16px"
              fontFamily="Avenir Bold"
              fontWeight="bolder"
              letterSpacing={{ _: "0.24px", tablet: "0.32px" }}
              lineHeight={{ _: "24px", tablet: "32px" }}
            >
              {AppConfig.html(board?.title)}
            </Text>
            <Position
              fontSize={{ _: "18px", tablet: "24px" }}
              mb="24px"
              color={theme.colors.neutral[70]}
            >
              {AppConfig.html(board?.subTitle)}
            </Position>
            {board?.cta && (
              <Row>
                <LinkAngle
                  gap={0}
                  label={board?.cta?.label}
                  url={board?.cta?.url}
                  fontSize={{ _: "16px", tablet: "24px" }}
                />
              </Row>
            )}
          </Column>
        </Board>
      );
    });
  };

  return (
    <Column
      m="auto"
      width="full"
      maxWidth="screen"
      backgroundColor="background"
      p={{ _: "24px 16px", tablet: "72px 64px" }}
    >
      <Row
        width="full"
        mb={{ _: "24px", tablet: "32px" }}
        justifyContent="space-between"
        alignItems="center"
      >
        <Text
          fontSize={{ _: "28px", tablet: "32px" }}
          fontFamily={{ _: "Avenir Medium" }}
          fontWeight={{ _: 500 }}
        >
          {AppConfig.html(title)}
        </Text>
        <Hidden till="tablet">
          {cta && (
            <LinkAngle
              gap={1}
              label={cta?.label}
              url={cta?.url}
              fontSize="24px"
              fontFamily="Avenir Light"
              iconVerticalAlign="sub"
            />
          )}
        </Hidden>
      </Row>
      <Flex size="full" flexDirection={{ _: "column", tablet: "row" }}>
        {renderBoard()}
      </Flex>

      <Hidden from="desktopS">{cta && <MobileCta cta={cta} />}</Hidden>
    </Column>
  );
};

const Board = styled(Column)`
  position: relative;

  &:not(:last-of-type) {
    margin-right: 40px;
  }
`;

const Position = styled(Text)`
  text-transform: uppercase;
`;

interface IMobileCTA {
  cta: {
    label: string;
    url: string;
  };
}

const MobileCta = ({ cta }: IMobileCTA) => {
  return (
    <Container mt={{ _: 5 }} mb={{ _: 7 }}>
      <Link href={cta.url}>
        <Button variant="secondary" minWidth="100%">
          <Flex width="full">
            <Text fontFamily="Avenir Light" fontWeight="light">
              {cta?.label}
            </Text>
          </Flex>

          <Icon type="angle-right" size={24} />
        </Button>
      </Link>
    </Container>
  );
};

export default BoxesBoard;
