// Animation credit:
// https://codepen.io/chriswrightdesign/pen/XJzNBN/

import styled, { keyframes } from "styled-components";

const gutter = "2rem";
const borderWidth = "0.25rem";
const dotDiameter = "0.5rem";

const scaleVertical = keyframes`
  0% {
    transform:scaleY(0);
  }
  100% {
    transform:scaleY(1);
  }
`;

const revealScaleUp = keyframes`
  0% {
    opacity:0;
    transform:scale(0.5);
  }
  50% {
     opacity: 1;
     transform: scale(1.3);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

const revealFromLeft = keyframes`
  0% {
    transform:translateX(-1em);
    opacity:0;
  }
  100% {
    opacity:1;
    transform:translateX(0);
  }
`;

const revealFromRight = keyframes`
  0% {
    transform:translateX(1em);
    opacity:0;
  }
  100% {
    opacity:1;
    transform:translateX(0em);
  }
`;

export const TimelineSide = styled.div`
  padding-right: ${gutter};
  text-align: right;
  position: relative;

  // The line
  &:after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: ${borderWidth};
    background: #ddd;
    transform-origin: 0 0;
  }

  // Cut off top of the line
  &:first-child:after {
    top: ${dotDiameter};
  }

  &:nth-child(3) > *,
  &:nth-child(3):before,
  &:nth-child(3):after {
    animation-delay: 0.5s !important;
  }

  &:nth-child(5) > *,
  &:nth-child(5):before,
  &:nth-child(5):after {
    animation-delay: 1s !important;
  }

  &:nth-child(7) > *,
  &:nth-child(7):before,
  &:nth-child(7):after {
    animation-delay: 1.5s !important;
  }

  &:nth-child(9) > *,
  &:nth-child(9):before,
  &:nth-child(9):after {
    animation-delay: 2s !important;
  }

  // The dot
  &:before {
    content: "";
    position: absolute;
    width: ${dotDiameter};
    height: ${dotDiameter};
    border: ${borderWidth} solid ${props => props.theme.color.highdark};
    background-color: #fff;
    border-radius: 100%;
    top: calc(0.5rem - (${dotDiameter} / 2));
    right: -6px;
    z-index: 99;
  }
`;

export const TimelineMain = styled.div`
  color: ${props => props.theme.color.bodyText};
  padding-left: ${gutter};
  padding-bottom: 3rem;

  &:nth-child(4) > *,
  &:nth-child(4):before,
  &:nth-child(4):after {
    animation-delay: 0.5s !important;
  }

  &:nth-child(6) > *,
  &:nth-child(6):before,
  &:nth-child(6):after {
    animation-delay: 1s !important;
  }

  &:nth-child(8) > *,
  &:nth-child(8):before,
  &:nth-child(8):after {
    animation-delay: 1.5s !important;
  }

  &:nth-child(10) > *,
  &:nth-child(10):before,
  &:nth-child(10):after {
    animation-delay: 2s !important;
  }
`;

const Timeline = styled.div`
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: auto 5fr;
  grid-template-columns: auto 5fr;
  width: 100%;
  padding: 0 3rem;
  position: relative;

  &.animated ${TimelineSide} {
    > * {
      animation: ${revealFromLeft} 0.5s 0s ease both 1;
    }

    :before {
      animation: ${revealScaleUp} 0.75s 0s ease both 1;
    }

    :after {
      animation: ${scaleVertical} 0.5s linear both 1;
    }
  }

  &.animated ${TimelineMain} {
    > * {
      animation: ${revealFromRight} 0.5s 0s ease both 1;
    }
  }
`;

export const TimelineHeading = styled.h5`
  margin: 0;
  font-size: 1.1rem;
  font-weight: bold;
  //font-family: "Lato";
`;

export const TimelineSideHeading = styled.div`
  text-transform: uppercase;
  color: #666;
  margin-bottom: 0.4rem;
  //letter-spacing: 0.05rem;
  //font-family: ${props => props.theme.font.heading};
  font-size: 0.9rem;
`;

export const TimelineSideImage = styled.div`
  max-width: 75px;
  //float: right;
  background: #fff;
  border-radius: 50%;

  > img {
    width: 100%;
    border-radius: 50%;
  }
`;

export default Timeline;
