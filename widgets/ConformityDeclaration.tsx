//Modules
import React, { useState, useRef } from "react";
import IConformityDeclaration from "../models/widgets/IConformityDeclaration";
import useResponsive from "../hooks/useResponsive";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import useGetTheme from "../hooks/useGetTheme";
import useHorizontalSpaceComparison from "../hooks/useHorizontalSpaceComparison";
import {
  setInput,
  setOptionSelected,
} from "../redux/slices/ConformityDeclaration/ConformityDeclarationSlice";
import AppConfig from "../logic/configs/AppConfig";
import {
  useLazyFetchGTINQuery,
  useLazyFetchEyewearModelQuery,
} from "../redux/slices/ConformityDeclaration/ConformityDeclarationAPI";
import useIsSsr from "../hooks/useIsSsr";
// Components
import Text from "../components/UI/Text/Text";
import Flex from "../components/UI/Flex/Flex";
import Radio from "../components/UI/Radio/Radio";
import Icon from "../components/UI/Icon/Icon";
import Input from "../components/UI/Input/Input";
import Column from "../components/UI/Column/Column";
import Row from "../components/UI/Row/Row";
import Button from "../components/UI/Button/Button";
import Container from "../components/UI/Container/Container";
import TooltipConformity from "../components/TooltipConformity/TooltipConformity";

