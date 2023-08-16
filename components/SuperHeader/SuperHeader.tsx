// Modules
import axios from "axios";
import dark from "../../themes/dark";
import styled from "styled-components";
import { useRouter } from "next/router";
import { ISuperHeader } from "./ISuperHeader";
import { ThemeContext } from "../../context/ThemeContextProvider";
import { useContext, useEffect, useState } from "react";
import {
  useFetchFinanceDataQuery,
  useFetchFinancialCTAQuery,
} from "../../redux/slices/Financial/FinancialAPI";
import useGetTranslatedDate from "../../hooks/useTranslatedDate";
import { elSegmentRemoval } from "../../logic/utilities";
import { useAppSelector } from "../../redux/hooks";
import useClickedOutside from "../../hooks/useClickedOutside";
import Link from "next/link";
// Components
import Flex from "../UI/Flex/Flex";
import Text from "../UI/Text/Text";
import Span from "../UI/Span/Span";
import Toggle from "../UI/Toggle/Toggle";
import Grid, { GridColumn } from "../UI/Grid/Grid";
import Container from "../UI/Container/Container";
import LinkAngle from "../UI/LinkAngle/LinkAngle";
import LongText from "../UI/LongText/LongText";
import ReverseTheme from "../ReverseTheme/ReverseTheme";

const origin = globalThis?.window?.location?.origin;

const SuperHeader = ({}: ISuperHeader) => {
  // Hooks
  const { toggleCurrentTheme, currentTheme } = useContext(ThemeContext);
  const { data: price } = useFetchFinanceDataQuery({});
  const { saveEnergyToggleText, sharePriceText, target, targetTag } =
    useAppSelector((state) => state.FinancialSlice);
  const { fullDate } = useGetTranslatedDate({ price: price });

  // Get Financial CTA
  const link = target?.split("///")?.[1]?.split("]")?.[0];
  const id = link?.split("/")?.[2];
  const { data } = useFetchFinancialCTAQuery({ id });

  // Functions
  const setBackgroundColor = () => {
    if (currentTheme === "Dark Theme") return "#1A1A1A";
    if (currentTheme === "Light Theme") return "black";
  };

  return (
    <Container backgroundColor={setBackgroundColor()}>
      <Grid
        minHeight={50}
        px={8}
        gridTemplateColumns="1fr 1fr 1fr"
        maxWidth="screen"
        m="auto"
        width="100%"
      >
        <GridColumn justifyContent="start">
          {price?.value && data && (
            <FlexLink href={`${data}${targetTag}`}>
              <SharePrice
                transparent
                color="white"
                fontFamily="Avenir Light"
                fontWeight="light"
              >
                {sharePriceText} &euro;
                {price?.value}
                <Span
                  theme={dark}
                  color={price?.changes?.includes("-") ? "white" : "success"}
                  fontWeight="bold"
                  fontFamily="Avenir Bold"
                >
                  &nbsp;{price.changes}%
                </Span>
                &nbsp;- {fullDate}
              </SharePrice>
            </FlexLink>
          )}
        </GridColumn>

        <GridColumn justifyContent="center">
          <Flex alignItems="center">
            <Text
              transparent
              color="white"
              mr={17.1}
              fontFamily="Avenir Light"
              fontWeight="light"
              minHeight="22px"
            >
              {saveEnergyToggleText}
            </Text>
            <Toggle
              onChange={toggleCurrentTheme}
              checked={currentTheme === "Dark Theme"}
            />
          </Flex>
        </GridColumn>

        <GridColumn justifyContent="end" alignSelf="center">
          <RegionSelector />
        </GridColumn>
      </Grid>
    </Container>
  );
};

const RegionSelector = () => {
  // Hooks
  const [open, setOpen] = useState(false);
  const [region, setRegion] = useState<string>("");
  const [paths, setPaths] = useState<any>([]);
  const router = useRouter();
  const { ref } = useClickedOutside({
    trigger: open,
    callBack: () => setOpen(false),
  });

  // Handlers
  const handleChangeRegion = (url: string) => {
    let href = `${origin}/${url}/`;
    // const id = window.location.href.split("#")?.[1];
    // if (id) href += `#${id}`;
    window.location.href = href;
  };

  // Effects
  useEffect(() => {
    axios
      .get(`${origin}/api/getRelatedPaths`, {
        params: {
          path: `el-${router.locale}${router.asPath}`
            ?.split("?")?.[0]
            ?.split("#")?.[0],
        },
      })
      .then((res) => {
        const variants = res.data?.data?.content?.pageByPath?.localizedVariants;
        const paths = variants
          ?.map((variant: any) => {
            const segments = variant?.navigationPath?.map((path: any) =>
              elSegmentRemoval(path?.segment)
            );
            const region = segments?.[0];
            const url = segments?.join("/");
            return { region, url };
          })
          .filter((path: any) => path?.region !== "ww" && router.locales?.includes(path?.region));

        setPaths(paths);
      });
  }, [router.asPath, router.locale, router.locales]);

  useEffect(() => {
    setRegion(getLanguageName(router.locale || "en") || "English");
  }, [router]);

  // Functions
  const getLanguageName = (isoCode: string) => {
    try {
      const langName = new Intl.DisplayNames([isoCode || "en"], {
        type: "language",
      });

      const str = langName.of(isoCode);
      const str2 = (str || "").charAt(0).toUpperCase() + (str || "").slice(1);

      return str2;
    } catch (_) {}
  };

  const sortedRegions = paths?.sort((a: any, b: any) =>
    a?.region?.localeCompare(b?.region)
  );

  return (
    <RegionDropdown
      position="relative"
      onClick={() => setOpen((prev) => !prev)}
      ref={ref}
    >
      <LinkAngle
        iconType={open ? "angle-up" : "angle-down"}
        color="white"
        gap={0}
        label={region}
        url="#"
        fontSize={16}
      />

      <ReverseTheme>
        <Container
          position="absolute"
          display={open ? "initial" : "none"}
          className="option__wrapper--show"
          width="fit-content"
          right={0}
          top={29}
        >
          <Options>
            {sortedRegions?.map((path: any, key: number) => (
              <li key={key} onClick={() => handleChangeRegion(path?.url)}>
                <LongText fontSize={18}>
                  {getLanguageName(path?.region)}
                </LongText>
              </li>
            ))}
          </Options>
        </Container>
      </ReverseTheme>
    </RegionDropdown>
  );
};

const RegionDropdown = styled(Container)``;

const Options = styled.ul`
  background-color: ${(props) => props.theme.colors.background};
  width: 100%;
  min-width: 144px;

  padding: 0;
  margin-top: 0.5em;
  list-style: none;

  li {
    padding: 10.5px 18px;
    cursor: pointer;

    &:hover {
      background-color: ${(props) => props.theme.colors.neutral["30"]};
      color: ${(props) => props.theme.colors.text};
    }
  }
`;

const SharePrice = styled(Text)`
  white-space: nowrap;
  display: flex;
  align-items: center;
`;

const FlexLink = styled(Link)`
  display: flex;
  align-items: center;
`;

export default SuperHeader;
