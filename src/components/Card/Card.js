import styled from "styled-components";

const CardImage = styled.div`
  background-color: ${props => props.backgroundColor};
  display: flex;
  justify-content: center;
  align-items: center;

  // When it's a button
  ${props =>
    props.as === "button" &&
    `
  text-align: left;
  border: 0;
  padding: 0;
  line-height: inherit;
  background: transparent;
  cursor: pointer;
  `}

  img {
    vertical-align: middle;
    max-width: 100%;
    max-height: 100%;
  }
`;

const CardImageTitle = styled.div`
  position: absolute;
  left: 1rem;
  bottom: 2.7rem;
  font-size: 1.325rem;
  background: rgba(255, 255, 255, 0.9);
  padding: 0.5rem 1rem;
  font-family: ${props => props.theme.font.heading};
`;

const CardImageSubtitle = styled.div`
  position: absolute;
  left: 1rem;
  bottom: 1rem;
  background: rgba(255, 255, 255, 0.9);
  padding: 0.3rem 1rem;
  font-size: 0.75rem;
  text-transform: uppercase;
  color: #555;
`;

const CardContent = styled.div`
  color: ${props => props.theme.color.bodyText};
  line-height: 2;
  font-size: 0.875rem;
`;

const CardAction = styled.button`
  width: 100%;
  background: #1c1e26;
  color: white;
  border: none;
  padding: 10px 0;
`;

const CardTitle = styled.h4`
  font-weight: 700;
  font-size: 1.125rem;
  margin: 0;
  font-family: "Lato";

  // When it's a button
  ${props =>
    props.as === "button" &&
    `
  text-align: left;
  border: 0;
  padding: 0;
  line-height: inherit;
  background: transparent;
  cursor: pointer;
  `}
`;

const CardSubtitle = styled.h5`
  font-size: 0.75rem;
  font-weight: 400;
  text-transform: uppercase;
  color: #aaa;
  margin: 0;
`;

const CardHover = styled.div`
  display: none;
  position: absolute;
  background: rgba(255, 255, 255, 0.85);
  text-align: center;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;

  cursor: pointer;
`;

const Card = styled.div`
  background: ${props => (props.grey ? `#f9f9f9` : `#fff`)};
  position: relative;
  border-radius: 3px;
  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1);

  ${CardContent} {
    padding: ${props => (props.compact ? `1.25rem 1.5rem` : `1.5rem`)};
  }

  :hover {
    ${CardHover} {
      display: flex;
    }
  }
`;

export default Card;
export {
  CardImage,
  CardContent,
  CardAction,
  CardTitle,
  CardSubtitle,
  CardHover,
  CardImageTitle,
  CardImageSubtitle
};
