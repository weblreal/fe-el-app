import styled from "styled-components";
import Container from "../UI/Container/Container";

const SwiperDots = styled(Container)`
  .swiper {
    overflow: visible;
  }
  .swiper-slide {
    width: unset;
  }

  .swiper-pagination-bullet {
    height: 13px;
    width: 13px;
    background-color: transparent;
    border: solid 1px ${(props) => props.theme.colors.text};
    opacity: 1;
    transition: 500ms ease;
  }

  .swiper-pagination-bullet-active {
    width: 26px;
    border-radius: 13px;
    background-color: ${(props) => props.theme.colors.text};
  }

  .swiper-pagination {
    position: static;
    margin-top: 24px;
    height: 15px;
  }
`;

export default SwiperDots;
