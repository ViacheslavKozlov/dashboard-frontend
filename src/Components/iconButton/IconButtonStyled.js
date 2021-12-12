import styled from "styled-components";

export const IconButtonStyled = styled.div`
  .IconButton {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 52px;
    height: 52px;
    border-radius: 50%;
    outline: none;
    border: none;
    padding: 14px 7px;

    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 24px;
    text-align: center;
    letter-spacing: 0.02em;
    color: var(--white);
    background-color: var(--btn-bg-color);
    filter: drop-shadow(0px 0px 8px var(--btn-bg-color));
  }

  .IconButton:hover,
  .IconButton:focus {
    background-color: var(--accent-color);
    filter: drop-shadow(0px 0px 8px #47aad5);
  }

  .IconButton:active {
    background-color: #47aad5;
    filter: drop-shadow(0px 0px 8px #47aad5);
  }
`;
