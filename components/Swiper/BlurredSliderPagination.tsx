import styled from "styled-components";

interface IBlurredSliderPagination {
  slideCount: number;
  activeIndex?: number;
  additionalSlides?: number;
  onClick: (index: number) => void;
}

interface IPaginationItem {
  isActive?: boolean;
}

const BlurredSliderPagination = ({
  slideCount,
  activeIndex,
  onClick,
  additionalSlides = 0,
}: IBlurredSliderPagination) => {
  const paginationItems = Array.from({ length: slideCount }, (_, index) => (
    <PaginationItem
      key={index}
      isActive={activeIndex === index}
      onClick={() => onClick(index + additionalSlides)}
    />
  ));

  return <PaginationContainer>{paginationItems}</PaginationContainer>;
};

export default BlurredSliderPagination;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const PaginationItem = styled.div<IPaginationItem>`
  width: ${(props) => (props.isActive ? "26px" : "13px")};
  height: 13px;
  margin: 5px;
  border-radius: ${(props) => (props.isActive ? "13px" : "50%")};
  background-color: ${(props) => (props.isActive ? "white" : "transparent")};
  border: 1px solid white;
  cursor: pointer;
  transition: 500ms ease;
`;
