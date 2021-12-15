import styled from "styled-components";

export const CompletedCardStyled = styled.div`
  .questBox,
  .challengeBox {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    padding: 20px 15px 15px;
    box-shadow: -3px -4px 4px var(rgba(21, 57, 90, 0.03)), 3px 4px 4px var(rgba(21, 57, 90, 0.03));
    border-radius: 10px;
    text-align: center;
    font-size: 12px;
    line-height: 1;
    z-index: 100;
  }

  .questBox {
    background-color: var(--white);
    color: var(--black);
  }

  .challengeBox {
    background-color: var(--challenge-main-bg-color);
    color: var(--white);
  }

  .questBox:hover,
  .questBox:focus,
  .challengeBox:hover,
  .challengeBox:focus {
    box-shadow: -3px 0px 5px rgba(21, 57, 90, 0.4), 3px 5px 5px rgba(21, 57, 90, 0.4);
  }

  .contentBox {
    margin-bottom: 10px;
    display: flex;
    align-items: center;
  }

  .content {
    font-size: 11px;
  }

  .link {
    position: relative;
    margin-left: 7px;
    color: var(--accent-color);
    border-bottom: 1px solid var(--accent-color);
    cursor: pointer;
  }

  .link:hover,
  .link:focus {
    color: var(--btn-bg-color);
    border-bottom: 1px solid var(--btn-bg-color);
  }

  .link:active {
    color: #3f93b7;
    border-bottom: 1px solid #3f93b7;
  }

  .linkText {
    display: inline-block;
    max-width: 95px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .image {
    margin-bottom: 5px;
    width: 144px;
    height: 124px;
  }

  .button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    width: 63px;
    color: var(--secondary-text-color);
    line-height: 1;
  }

  .arrow {
    color: var(--accent-color);
    fill: currentColor;
  }

  .button:focus .arrow,
  .button:hover .arrow {
    color: var(--btn-bg-color);
  }

  .button:active .arrow {
    color: #3f93b7;
  }

  .awardBox {
    position: relative;
    margin: 0 auto 5px;
    width: 144px;
    height: 124px;
  }

  .iconBase,
  .iconTarget,
  .iconArrow,
  .iconTrophy,
  .iconFirst {
    position: absolute;
  }

  .leftClouds,
  .rightClouds {
    position: absolute;
    width: 144px;
    height: 124px;
    z-index: 10;
  }

  .leftClouds {
    left: 0;
  }

  .rightClouds {
    right: 0;
  }

  .iconBase {
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 86px;
    height: 43px;
  }

  .iconTarget {
    bottom: 35px;
    left: 35px;
    width: 80px;
    height: 80px;
  }

  .iconArrow {
    top: 22px;
    left: calc(50% - 3px);
    width: 50px;
    height: 30px;
  }

  .iconTrophy {
    top: 6px;
    right: 33px;
    width: 78px;
    height: 76px;
    z-index: 10;
  }

  .iconFirst {
    top: 5px;
    right: 50px;
    width: 46px;
    height: 50px;
    z-index: 11;
    fill: var(--white);
  }

  .hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    border: 0;
    padding: 0;
    clip: rect(0 0 0 0);
    overflow: hidden;
  }

  @media screen and (max-width: 767px) {
    .questBox,
    .challengeBox {
      font-size: 16px;
    }

    .content {
      font-size: 14px;
    }

    .linkText {
      display: inline-block;
      max-width: 150px;
    }

    .image {
      margin-bottom: 5px;
      width: 230px;
      height: 175px;
    }

    .button {
      width: 90px;
    }

    .arrow {
      width: 12px;
      height: 12px;
    }

    .awardBox,
    .leftClouds,
    .rightClouds {
      width: 230px;
      height: 185px;
    }

    .iconBase {
      width: 130px;
      height: 65px;
    }

    .iconTarget {
      bottom: 50px;
      left: 60px;
      width: 120px;
      height: 120px;
    }

    .iconArrow {
      top: 34px;
      left: calc(50% - 3px);
      width: 75px;
      height: 45px;
    }

    .iconTrophy {
      top: 6px;
      right: 55px;
      width: 117px;
      height: 114px;
    }

    .iconFirst {
      top: 5px;
      right: 82px;
      width: 65px;
      height: 75px;
    }
  }
`;
