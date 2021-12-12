import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #242a37;
  box-shadow: 0px 4px 4px rgba(36, 42, 55, 0.1);

  .header-desc {
    padding-top: 20px;
    padding-bottom: 20px;
  }

  .header-mob {
    padding-top: 15px;
    padding-bottom: 15px;
  }

  .header-logo {
    font-style: normal;
    font-weight: bold;
    font-size: 21px;
    line-height: 21px;
    letter-spacing: 0.02em;
    color: #00d7ff;
  }
`;
// &:hover {
//       fill: #5f73a1;
//       cursor: pointer;
//     }
