import styled from "styled-components";

export const WrapperStyled = styled.div`
  @media screen and (min-width: 320px) {
    .container {
      max-width: 767px;
      padding-left: 15px;
      padding-right: 15px;
      width: 100%;
    }
  }

  @media screen and (min-width: 768px) {
    .container {
      margin: 0 auto;
      max-width: 768px;
      padding-left: 50px;
      padding-right: 50px;
    }
  }

  @media screen and (min-width: 1020px) {
    .container {
      margin: 0 auto;
      max-width: 1020px;
      /* padding-left: 39px;
      padding-right: 39px; */
    }
  }

  @media screen and (min-width: 1280px) {
    .container {
      margin: 0 auto;
      width: 1280px;
      max-width: 1280px;
      /* margin: 0 50px; */
      /* padding-left: 72px;
      padding-right: 72px; */
    }
  }
`;
