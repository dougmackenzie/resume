import styled from "styled-components";

const Sidebar = styled.div`
  position: fixed;
  left: -300px;
  transition: left 0.2s;
  width: 300px;
  top: 0;
  bottom: 0;
  background: rgb(28, 30, 38);
  z-index: 100;

  @media (min-width: 769px) {
    left: 0;
  }
`;

export default Sidebar;
