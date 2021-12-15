import styled from "styled-components";

export const CreateEditCardStyled = styled.div`
  .cardBackdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }

  .card {
    z-index: 102;
    position: relative;
    padding: 20px 0 33px 0;
    width: 205px;
    height: 199px;
    background-color: var(--white);
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    transition: box-shadow 300ms ease-in-out, background-color 300ms ease-in-out;
  }

  .cardChallenge {
    z-index: 102;
    position: relative;
    padding: 20px 0 33px 0;
    width: 205px;
    height: 199px;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    transition: box-shadow 300ms ease-in-out, background-color 300ms ease-in-out;

    background-color: var(--challenge-main-bg-color);
  }

  .cardTitle {
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 1;
    text-align: center;
    letter-spacing: 0.02em;
    color: var(--secondary-text-color);
    margin: 10px 0 0 0;
  }

  .buttonsList {
    display: flex;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .buttonsList > li {
    position: relative;
    display: inline-block;
    height: 16px;
  }

  .buttonsList > li:not(:first-child) {
    margin-left: 14px;
  }

  .buttonsList > li:not(:first-child)::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(-7px, -50%);
    height: 16px;
    width: 1px;
    background-color: var(--secondary-text-color);
  }

  .cardTopButtons {
    height: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 21px;
  }

  .cardBottomButtons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 21px;
    margin-top: 29px;
  }

  .cardInputWrapper {
    display: flex;
    justify-content: center;
    margin-top: 10px;
  }

  .cardInput {
    font-size: 16px;
    height: 16px;
    width: 163px;
    outline: none;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid var(--accent-color);
    caret-color: var(--accent-color);
    background-color: transparent;
  }

  .cardInputChallenge {
    font-size: 16px;
    height: 16px;
    width: 163px;
    outline: none;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid var(--accent-color);
    caret-color: var(--accent-color);
    background-color: transparent;
    color: var(--white);
  }

  .datePicker {
    height: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 12px;
  }

  .starIcon {
    filter: drop-shadow(0px 3px 4px rgba(0, 215, 255, 0.25));
  }

  .trophyIcon {
    filter: drop-shadow(0px 4px 4px rgba(0, 215, 255, 0.25));
  }

  .saveIcon:hover {
    fill: currentColor;
    color: #47aad5;
  }

  .saveIcon:active {
    fill: currentColor;
    color: #3f93b7;
  }

  .clearIcon:hover {
    fill: currentColor;
    color: #c2273f;
  }

  .clearIcon:active {
    fill: currentColor;
    color: #a72536;
  }

  .doneIcon:hover {
    fill: currentColor;
    color: #439945;
  }

  .doneIcon:active {
    fill: currentColor;
    color: #3c863d;
  }

  .createBtn {
    color: var(--accent-color);
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 1;
    text-align: right;
    letter-spacing: 0.02em;
  }

  .createBtn:hover {
    color: #47aad5;
  }

  .createBtn:active {
    color: #3f93b7;
  }

  @media screen and (max-width: 767px) {
    .card {
      padding: 20px 0 20px 0;
      width: 290px;
      height: 260px;
    }

    .cardChallenge {
      padding: 20px 0 21px 0;
      width: 290px;
      height: 260px;
    }

    .cardTitle {
      font-size: 14px;
      margin: 30px 0 0 0;
    }

    .cardBottomButtons {
      margin-top: 57px;
    }

    .datePicker {
      margin-top: 15px;
    }

    .createBtn {
      font-size: 16px;
    }

    .saveIcon {
      width: 12px;
      height: 12px;
    }

    .clearIcon {
      width: 12px;
      height: 12px;
    }

    .doneIcon {
      width: 16px;
      height: 16px;
    }

    .starIcon {
      width: 19px;
      height: 19px;
    }

    .trophyIcon {
      width: 19px;
      height: 19px;
    }
  }
`;
