import styled from "styled-components";

export const UserMenuWrapper = styled.header`
  display: flex;

  .user-logo {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    font-weight: 900;
    font-size: 17px;
    line-height: 0.94;
    letter-spacing: 0.02em;
    color: #ffffff;
    background: #3e4e6c;
    border-radius: 50%;
  }

  .user-name {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 17px;
    line-height: 1;

    letter-spacing: 0.02em;

    color: #7b8aa4;
  }
`;
// &:hover {
//       fill: #5f73a1;
//       cursor: pointer;
//     }
