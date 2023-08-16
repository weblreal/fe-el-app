// Modules
import AppConfig from "../logic/configs/AppConfig";
import Link from "next/link";
import { IFooter, ISocial } from "../models/widgets/IFooter";
import { ILink } from "../models/components/ILink";
import { useRouter } from "next/router";
import { getAnalyticsId } from "../logic/utilities";
// Components
import Flex from "../components/UI/Flex/Flex";
import Column from "../components/UI/Column/Column";
import Text from "../components/UI/Text/Text";
import Hidden from "../components/UI/Hidden/Hidden";
import Row from "../components/UI/Row/Row";
import Icon from "../components/UI/Icon/Icon";
import ReverseTheme from "../components/ReverseTheme/ReverseTheme";
import Logo from "../components/Logo/Logo";
import Container from "../components/UI/Container/Container";
import Button from "../components/UI/Button/Button";

const Footer = (data: IFooter) => {
  // Hooks
  const router = useRouter();

  // Functions
  const renderFooter = () => {
    const a = !!data?.footerData?.links?.length;
    const b = !!data?.footerData?.externalLinks?.length;
    // const c = !!data?.socialData?.length;
    const d = !!data?.subFooterData?.copyright;
    const e = !!data?.subFooterData?.links;

    return a || b || d || e;
  };

  const renderExternalLinks = () => {
    return data?.footerData?.externalLinks?.map((link: ILink, key: number) => (
      <Row
        key={key}
        ml={{ _: "0", desktopS: "24px" }}
        mr={{ _: "24px", desktopS: "0" }}
      >
        <Link prefetch={false} href={link.url} target="_blank">
          <Button variant="link">
            <Row>
              <Text mr="8px">{link.label}</Text>
              <Icon type="external-link" size={24} />
            </Row>
          </Button>
        </Link>
      </Row>
    ));
  };

  return (
    <ReverseTheme>
      {renderFooter() ? (
        <Flex width="full" backgroundColor="background" overflow="hidden">
          <Flex m="auto" maxWidth="screen" flexDirection="column" width="full">
            <Column pb="37px" pt="32px" px={{ _: "16px", desktopS: "64px" }}>
              <Flex
                justifyContent="space-between"
                alignItems={{ _: "start", desktopS: "flex-start" }}
                flexDirection={{ _: "column", desktopS: "row" }}
              >
                <Link
                  prefetch={false}
                  href="/"
                  locale={router.locale}
                  data-element-id={getAnalyticsId("Footer", "Logo")}
                  className="tappable"
                >
                  <Logo footer />
                </Link>
                <Hidden from="desktopS">
                  <Row my="24px">{renderExternalLinks()}</Row>
                </Hidden>
                <Row mt={{ _: 0, desktopS: "1.4px" }}>
                  {data?.socialData?.map((social: ISocial, key: number) => (
                    <Flex
                      key={key}
                      ml={{ _: "0", desktopS: "16px" }}
                      mr={{ _: "16px", desktopS: "0" }}
                    >
                      <Link
                        prefetch={false}
                        href={social.url}
                        target="_blank"
                        data-element-id={getAnalyticsId("Footer", "Share")}
                        className="tappable"
                      >
                        <Icon type={social.icon} size={24} />
                      </Link>
                    </Flex>
                  ))}
                </Row>
              </Flex>
              <Row justifyContent="space-between">
                <Hidden till="desktopS">
                  <Row mt="32px" overflow="hidden" flexWrap="wrap">
                    {data?.footerData?.links?.map(
                      (link: ILink, key: number) => (
                        <Text key={key} mr="16px">
                          <Link
                            prefetch={false}
                            href={link.url}
                            data-element-id={getAnalyticsId(
                              "Footer",
                              link.label
                            )}
                          >
                            <Button variant="link">{link.label}</Button>
                          </Link>
                        </Text>
                      )
                    )}
                  </Row>
                </Hidden>
                <Hidden till="desktopS">
                  <Row mt="32px">{renderExternalLinks()}</Row>
                </Hidden>
              </Row>
            </Column>

            <Container
              backgroundColor="neutral.20"
              width="full"
              height="1px"
            ></Container>
            <Row
              py="16px"
              px={{ _: "16px", desktopS: "64px" }}
              justifyContent="space-between"
            >
              <Text
                fontSize={{ _: "14px", desktopS: "regular" }}
                fontFamily={{ _: "Avenir Bold", desktopS: "Avenir Roman" }}
                fontWeight={{ _: "bolder", desktopS: "normal" }}
              >
                {AppConfig.html(data?.subFooterData?.copyright || "")}
              </Text>
              <Hidden till="desktopS">
                <Row>
                  {data?.subFooterData?.links?.map(
                    (link: ILink, key: number) => (
                      <Text key={key} mr="16px" fontFamily="Avenir Roman">
                        <Link
                          prefetch={false}
                          href={link.url}
                          data-element-id={getAnalyticsId("Footer", link.label)}
                        >
                          <Button variant="link">{link.label}</Button>
                        </Link>
                      </Text>
                    )
                  )}
                </Row>
              </Hidden>
            </Row>
          </Flex>
        </Flex>
      ) : null}
    </ReverseTheme>
  );
};

export default Footer;
