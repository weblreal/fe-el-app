// Modules
import AppConfig from "../../logic/configs/AppConfig";
import Link from "next/link";
import styled from "styled-components";
import useGetTranslatedDate from "../../hooks/useTranslatedDate";
import { IBrandsNews } from "../../models/widgets/IBrandsNewsRow";
import { useState } from "react";
import { useRouter } from "next/router";
// Components
import Icon from "../UI/Icon/Icon";
import Text from "../UI/Text/Text";
import Column from "../UI/Column/Column";
import Row from "../UI/Row/Row";
import Container from "../UI/Container/Container";
import Flex from "../UI/Flex/Flex";
import LinkAngle from "../UI/LinkAngle/LinkAngle";
import Shadow from "../UI/Shadow/Shadow";
import ShareModal from "../ShareModal/ShareModal";
import Modal from "../Modal/Modal";
import TextEllipsis from "../TextEllipsis/TextEllipsis";
import ResponsivePicture from "../UI/ResponsivePicture/ResponsivePicture";

const CardBrandsNews = ({
  date,
  title,
  cta,
  share,
  tagArray,
  picture,
  tagCta,
  tagCtaSelf,
}: IBrandsNews) => {
  // Hooks
  const [modal, setModal] = useState(false);
  const router = useRouter();
  const fallBackUrl = !tagCta?.url ? router.asPath?.split("/")?.slice(0, router.asPath?.split("/").length - 2)?.join("/") : `${tagCta?.url?.split("#")?.[0]}`;
  const { day, month, year } = useGetTranslatedDate({price: { date: date || "", time: "" }});

  return (
    <Shadow
      boxShadow="Card Border"
      width="full"
      maxWidth={{ _: "full", desktopXL: "436px" }}
      minHeight={{ _: "472px", desktopXL: "549px" }}
      height="full"
    >
      <Column
        mb="1px"
        position="relative"
        backgroundColor="transparent"
        height="full"
      >
        {!!picture?.length && (
          <Link prefetch={false} href={cta?.url || ""}>
            <Flex
              width="full"
              height={{ _: 220, desktopXL: 303 }}
              position="relative"
            >
              <ResponsivePicture
                alt={title || "bg"}
                src=""
                pictureCrops={picture}
                name="CardBrandNews"
                type="components"
                isAkamai={false}
              />
            </Flex>
          </Link>
        )}

        {/* Tag */}
        {tagArray && tagArray?.length > 0 && (
          <Flex position="absolute" flexWrap="wrap" left={2} top={2}>
            {tagArray.map((tag: any, key: number) => (
              <Link key={key} href={tagCtaSelf ? `#S__${tag[router.locale || "en"]}` : `${fallBackUrl}#S__${tag[router.locale || "en"]}`}>
                <Container mb={1}>
                  {key < 2 && (
                    <Container
                      py={1}
                      px={2}
                      backgroundColor="rgba(0, 0, 0, 0.4)"
                      borderRadius={{ _: 100, tablet: 100 }}
                      width="fit-content"
                      noSelect
                      marginRight="5px"
                    >
                      <Text color="white" fontFamily="Avenir Roman">
                        {tag?.[router.locale || "en"]?.toLocaleUpperCase()}
                      </Text>
                    </Container>
                  )}
                  {key == 2 && (
                    <Container
                      py={1}
                      px={2}
                      backgroundColor="rgba(0, 0, 0, 0.4)"
                      borderRadius={{ _: 100, tablet: 100 }}
                      width="fit-content"
                      noSelect
                      key={key}
                      marginRight="5px"
                    >
                      <Text color="white" fontFamily="Avenir Roman">
                        + {tagArray.length - 2}
                      </Text>
                    </Container>
                  )}
                </Container>
              </Link>
            ))}
          </Flex>
        )}

        <Column p="32px 24px" width="full" height="full">
          {/* Date */}
          {date && (
            <Text fontSize="h5" color="#6d6e71" mb="8px">
              {day} {AppConfig.toCapitalizeString(month)} {year}
            </Text>
          )}

          {/* Title */}
          {title && (
            <Column>
              <Text
                fontWeight={{ _: "bolder", tablet: "bolder" }}
                fontFamily={{ _: "Avenir Bold", tablet: "Avenir Black" }}
                fontSize="22px"
                minHeight="120px"
                mb="8px"
              >
                <Title prefetch={false} href={cta?.url || ""}>
                  <TextEllipsis lineCountD={3} lineCountM={3}>
                    {AppConfig.html(title)}
                  </TextEllipsis>
                </Title>
              </Text>
            </Column>
          )}

          {/* CTA */}
          {cta && cta.url && (
            <Row justifyContent="space-between" mt="auto">
              <LinkAngle
                label={cta.label}
                url={cta.url}
                fontSize="h5"
                // fontWeight={{ _: "normal", tablet: "bold" }}
                fontFamily={{ _: "Avenir Bold", tabet: "Avenir Regular" }}
                gap={0}
                iconVerticalAlign="top"
              />
              <Container pointer onClick={() => setModal(true)} className="tappable">
                <Icon type="upload" size={24} color="#1890ff" />
              </Container>
            </Row>
          )}
        </Column>
        <Modal
          portalId="#portal"
          show={modal}
          openModalHandler={() => setModal(false)}
        >
          <ShareModal
            closeHandler={() => setModal(false)}
            {...share}
            label=""
            url={share?.url || "#"}
          />
        </Modal>
      </Column>
    </Shadow>
  );
};

const Title = styled(Link)`
  &:hover {
    text-decoration: underline;
  }
`;

export default CardBrandsNews;
