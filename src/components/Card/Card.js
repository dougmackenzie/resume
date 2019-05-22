import styled from "styled-components";

const CardImage = styled.div`
  background-color: ${props => props.backgroundColor};
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    vertical-align: middle;
    max-width: 100%;
    max-height: 100%;
  }
`;

const CardContent = styled.div`
  color: ${props => props.theme.color.bodyText};
`;

const CardAction = styled.button`
  width: 100%;
  background: #1c1e26;
  color: white;
  border: none;
  padding: 10px 0;
`;

const CardTitle = styled.h4`
  font-weight: 400;
  font-size: 1.1rem;
  margin: 0;
`;

const CardSubtitle = styled.h5`
  font-size: 0.75rem;
  font-weight: 400;
  text-transform: uppercase;
  color: #aaa;
  margin: 0;
`;

const Card = styled.div`
  background: ${props => (props.grey ? `#f9f9f9` : `#fff`)};
  position: relative;
  border-radius: 2px;

  ${CardContent} {
    padding: ${props => (props.compact ? `1.25rem 1.5rem` : `1.5rem`)};
  }
`;

export default Card;
export { CardImage, CardContent, CardAction, CardTitle, CardSubtitle };
