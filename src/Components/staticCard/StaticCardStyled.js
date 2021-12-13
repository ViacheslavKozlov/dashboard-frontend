import styled from "styled-components";

export const StaticCardStyled = styled.div`
  .baseContainer {
    display: flex;
    padding: 20px 21px 33px 21px;
    flex-direction: column;
    width: 290px;
    height: 260px;
    align-items: center;
    background: var(--white);
    border-radius: 10px;
    position: relative;
    cursor: pointer;

    box-shadow: -3px -4px 4px rgba(21, 57, 90, 0.03),
      3px 4px 4px rgba(21, 57, 90, 0.03);
    transition: box-shadow 300ms ease-in-out;
  }

  .baseContainer:hover {
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
  }

  .ContainerChallenge {
    display: flex;
    padding: 20px 21px 33px 21px;
    flex-direction: column;
    width: 290px;
    height: 260px;
    align-items: center;
    border-radius: 10px;
    position: relative;
    cursor: pointer;
    box-shadow: -3px -4px 4px rgba(21, 57, 90, 0.03),
      3px 4px 4px rgba(21, 57, 90, 0.03);
    transition: box-shadow 300ms ease-in-out;
    background: var(--challenge-main-bg-color);
  }

  .ContainerChallenge:hover {
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
  }

  .IconTrophy,
  .IconStar {
    cursor: pointer;
    height: 19px;
    width: 19px;
    position: absolute;
    top: 16px;
    right: 21px;
    filter: drop-shadow(0px 3px 4px rgba(0, 215, 255, 0.25));
  }

  .IconFire {
    margin-left: 5px;
    height: 16px;
    width: 16px;
    /* filter: drop-shadow(0px 3px 4px rgba(0, 215, 255, 0.25)); */
  }
  .cardType {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 14px;
    margin-bottom: 10px;
    margin-top: 25px;
    text-align: center;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: var(--secondary-text-color);
  }

  .taskNameChallenge {
    max-height: 45px;
    display: flex;
    justify-content: center;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 1.1;
    text-align: center;
    padding-left: 21px;
    padding-right: 21px;
    width: inherit;
    text-overflow: ellipsis;
    overflow: hidden;
    /* white-space: nowrap; */
    display: block;
    color: var(--white);
  }

  .taskNameBase {
    max-height: 45px;
    justify-content: center;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 1.1;
    text-align: center;
    padding-left: 21px;
    padding-right: 21px;
    width: inherit;
    display: block;
    margin-top: 50px;
    color: var(--main-text-color);
    text-overflow: ellipsis;
    overflow: hidden;
    /* white-space: nowrap; */
    display: block;
  }

  .difficultyContainer {
    display: flex;
    width: inherit;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
  }

  .difficultyLevel {
    display: flex;
    align-items: center;
    margin-left: 21px;
  }

  .difficulty {
    margin-left: 7px;
    text-transform: capitalize;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 16px;
    letter-spacing: 0.02em;
    color: var(--secondary-text-color);
  }

  .normal {
    border-radius: 50%;
    height: 10px;
    width: 10px;
    background-color: #24d40c;
  }

  .easy {
    border-radius: 50%;
    height: 10px;
    width: 10px;
    background-color: var(--accent-color);
  }

  .hard {
    border-radius: 50%;
    height: 10px;
    width: 10px;
    background-color: #db0938;
  }

  .dateStyle {
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 18px;
    text-align: center;
    letter-spacing: 0.02em;
    color: var(--secondary-text-color);
    margin-top: 10px;
    display: flex;
    align-items: center;
  }
  .stuff,
  .family,
  .health,
  .learning,
  .leisure,
  .work {
    padding-left: 21px;
    margin: 0;
    display: flex;
    height: 35px;
    width: 120px;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 14px;
    text-transform: uppercase;
    letter-spacing: 0.02em;
    align-items: center;
    border-radius: 0px 25px 25px 0px;
    position: absolute;
    bottom: 33px;
    left: 0;
  }
  .stuff {
    color: var(--main-text-color);
    background-color: var(--secondary-text-color);
  }

  .family {
    color: var(--main-text-color);
    background-color: var(--family-bg-color);
  }

  .health {
    padding-left: 21px;
    margin: 0;
    display: flex;
    height: 35px;
    width: 120px;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 14px;
    text-transform: uppercase;
    letter-spacing: 0.02em;
    align-items: center;
    border-radius: 0px 25px 25px 0px;
    position: absolute;
    bottom: 33px;
    left: 0;
    color: var(--main-text-color);
    background-color: var(--health-bg-color);
  }

  .learning {
    padding-left: 21px;
    margin: 0;
    display: flex;
    height: 35px;
    width: 120px;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 14px;
    text-transform: uppercase;
    letter-spacing: 0.02em;
    align-items: center;
    border-radius: 0px 25px 25px 0px;
    position: absolute;
    bottom: 33px;
    left: 0;
    color: var(--main-text-color);
    background-color: var(--learning-bg-color);
  }

  .leisure {
    padding-left: 21px;
    margin: 0;
    display: flex;
    height: 35px;
    width: 120px;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 14px;
    text-transform: uppercase;
    letter-spacing: 0.02em;
    align-items: center;
    border-radius: 0px 25px 25px 0px;
    position: absolute;
    bottom: 33px;
    left: 0;
    color: var(--main-text-color);
    background-color: var(--leisure-bg-color);
  }

  .work {
    padding-left: 21px;
    margin: 0;
    display: flex;
    height: 35px;
    width: 120px;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 14px;
    text-transform: uppercase;
    letter-spacing: 0.02em;
    align-items: center;
    border-radius: 0px 25px 25px 0px;
    position: absolute;
    bottom: 33px;
    left: 0;
    color: var(--main-text-color);
    background-color: var(--work-bg-color);
  }

  @media screen and (min-width: 768px) {
    .ContainerChallenge,
    .baseContainer {
      width: 205px;
      height: 199px;
    }

    .taskNameChallenge {
      font-size: 16px;
    }

    .taskNameBase {
      font-size: 16px;
      margin-top: 42px;
    }

    .dateStyle {
      font-size: 14px;
      line-height: 14px;
    }

    .IconTrophy {
      height: 15px;
      width: 15px;
      top: 17px;
    }

    .IconStar {
      height: 15px;
      width: 15px;
      top: 17px;
    }

    .cardType {
      margin-top: 20px;
      font-size: 12px;
      line-height: 12px;
    }

    .stuff,
    .family,
    .health,
    .learning,
    .leisure,
    .work {
      font-size: 11px;
      line-height: 11px;
      height: 35px;
      width: 95px;
      bottom: 25px;
    }

    .difficulty {
      font-size: 14px;
      line-height: 14px;
    }

    .normal,
    .easy,
    .hard {
      height: 8px;
      width: 8px;
    }
  }
`;
