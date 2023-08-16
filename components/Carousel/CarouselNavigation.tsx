import styled from "styled-components";
import { ITheme } from "../../models/ITheme";

interface ICarouselNavigation<T> {
  slides: T[];
  activeSlide: number;
  activeSlideHandler?: (key: number) => void;
  theme?: ITheme | "Auto Theme";
}

const CarouselNavigation = ({
  slides,
  activeSlide,
  activeSlideHandler,
  theme = "Dark Theme",
}: ICarouselNavigation<any>) => {
  return (
    <>
      {theme === "Dark Theme" &&
        slides?.map((_: unknown, key: number) => (
          <DotWhite
            active={activeSlide === key}
            key={key}
            onClick={() =>
              activeSlideHandler ? activeSlideHandler(key) : undefined
            }
          />
        ))}

      {theme === "Light Theme" &&
        slides?.map((_: unknown, key: number) => (
          <DotBlack
            active={activeSlide === key}
            key={key}
            onClick={() =>
              activeSlideHandler ? activeSlideHandler(key) : undefined
            }
          />
        ))}

      {theme === "Auto Theme" &&
        slides?.map((_: unknown, key: number) => (
          <DotTheme
            active={activeSlide === key}
            key={key}
            onClick={() =>
              activeSlideHandler ? activeSlideHandler(key) : undefined
            }
          />
        ))}
    </>
  );
};

const DotWhite = styled.span<{ active?: boolean }>`
  width: ${(props) => (props.active ? "26px" : "13px")};
  height: 13px;
  border-radius: 13px;
  background-color: ${(props) => (props.active ? "white" : "transparent")};
  border: ${(props) => props.theme.borders.thin};
  border-color: white;
  cursor: pointer;

  transition: 500ms ease;

  &:not(:last-of-type) {
    margin-right: 8px;
  }
`;

const DotBlack = styled.span<{ active?: boolean }>`
  width: ${(props) => (props.active ? "26px" : "13px")};
  height: 13px;
  border-radius: 13px;
  background-color: ${(props) => (props.active ? "black" : "transparent")};
  border: ${(props) => props.theme.borders.thin};
  border-color: black;
  cursor: pointer;

  transition: 500ms ease;

  &:not(:last-of-type) {
    margin-right: 8px;
  }
`;

const DotTheme = styled.span<{ active?: boolean }>`
  width: ${(props) => (props.active ? "26px" : "13px")};
  height: 13px;
  border-radius: 13px;
  background-color: ${(props) =>
    props.active ? props.theme.colors.text : "transparent"};
  border: ${(props) => props.theme.borders.thin};
  border-color: ${(props) => props.theme.colors.text};
  cursor: pointer;

  transition: 500ms ease;

  &:not(:last-of-type) {
    margin-right: 8px;
  }
`;

export default CarouselNavigation;
