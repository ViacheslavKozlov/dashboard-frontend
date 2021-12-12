import styled from "styled-components";

export const DeleteModalStyled = styled.div`
  .card {
    position: relative;
    margin: 20px auto;
    width: 205px;
    height: 199px;
    background-color: #fff;
    border-radius: 10px;
  }

  .backdrop {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(21, 57, 90, 0.3);
    border-radius: 10px;
    z-index: 100;
  }

  .content {
    position: absolute;
    top: 75px;
    left: 21px;

    padding: 25px 15px 10px;
    width: 163px;
    height: 77px;
    background-color: var(--white);
    color: var(--main-text-color);
    box-shadow: -3px -4px 4px rgba(21, 57, 90, 0.03),
      3px 4px 4px rgba(21, 57, 90, 0.03);
    border-radius: 10px;

    font-size: 12px;
    font-weight: 550;
    line-height: 1;
    text-align: center;
    z-index: 100;
  }

  .confirm {
    margin-bottom: 10px;
  }

  .buttonWrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .button {
    padding: 3px 10px;
    background-color: var(--white);
    color: #24d40c;
    border: none;
    font-weight: bold;
    font-size: 10px;
    text-transform: uppercase;
    border-right: 1px solid #b9c3c8;
    cursor: pointer;
  }

  .button:hover,
  .button:focus {
    color: #439945;
  }

  .button:active {
    color: #3c863d;
  }

  .button:nth-of-type(2) {
    border: none;
    color: #db0938;
  }

  .button:nth-of-type(2):hover,
  .button:nth-of-type(2):focus {
    color: #c2273f;
  }

  .button:nth-of-type(2):active {
    color: #a72536;
  }

  .mainBox {
    position: relative;
    margin: 20px auto;
    width: 205px;
    height: 199px;
    background: transparent;
  }

  .animCard {
    margin: 20px auto;
    width: 205px;
    height: 199px;
    opacity: 0.5;
    box-shadow: 0px 0px 3px 1px var(--btn-bg-color);
    background-color: #fff;
    filter: blur(1px);
    border-radius: 10px;
    scale: 1;
    transform: scaleY(0);
    transition: transform 500ms linear 250ms;
  }

  .anim {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 100%;
    height: 1%;
    box-shadow: 0px 0px 5px 1px var(--btn-bg-color);
    background-color: #fff;
    border-radius: 10px;
    opacity: 0;
  }

  @media screen and (max-width: 768px) {
    .card,
    .mainBox,
    .animCard {
      width: 290px;
      height: 260px;
    }

    .content {
      padding: 50px 20px 40px;
      width: 248px;
      height: 138px;
      font-size: 18px;
    }

    .confirm {
      margin-bottom: 15px;
    }

    .button {
      padding: 10px 20px;
      font-size: 14px;
    }

    .button:nth-of-type(2) {
      border-left: 1px solid #b9c3c8;
    }
  }
`;
