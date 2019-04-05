import styled from "styled-components";

const Sidebar = styled.div`
  left: -300px;
  transition: left 0.2s;

  @media (min-width: 769px) {
    width: 300px;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    background: rgb(28, 30, 38);
    z-index: 100;
  }
`;

export default Sidebar;
