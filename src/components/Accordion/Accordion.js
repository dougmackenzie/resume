import styled from "styled-components";

const Accordion = styled.dl`
  margin: 0;
  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
  background: #fff;
`;

const AccordionHeader = styled.dt``;

const AccordionIcon = styled.div`
  display: block;
  width: 40px;
  height: 40px;
  margin-left: auto;
  position: relative;
  transition: all ease-in-out 0.2s;

  &:after,
  &:before {
    background-color: #333;
    content: "";
    height: 3px;
    position: absolute;
    top: 10px;
    transition: all ease-in-out 0.2s;
    width: 30px;
  }

  &:before {
    left: 1px;
    transform: rotate(45deg) translate3d(8px, 22px, 0);
    transform-origin: 100%;
  }

  &:after {
    transform: rotate(-45deg) translate3d(-8px, 22px, 0);
    right: 1px;
    transform-origin: 0;
  }
`;

const AccordionTitle = styled.div`
  font-size: 18px;
`;

const AccordionButton = styled.button`
  align-content: space-between;
  align-items: center;
  background-color: #fff;
  border: 0;
  border-radius: 0;
  display: flex;
  line-height: 1;
  transition: all ease-in-out 0.2s;
  width: 100%;
  padding: 1.5rem;

  &[aria-expanded="true"] {
    ${AccordionIcon} {
      &:before {
        transform: rotate(45deg) translate3d(13px, 14px, 0);
      }

      &:after {
        transform: rotate(-45deg) translate3d(-13px, 14px, 0);
      }
    }
  }

  // Removing "inner outline" for Firefox
  &::-moz-focus-inner {
    border: none;
  }
`;

const AccordionPanel = styled.dd`
  position: relative;
  margin: 0;
  transition: max-height ease-in-out 0.2s;
`;

const AccordionPanelInner = styled.div`
  //padding: 1rem 1.5rem;
`;

export default Accordion;
export {
  AccordionHeader,
  AccordionButton,
  AccordionIcon,
  AccordionTitle,
  AccordionPanel,
  AccordionPanelInner
};
