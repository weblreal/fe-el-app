import { useState } from "react";
import AppConfig from "../logic/configs/AppConfig";
import { IBoxesCard } from "../models/widgets/IBoxesCard";
import { isEmpty } from "lodash";
import { ICta } from "../models/components/ICta";

// Components
import Container from "../components/UI/Container/Container";
import Flex from "../components/UI/Flex/Flex";
import LinkAngle from "../components/UI/LinkAngle/LinkAngle";
import LongText from "../components/UI/LongText/LongText";
import Header from "../components/UI/Header/Header";
import Hidden from "../components/UI/Hidden/Hidden";

const { html } = AppConfig;
const CardTitle = ({ color, title }: { color: string; title: string }) => (
  <Header
    color={color !== "" ? "#000000" || "black" || "#000" ? "text" : `${color}` : "text"}
    fontSize={{ _: 28, tablet: 32 }}
    fontFamily="Avenir Bold"
    fontWeight="900"
    element="h1"
    pb={2}
  >
    {html(title)}
  </Header>
);

const CardDescription = ({
  description,
  cta,
}: {
  description: string;
  cta: { path: string; text: string };
}) => {
  const { path, text } = cta || "";
  return (
    <LongText
      fontSize={{
        _: 18,
        tablet: 24,
      }}
      pb={path !== "" && text !== "" ? 5 : 0}
    >
      {html(description)}
    </LongText>
  );
};

const CardCta = ({ cta }: { cta: ICta[] }) => {
  return (
    <>
      {cta?.map((link: ICta, key: number) => (
        <LinkAngle
          label={link.label}
          fontSize={{
            _: 18,
            tablet: 24,
          }}
          fontFamily="Avenir Regular"
          gap={0}
          url={link.url}
          isExternal={link.isExternal}
          key={key}
          color={link.isExternal ? "#1890ff" : undefined}
        />
      ))}
    </>
  );
};

const BoxesCard = ({ headerTitle, left, right, mobile }: IBoxesCard) => {
  const [hovered, setHovered] = useState<Boolean>(false);
  const [hoveredCard, setHoveredCard] = useState<String>("");

  const handleHoveredCard = (data: any) => {
    const { title } = data;
    setHovered(true);
    setHoveredCard(title);
  };

  const handleResetCard = () => {
    setHovered(false);
    setHoveredCard("");
  };

  return (
    <Container
      margin="0 auto"
      mt={{ _: 0, tablet: headerTitle ? 10 : 0 }}
      px={{
        _: 2,
        desktopS: 0,
      }}
    >
      {/* Header */}
      {headerTitle && (
        <Header
          fontFamily="Avenir Medium"
          fontSize={{
            _: 32,
            tablet: 48,
          }}
          fontWeight="500"
          pb={1}
          pt={5}
          textAlign="center"
          element="h1"
        >
          {html(headerTitle)}
        </Header>
      )}

      {/* Boxes */}
      <Hidden till="desktopS">
        <Flex
          alignItems="center"
          justifyContent="center"
          flex="1 1 526px"
          flexWrap="wrap"
          position="relative"
        >
          {/* Left */}
          <Container
            pr={{
              desktopS: 2,
            }}
          >
            {!isEmpty(left) &&
              left &&
              left?.map((data: any, key: number) => (
                <Container
                  key={key}
                  maxWidth="526px"
                  my={{
                    _: 3,
                    tablet: 4,
                  }}
                  onMouseEnter={() => handleHoveredCard(data)}
                  onMouseLeave={() => handleResetCard()}
                  p={{
                    _: 4,
                    tablet: 5,
                  }}
                  style={
                    hovered &&
                    hoveredCard === data?.title &&
                    data?.cardBgColor !== ""
                      ? {
                          backgroundColor: `${data?.cardBgColor}`,
                          border: "1px solid #bcbec0",
                        }
                      : { border: "1px solid #bcbec0" }
                  }
                >
                  <CardTitle color={data?.cardTitleColor} title={data?.title} />
                  <CardDescription
                    cta={data?.cta}
                    description={data?.description}
                  />
                  {!isEmpty(data?.cta) && <CardCta cta={data?.cta || []} />}
                </Container>
              ))}
          </Container>

          {/* Right */}
          <Container
            pl={{
              tablet: 2,
            }}
          >
            {!isEmpty(right) &&
              right &&
              right?.map((data: any, key: number) => (
                <Container
                  key={key}
                  maxWidth="526px"
                  my={{
                    _: 3,
                    tablet: 4,
                  }}
                  onMouseEnter={() => handleHoveredCard(data)}
                  onMouseLeave={() => handleResetCard()}
                  p={{
                    _: 4,
                    tablet: 5,
                  }}
                  style={
                    hovered &&
                    hoveredCard === data?.title &&
                    data?.cardBgColor !== ""
                      ? {
                          backgroundColor: `${data?.cardBgColor}`,
                          border: "1px solid #bcbec0",
                        }
                      : { border: "1px solid #bcbec0" }
                  }
                >
                  <CardTitle color={data?.cardTitleColor} title={data?.title} />
                  <CardDescription
                    cta={data?.cta}
                    description={data?.description}
                  />
                  {!isEmpty(data?.cta) && <CardCta cta={data?.cta || []} />}
                </Container>
              ))}
          </Container>
        </Flex>
      </Hidden>

      {/* Mobile */}
      <Hidden from="desktopS">
        <Container>
          {!isEmpty(mobile) &&
            mobile &&
            mobile?.map((data: any, key: number) => (
              <Container
                key={key}
                my={3}
                onMouseEnter={() => handleHoveredCard(data)}
                onMouseLeave={() => handleResetCard()}
                p={{
                  _: 4,
                  tablet: 5,
                }}
                style={
                  hovered &&
                  hoveredCard === data?.title &&
                  data?.cardBgColor !== ""
                    ? {
                        backgroundColor: `${data?.cardBgColor}`,
                        border: "1px solid #bcbec0",
                      }
                    : { border: "1px solid #bcbec0" }
                }
              >
                <CardTitle color={data?.cardTitleColor} title={data?.title} />
                <CardDescription
                  cta={data?.cta}
                  description={data?.description}
                />
                {!isEmpty(data?.cta) && <CardCta cta={data?.cta || []} />}
              </Container>
            ))}
        </Container>
      </Hidden>
    </Container>
  );
};

export default BoxesCard;
