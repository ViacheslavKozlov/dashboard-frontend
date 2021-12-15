import styled from "styled-components";

export const UserMenuWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: flex-end;
  width: calc(50% + 80px);

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
    color: var(--btn-text-color);
    background: var(--header-symb-color);
    border-radius: 50%;
    margin-right: 10px;
  }

  .user-name {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 17px;
    line-height: 1;
    letter-spacing: 0.02em;
    color: var(--header-text-color);
    margin-right: calc(100% - 210px);
  }

  .user-logout {
    border: none;
    outline: none;
    background: none;
    box-shadow: none;
    cursor: pointer;
  }

  .user-logout-logo {
    width: 22px;
    height: 16px;
    fill: var(--header-symb-color);
    transition: transform 500ms ease-in, fill 500ms ease-in;
  }

  .user-logout-logo:hover use {
    fill: var(--accent-color);
    transform: scale(1.1);
  }
`;
