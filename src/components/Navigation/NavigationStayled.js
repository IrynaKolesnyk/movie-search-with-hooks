import styled from "styled-components";

const NavigationStayled = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  .navigetionLink {
    display: block;
    font-weight: 900;
    font-size: 30px;
    text-decoration: none;
    color: rgb(129, 159, 245);
    text-transform: uppercase;
    &:hover {
      color: #5f73a1;
    }
  }
  .activeNavLink {
    color: #5f73a1;
  }
`;
export default NavigationStayled;
