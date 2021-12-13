import styled from "styled-components";

export const DashboardPageStyled = styled.div`
  .appWrapper {
    background-color: var(--main-bg-color);
  }

  .headerWrapper {
    background-color: var(--header-bg-color);
  }

  .container {
    padding: 0 15px 40px;
    min-height: calc(100vh - 60px);
    height: 100%;
    background-color: var(--main-bg-color);
    max-width: 1280px;
    margin: 0 auto;
  }

  .buttonAddContainer {
    position: fixed;
    bottom: 50px;
    right: 15px;
    z-index: 11;
  }

  @media screen and (min-width: 768px) {
    .container {
      padding: 0 50px 40px;
      min-height: calc(100vh - 70px);
    }

    .buttonAddContainer {
      bottom: 42px;
      right: 23px;
    }
  }
  @media screen and (min-width: 1280px) {
    .container {
      padding: 0 70px 50px;
    }

    .buttonAddContainer {
      bottom: 40px;
      right: calc((100% - 1220px) / 2);
    }
  }

  .section {
    padding-top: 30px;
  }
  .sectionDone {
    margin-top: 60px;
  }

  .sectionTitle {
    margin-bottom: 20px;
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 1;
    letter-spacing: 0.02em;
    color: var(--main-text-color);
  }

  .IconDone {
    fill: var(--accent-color);
  }

  .btnDone {
    z-index: 1;
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 1;
    letter-spacing: 0.02em;
    color: var(--main-text-color);

    margin: 0;
    width: 64px;
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
  }

  .lineWrapper {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }

  .lineWrapper::after {
    content: "";
    width: 100%;
    height: 1px;
    background-image: linear-gradient(
      to right,
      transparent 40%,
      var(--secondary-text-color) 40%
    );
    background-size: 20px 100%;
  }

  .Icon {
    fill: var(--white);
  }

  .unusedContainer > ul > li > div {
    filter: drop-shadow(0px 0px 2px #db0837);
  }
`;
