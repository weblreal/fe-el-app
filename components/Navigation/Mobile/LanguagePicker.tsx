// Modules
import axios from "axios";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { elSegmentRemoval } from "../../../logic/utilities";
import { AnimatePresence } from "framer-motion";
// Components
import Center from "../../UI/Center/Center";
import { GridRow } from "../../UI/Grid/Grid";
import Icon from "../../UI/Icon/Icon";
import Span from "../../UI/Span/Span";
import Text from "../../UI/Text/Text";
import LongText from "../../UI/LongText/LongText";
import Flex from "../../UI/Flex/Flex";
import AppConfig from "../../../logic/configs/AppConfig";
import Container from "../../UI/Container/Container";

const LanguagePicker = ({}) => {
  // Hooks
  const [open, setOpen] = useState<boolean>(false);
  const [region, setRegion] = useState<string>("");
  const [paths, setPaths] = useState<any>([]);
  const router = useRouter();

  // Handlers
  const handleChangeRegion = (url: string) => {
    let href = `${origin}/${url}/`;
    // const id = window.location.href.split("#")?.[1];
    // if (id) href += `#${id}`;
    window.location.href = href;
  };

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

  const sortedRegions = paths?.sort((a: any, b: any) =>
    a?.region?.localeCompare(b?.region)
  );

  return (
    <>
      <GridRow
        py={21}
        px={2}
        pointer
        borderTop="thin"
        borderColor="neutral.10"
        position="relative"
        onClick={() => setOpen((prev) => !prev)}
      >
        <Center justifyContent="space-between" noSelect>
          <Text fontSize="h5" capitalize>
            <Span fontWeight="bold">{region}</Span>
          </Text>

          <Flex position="absolute" right={16}>
            {open && <Icon type="angle-up" size={32} />}
            {!open && <Icon type="angle-down" size={32} />}
          </Flex>
        </Center>
      </GridRow>

      <AnimatePresence>
        {open && (
          <Container
            variants={AppConfig.setAnimationVariant("EXPAND_VARIANT_NO_DELAY")}
            animate="animate"
            initial="initial"
            exit="exit"
          >
            <Center>
              <UnorderedList>
                {sortedRegions?.map((path: any, key: number) => (
                  <List key={key} onClick={() => handleChangeRegion(path?.url)}>
                    <LongText
                      fontSize={18}
                      fontWeight={
                        region === getLanguageName(path?.region) ? 900 : 300
                      }
                    >
                      {getLanguageName(path?.region)}
                    </LongText>
                  </List>
                ))}
              </UnorderedList>
            </Center>
          </Container>
        )}
      </AnimatePresence>
    </>
  );
};

const UnorderedList = styled.ul`
  list-style-type: none;
  width: 100%;
  background-color: ${(props) => props.theme.colors.neutral["5"]};
  padding-left: 0;
`;
const List = styled.li`
  padding: 16px;
`;

export default LanguagePicker;
