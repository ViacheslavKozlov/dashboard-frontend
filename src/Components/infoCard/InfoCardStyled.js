import styled from "styled-components";

export const InfoCardStyled = styled.div`
  .card {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 21px;
    width: 205px;
    height: 199px;
    background-color: rgb(150, 150, 150);
    border-radius: 10px;
    box-shadow: -3px -4px 4px rgba(21, 57, 90, 0.1),
      3px 4px 4px rgba(21, 57, 90, 0.1);
  }

  .subTitle {
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 22px;
    text-align: center;
    color: var(--white);
  }
`;
