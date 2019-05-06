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
  padding: 1.5rem;
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
  font-size: 18px;
  margin: 0 0 5px;
`;

const CardSubtitle = styled.h5`
  font-size: 0.75rem;
  font-weight: 400;
  text-transform: uppercase;
  color: #aaa;
  margin: 0;
`;

const Card = styled.div`
  background: #fff;
  position: relative;
`;

export default Card;
export { CardImage, CardContent, CardAction, CardTitle, CardSubtitle };