const ConformityDeclaration = ({
  paragraph,
  errorMessage,
  options,
}: IConformityDeclaration) => {
  //Hooks
  const [error, setError] = useState(false);
  const [overflow, setOverflow] = useState(false);
  const [isMouseLeave, setIsMouseLeave] = useState(false);
  const [hideTimeout, setHideTimeout] = useState<NodeJS.Timeout | null>(null);
  const { input, optionSelected }: any = useSelector(
    (state: RootState) => state.ConformityDeclarationSlice
  );
  const { name: themeName } = useGetTheme();
  const dispatch = useDispatch();
  const [fetchGTIN] = useLazyFetchGTINQuery();
  const [fetchEyewearModel] = useLazyFetchEyewearModelQuery();
  const infoButtonUPC = useRef(null);
  const infoButtonEyewear = useRef(null);
  const { is } = useResponsive();
  const { horizontalSpace: horizontalSpaceUPC } =
    useHorizontalSpaceComparison(infoButtonUPC);
  const { horizontalSpace: horizontalSpaceEyewear } =
    useHorizontalSpaceComparison(infoButtonEyewear);
  const isSsr = useIsSsr();

  //Variables
  const isSelected = (value: string): boolean => optionSelected === value;
  const { label: option1 } = options![0];

  //Handlers
  const handleSelectedRadio = (event: { option: string; value: string }) => {
    const value = event.value;
    dispatch(setOptionSelected(value));
  };

  const handleSelectedInput = (option: string) => {
    dispatch(setOptionSelected(option));
    dispatch(setInput(""));
  };

  const handleInputValue = (event: any) => {
    const value: string = event.target.value;
    dispatch(setInput(value));
  };

  const handleSubmit = async () => {
    if (optionSelected === option1) return handleFetchAndRedirect(fetchGTIN);

    handleFetchAndRedirect(fetchEyewearModel);
  };

  const handleFetchAndRedirect = async (fetchType: any) => {
    try {
      if (optionSelected === option1 && isNaN(+input)) return setError(true);
      const res: any = await fetchType(input);
      const {
        data: { uri },
      } = res;

      window.location.href = uri;
      setError(false);
    } catch (error) {
      setError(true);
    }
  };

  const handleShowTooltip = (option: string) => {
    setIsMouseLeave(true);
    dispatch(setOptionSelected(option));
    clearTimeout(hideTimeout!);
    setOverflow(true);
  };

  const handleTooltipLeave = () => {
    const timeout = setTimeout(() => {
      setIsMouseLeave(false);
      setOverflow(false);
    }, 450);

    setHideTimeout(timeout);
  };

  const handleTooltipHover = () => {
    clearTimeout(hideTimeout!);
    setIsMouseLeave(true);
  };

  // Functions
  const renderOption = () => {
    return (
      <>
        {options &&
          options.map((option, index) => (
            <div key={index}>
              <Flex
                style={{ gap: "1rem" }}
                justifyContent={"space-between"}
                alignItems={is("desktopS", ">") ? "center" : "flex-start"}
                flexDirection={is("desktopS", ">") ? "row" : "column"}
                zIndex={"100"}
              >
                <Row
                  style={
                    is("mobile", "<") ? { gap: "0.5rem" } : { gap: "1rem" }
                  }
                  maxWidth={"24rem"}
                  alignItems="center"
                  justifyContent={
                    is("mobile", "<") ? "space-between" : "flex-start"
                  }
                  width="100%"
                >
                  <Radio
                    checked={isSelected(option.label)}
                    onChange={handleSelectedRadio}
                    name="option"
                    type="radio"
                    labelSize={is("mobile", "<") ? "1rem" : "1.25rem"}
                    options={[{ label: option.label, value: option.label }]}
                    radioButtonSize={is("mobile", "<") ? 18 : 20}
                  />
                  <Flex
                    ref={
                      option1 === option.label
                        ? infoButtonUPC
                        : infoButtonEyewear
                    }
                  >
                    <TooltipConformity
                      show={optionSelected === option.label && isMouseLeave}
                      onMouseOver={handleTooltipHover}
                      onMouseLeave={() => handleTooltipLeave()}
                      title={option.tooltipTitle}
                      image={option.tooltipPicture}
                      description={option.tooltipDescription}
                      top="40px"
                      left={
                        option1 === option.label
                          ? horizontalSpaceUPC === "left"
                            ? "-220px"
                            : "12px"
                          : horizontalSpaceEyewear === "left"
                          ? "-220px"
                          : "12px"
                      }
                      zIndex="1"
                      pointerLeft={
                        option1 === option.label
                          ? horizontalSpaceUPC === "left"
                            ? false
                            : true
                          : horizontalSpaceEyewear === "left"
                          ? false
                          : true
                      }
                    />
                    <Icon
                      type="infotip"
                      size={is("mobile", "<") ? 20 : 23}
                      onClick={() => handleShowTooltip(option.label)}
                      onMouseLeave={() => handleTooltipLeave()}
                    />
                  </Flex>
                </Row>
                <Container
                  minWidth={{
                    _: "1rem",
                    desktopS: "29rem",
                    desktopL: "36rem",
                  }}
                  maxWidth={{
                    _: "full",
                    tablet: "28rem",
                    desktopS: "30rem",
                    desktopL: "38rem",
                  }}
                  width={{ _: "full", tablet: "full" }}
                >
                  <Input
                    name={option.label}
                    error={error && option.label === optionSelected}
                    errorMessage={errorMessage}
                    onFocus={isSelected(option.label)}
                    onClick={() => {
                      handleSelectedInput(option.label), setError(false);
                    }}
                    clear={isSelected(option.label)}
                    onChange={handleInputValue}
                    type={"text"}
                  />
                </Container>
              </Flex>
            </div>
          ))}
      </>
    );
  };

  return (
    <Container
      overflow={overflow ? "visible" : "hidden"}
      m="auto"
      maxWidth={{ tablet: "900px", desktopL: "1020px" }}
      pt={"5rem"}
      pb={"5rem"}
      pl={{ _: 2, mobile: 2, tablet: 2 }}
      pr={{ _: 2, mobile: 2, tablet: 2 }}
      height={{ _: "49rem", tablet: "33rem" }}
    >
      {!isSsr && (
        <Column style={{ gap: "2.5rem" }}>
          {/* FORM DESCRIPTION */}
          {paragraph && (
            <Text fontSize={is("mobile", "<") ? "18px" : "h4"}>
              {AppConfig.html(paragraph)}
            </Text>
          )}

          {/* OPTIONS */}
          {!!options && <>{renderOption()}</>}
          {/* SUBMIT BUTTON */}
          <Container
            style={{ alignSelf: is("tablet", ">") ? "end" : "center" }}
          >
            <Button
              disabled={optionSelected === "" || input === ""}
              variant="primary"
              onClick={handleSubmit}
            >
              <Text
                color={themeName === "Light Theme" ? "white" : "black"}
                style={{ userSelect: "none" }}
              >
                Submit
              </Text>
            </Button>
          </Container>
        </Column>
      )}
    </Container>
  );
};

export default ConformityDeclaration;
