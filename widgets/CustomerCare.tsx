// Modules
import {
  IBrandsSelection,
  ICustomerCare,
} from "../models/widgets/ICustomerCare";
import AppConfig from "../logic/configs/AppConfig";
import { Nullable } from "../models/Nullable.interface";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import useForm from "../hooks/useForm";
import useScrollIntoView from "../hooks/useScrollIntoView";
import useCustomerCareResult from "../hooks/useCustomerCareResult";
import styled from "styled-components";

// Components
import BrandsGridItem from "../components/BrandsGridItem/BrandsGridItem";
import Container from "../components/UI/Container/Container";
import Grid, { GridColumn } from "../components/UI/Grid/Grid";
import Header from "../components/UI/Header/Header";
import Text from "../components/UI/Text/Text";
import Dropdown from "../components/Dropdown/Dropdown";

const CustomerCare: React.FC<ICustomerCare> = ({
  brandsSelection,
  header,
  stepLabel,
  stepLabel2,
  templateText,
  countryPlaceholder,
}) => {
  // Hooks
  const [selectedBrand, setSelectedBrand] = useState<Nullable<IBrandsSelection>>(null);

  const { register, reset, formData } = useForm();
  const { element: stepTwo, scrollToELement: scrollToStepTwo } = useScrollIntoView({ block: "center" });
  const { element: resultElem, scrollToELement: scrollToResult } = useScrollIntoView({ block: "center" });

  // Get ID and longText query
  const { finalResult, isLoading } = useCustomerCareResult({ formData: { country: formData?.country?.value }, selectedBrand, templateText });

  // Handler
  const brandSelectHandler = (selectedBrand: IBrandsSelection) => {
    setSelectedBrand(selectedBrand);
    scrollToStepTwo();
    reset();
  };

  // Effects
  useEffect(() => {
    if (formData?.country?.value) scrollToResult();
  }, [formData]);

  return (
    <Container
      maxWidth="screen4"
      width="full"
      m="auto"
      px={{ _: 2, desktopS: 0 }} 
      py={4} 
      pb={100}
    >
      {/* Header */}
      {header && (
        <Header
          fontSize="18px"
          textAlign="center"
          fontFamily="Avenir Bold"
          mb={3}
          element="h1"
        >
          {header}
        </Header>
      )}

      {stepLabel && (
        <Text
          fontSize="18px"
          fontFamily="Avenir Regular"
          textAlign="center"
          mb={3}
        >
          {AppConfig.html(stepLabel)}
        </Text>
      )}

      {/* Brands */}
      <Grid
        gridTemplateColumns={{ _: "1fr 1fr", tablet: "repeat(auto-fill, minmax(200px, 1fr))" }}
        gridAutoRows={{ _: "100px", tablet: "120px" }}
        gridGap="4px"
        backgroundColor="neutral.10"
        p="4px"
      >
        {brandsSelection?.map((brand: IBrandsSelection, key: number) => (
          <GridColumn key={key} backgroundColor="white">
            <BrandsGridItem
              {...brand}
              active={key === selectedBrand?.id}
              onClick={() => brandSelectHandler(brand)}
            />
          </GridColumn>
        ))}
      </Grid>

      {/* Country Selector */}
      <Container ref={stepTwo}>
        <AnimatePresence>
          {selectedBrand && (
            <Container
              variants={AppConfig.setAnimationVariant("OPACITY_VARIANT")}
              initial="hide"
              animate="show"
              exit="exit"
              transition={{ duration: 0.2 }}
            >
              {stepLabel2 && (
                <Text
                  fontSize="18px"
                  fontFamily="Avenir Regular"
                  textAlign="center"
                  my={3}
                >
                  {AppConfig.html(stepLabel2)}
                </Text>
              )}
              <Dropdown
                options={[...(selectedBrand?.countries || [])]}
                {...register("country", { required: true })}
                placeholder={countryPlaceholder}
              />
            </Container>
          )}
        </AnimatePresence>
      </Container>

      {/* Long Text */}
      <Container ref={resultElem}>
        <AnimatePresence>
          {finalResult && !isLoading && <Result finalResult={finalResult} />}
        </AnimatePresence>
      </Container>
    </Container>
  );
};

const Result = ({ finalResult }: { finalResult: string }) => {
  return (
    <Container
      maxWidth="calc(100vw - 32px)"
      overflow="hidden"
      mt={4}
      variants={AppConfig.setAnimationVariant("OPACITY_VARIANT")}
      initial="hide"
      animate="show"
      exit="hide"
      transition={{ duration: 0.2 }}
    >
      <ResultText fontSize="18px">{AppConfig.html(finalResult)}</ResultText>
    </Container>
  );
};

const ResultText = styled(Text)`
  pre {
    width: fit-content;
    display: inline;
    white-space: pre-wrap;
    word-wrap: break-word;
  }
`;

export default CustomerCare;
