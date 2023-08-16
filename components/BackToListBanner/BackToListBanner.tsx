import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import { IPictureCrops } from "../../models/ICrops";
// Components
import Column from "../UI/Column/Column";
import Container from "../UI/Container/Container";
import Row from "../UI/Row/Row";
import Icon from "../UI/Icon/Icon";
import Text from "../UI/Text/Text";
import LinkAngle from "../UI/LinkAngle/LinkAngle";
import ResponsivePicture from "../UI/ResponsivePicture/ResponsivePicture";
import useGetTranslatedDate from "../../hooks/useTranslatedDate";
import AppConfig from "../../logic/configs/AppConfig";

interface IBackToListBanner {
  backToListText?: string;
  backgroundImage?: string;
  title: string;
  publishDate: string;
  timeToRead?: string;
  publishText?: string;
  croppings?: IPictureCrops;
}

const BackToListBanner = ({
  backToListText,
  backgroundImage,
  title,
  publishDate,
  croppings,
  timeToRead,
  publishText,
}: IBackToListBanner) => {
  // Hooks
  const router = useRouter();
  const { month, day, year } = useGetTranslatedDate({
    price: { date: publishDate, time: "" },
  });
  
  // Variables
  const arrPage = router.query.page;
  const time = timeToRead;
  const date = `${publishText} ${day} ${AppConfig.toCapitalizeString(month)} ${year}`;

  // Functions
  const handleBackBtn = () => {
    if (!!arrPage) {
      if (arrPage?.length < 1) return;

      const isIndexPos = arrPage?.length >= 0;
      const prevIndex = isIndexPos ? arrPage?.length - 1 : 0;

      const formattedArr = arrPage?.slice(0, prevIndex);
      return (formattedArr as string[]).join("/");
    }
  };

  return (
    <>
      {backgroundImage && (
        <>
          {/* Back */}
          <Row
            width="full"
            maxWidth="screen"
            height="80px"
            m="auto"
            backgroundColor="black"
            alignItems="center"
            padding={{ _: "24px 16px", desktopS: "24px 64px" }}
          >
            {handleBackBtn() && (
              <Link href={handleBackBtn() || "#"}>
                <Row>
                  <Icon type="arrow-left" size={24} color="#fff"></Icon>
                </Row>
              </Link>
            )}
            <Text
              fontSize={{ _: "20px", desktopS: "24px" }}
              color="#fff"
              ml="24px"
            >
              {backToListText}
            </Text>
          </Row>
          <Container
            width="full"
            maxWidth="screen"
            minHeight={{ _: "642px", desktopS: "642px" }}
            position="relative"
            m="auto"
          >
            <Column
              justifyContent="flex-end"
              position="absolute"
              zIndex="2"
              width="full"
              height="full"
            >
              {/* Contents */}
              <Container position="relative">
                <Overlay></Overlay>
                <Column
                  position="relative"
                  width="full"
                  padding={{ _: "32px 16px", desktopS: "40px 64px" }}
                  justifyContent="center"
                >
                  {/* Title */}
                  <Text
                    fontSize={{ _: "32px", desktopS: "48px" }}
                    color="#fff"
                    maxWidth={{ _: "screen3", desktopS: "screen3" }}
                  >
                    {title}
                  </Text>

                  {/* Time */}
                  <Row mt={{ _: "16px", desktopS: "40px" }}>
                    <Row
                      alignItems="center"
                      justifyContent="center"
                      borderRadius="100px"
                      backgroundColor="rgba(255, 255, 255, 0.8)"
                      height="39px"
                      width="141px"
                    >
                      <Icon type="clock" size={18} color="#000" />
                      <Text
                        fontFamily="Avenir Roman"
                        fontSize={{ _: "16px", desktopS: "16px" }}
                        ml={{ _: "8px", desktopS: "8px" }}
                        color="#000"
                      >
                        {time}
                      </Text>
                    </Row>

                    <Row
                      alignItems="center"
                      ml={{ _: "24px", desktopS: "24px" }}
                    >
                      <LinkAngle
                        label={date}
                        iconType="calendar"
                        color="#fff"
                        reverse
                        gap="0.5em"
                        url="#"
                        iconVerticalAlign="sub"
                      />
                    </Row>
                  </Row>
                </Column>
              </Container>
            </Column>

            {/* Background */}
            {!!croppings && (
              <ResponsivePicture
                pictureCrops={[croppings]}
                alt={backgroundImage}
                objectFit="cover"
                name="ArticleTitleAndBody"
                type="widgets"
                src={backgroundImage}
              />
            )}
          </Container>
        </>
      )}
      {/* : (
        // <Row
        //   width="full"
        //   maxWidth="screen"
        //   m="auto"
        //   height="80px"
        //   backgroundColor="black"
        //   alignItems="center"
        //   padding={{ _: "16px 24px", desktopS: "24px 64px" }}
        // >
        //   <Container onClick={handleBackBtn} style={{ cursor: "pointer" }}>
        //     <Icon type="arrow-left" size={24} color="#fff"></Icon>
        //   </Container>
        //   <Text
        //     fontSize={{ _: "20px", desktopS: "24px" }}
        //     color="#fff"
        //     ml="24px"
        //   >
        //     {backToListText}
        //   </Text>
        // </Row>
      )} */}
    </>
  );
};

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(19px);
`;

export default BackToListBanner;
