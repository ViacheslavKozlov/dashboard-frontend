import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: var(--header-bg-color);
  box-shadow: 0px 4px 4px rgba(36, 42, 55, 0.1);

  .container {
    max-width: 1280px;
    margin: 0 auto;
  }
  .header-desc {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 20px;
    padding-bottom: 20px;
    margin-left: 50px;
    margin-right: 50px;
  }

  .header-mob {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 15px;
    padding-bottom: 15px;
    margin-left: 15px;
    margin-right: 15px;
  }

  .header-logo {
    font-style: normal;
    font-weight: bold;
    font-size: 21px;
    line-height: 1;
    letter-spacing: 0.02em;
    color: var(--accent-color);
  }
`;
