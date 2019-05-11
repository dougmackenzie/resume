import styled from "styled-components";

const Slider = styled.div.attrs({
  className: "swiper-container",
  "data-slider": true
})``;

export const Slides = styled.div.attrs({
  className: "swiper-wrapper"
})``;

export const Slide = styled.div.attrs({
  className: "swiper-slide"
})`
  ${props =>
    props.padded &&
    `
        padding: 50px 20px;

        @media (min-width: ${props.theme.breakpoints.md}) {
            padding: ${!props.noPadding && `80px 50px`};
        }

        @media (min-width: ${props.theme.breakpoints.xxl}) {
            padding: ${!props.noPadding && `100px `};
        }
    `}
`;

export const SliderPagination = styled.div.attrs({
  className: "swiper-pagination",
  "data-slider-pagination": true
})``;

// const SliderPagination = styled.div`
//   display: flex;
//   bottom: 0;

//   .swiper-pagination-bullet {
//     flex-grow: 1;
//     border-radius: 0;
//     height: 4px;
//     margin: 0 !important;
//   }
// `;

export const SliderNavPrev = styled.div.attrs({
  className: "swiper-button-prev swiper-button-white",
  "data-slider-prev": true
})`
  display: none;
  left: 2rem;

  @media (min-width: ${props => props.theme.breakpoints.xxl}) {
    display: block;
  }
`;

export const SliderNavNext = styled.div.attrs({
  className: "swiper-button-next swiper-button-white",
  "data-slider-next": true
})`
  display: none;
  right: 2rem;

  @media (min-width: ${props => props.theme.breakpoints.xxl}) {
    display: block;
  }
`;

export default Slider;
