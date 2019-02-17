import styled from 'styled-components'

const CardImage = styled.div`
  height: 250px;
  background-color: ${props => props.backgroundColor};
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    vertical-align: middle;
    max-width: 80%;
    max-height: 80%;
  }
`

const CardContent = styled.div`
  padding: 1.5rem;
`

const CardAction = styled.button`
  width: 100%;
  background: #1c1e26;
  color: white;
  border: none;
  padding: 10px 0;
`

const CardTitle = styled.h4`
  font-weight: 400;
  font-size: 18px;
  margin: 0 0 5px;
`

const CardSubtitle = styled.h5`
  font-size: 0.75rem;
  font-weight: 400;
  text-transform: uppercase;
  color: #aaa;
  margin: 0;
`

const Card = styled.div`
  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
  background: #fff;
  position: relative;
`

export default Card
export { CardImage, CardContent, CardAction, CardTitle, CardSubtitle }
