import styled from "styled-components";

const gutter = "30px";
const borderWidth = "4px";
const dotDiameter = "8px";

const Timeline = styled.div`
  display: grid;
  grid-template-columns: auto 5fr;
  width: 100%;
  padding: 0 50px;
  position: relative;
`;

export default Timeline;

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
  }

  // Cut off top of the line
  &:first-child:after {
    top: ${dotDiameter};
  }

  // The dot
  &:before {
    content: "";
    position: absolute;
    width: ${dotDiameter};
    height: ${dotDiameter};
    border: ${borderWidth} solid #f6921e;
    background-color: #fff;
    border-radius: 100%;
    top: calc(0.5rem - (${dotDiameter} / 2));
    right: -6px;
    z-index: 99;
  }
`;

export const TimelineMain = styled.div`
  padding-left: ${gutter};
  padding-bottom: 3rem;
`;

export const TimelineHeading = styled.h5`
  margin: 0;
  font-size: 1.15rem;
  font-weight: bold;
`;
