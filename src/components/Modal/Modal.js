import styled from "styled-components";

const Modal = styled.div`
  display: none;
  background: ${props => props.theme.color.primary};
  color: #ccc;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 199;
  padding: 2rem;
  overflow: scroll;

  &.is-open {
    display: block;
  }
`;

export const ModalHeader = styled.header`
  margin-bottom: 1rem;
`;

export const ModalClose = styled.button.attrs({
  "aria-label": "Close modal",
  "data-micromodal-close": true
})`
  position: fixed;
  top: 2rem;
  right: 2rem;
  background: transparent;
  border: 0;
  color: #ccc;

  :before {
    content: "\\2715";
    font-size: 3rem;
  }
`;

export const ModalTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: normal;
  font-family: ${props => props.theme.font.heading};
  margin: 0;
`;

export const ModalSubtitle = styled.h3`
  font-size: 1rem;
  letter-spacing: 0.1rem;
  font-weight: normal;
  text-transform: uppercase;
  margin: 0;
  color: #aaa;
`;

export const ModalContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

export const ModalContent = styled.div`
  font-size: 1.1rem;

  p {
    margin-top: 2.25rem;
  }
`;

export default Modal;
