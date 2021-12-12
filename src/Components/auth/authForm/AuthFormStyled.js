import styled from "styled-components";
import { device } from "../../../common/deviceSizes";
import imgMob from "../../../images/group-3.png";
import imgTab from "../../../images/tablet-bg.png";
import imgDesc from "../../../images/desc-bg.png";

export const AuthFormContainer = styled.div`
  .authTitle {
    font-weight: 700;
    font-style: 400;
    font-size: 24 px;
    line-height: 0.99;
    margin: 0;
    text-align: left;
    letter-spacing: 0.02em;
    color: #00d7ff;
  }

  .authDicsription {
    width: 290px;
    height: 87px;
    font-weight: 700;
    font-style: 400;
    font-size: 18 px;
    line-height: 1.61;
    padding-top: 60px;
    text-align: left;
    letter-spacing: 0.02em;
    color: #15395a;
  }

  .authChooseText {
    font-weight: 400;
    font-style: 400;
    font-size: 14 px;
    line-height: 3.21;
    padding-top: 30px;
    text-align: left;
    color: #b9c3c8;
  }

  .authForm {
    display: table-caption;
    padding-left: 15px;
    padding-right: 15px;
  }

  input::placeholder {
    font-size: 18px;
    font-weight: 300;
    font-style: 400;
    line-height: 0.99;
    color: #00d7ff;
  }

  label {
    display: block;
    margin-bottom: 20px;
  }

  .input {
    display: block;
    font-weight: 300;
    font-style: 400;
    line-height: 0.99;
    width: 290px;
    height: 18px;
    border: none;
    border-bottom: 1px solid;
    border-bottom-color: #00d7ff;
    background-color: inherit;
    outline: none;
    color: #00d7ff;
  }

  .input:hover,
  .input:focus {
    border: #00d7ff;
  }

  .button_wrapper {
    margin-top: 23px;
    margin-bottom: 181px;
    text-align: center;
  }

  @media ${device.tablet} {
    .authTitle {
      width: 375px;
      font-size: 20 px;
      line-height: 0.99;
      text-align: left;
      color: #00d7ff;
    }
    .authDicsription {
      width: 375px;
      height: 99px;

      font-size: 24 px;
      line-height: 1.38;
      padding-top: 52px;
      text-align: left;
      color: #15395a;
    }
    .authChooseText {
      font-size: 18 px;
      line-height: 2.5;
      padding-top: 23px;
      text-align: left;
      color: #b9c3c8;
    }
    .authForm {
      display: table-caption;
      padding-left: 50px;
    }
    input::placeholder {
      padding-left: 2px;
      color: #00d7ff;
    }
    .input {
      width: 193px;
      outline: none;
      color: #00d7ff;
    }
    .button_wrapper {
      padding-left: 141px;
    }
  }

  @media ${device.desc} {
    .authTitle {
      width: 99px;
      font-size: 24 px;
      line-height: 0.99;
      text-align: left;

      color: #00d7ff;
    }
    .authDicsription {
      width: 562px;
      height: 135px;

      font-size: 36 px;
      line-height: 1.25;
      padding-top: 70px;
      text-align: left;
      color: #15395a;
    }
    .authChooseText {
      width: 397px;
      font-size: 24 px;
      line-height: 1.87;
      padding-top: 35px;
      text-align: left;
      color: #b9c3c8;
    }
    .authForm {
      display: table-caption;
      padding-left: 229px;
    }
    input::placeholder {
      padding-left: 2px;
      color: #00d7ff;
    }
    .input {
      width: 196px;
      outline: none;
      color: #00d7ff;
    }
    .button_wrapper {
      padding-left: 141px;
    }
  }
`;

export const AuthBgContainer = styled.div`
  background-image: url(${imgMob});
  background-repeat: no-repeat;
  background-position-x: 100%;
  background-position-y: 100%;
  height: 100vh;

  @media ${device.tablet} {
    background-image: url(${imgTab});
    max-width: 100%;
    max-height: 100%;
  }
  @media ${device.desc} {
    background-image: url(${imgDesc});
  }
`;

export const AuthDiscrContainer = styled.div`
  margin: 0 auto;
  padding: 60px 15px 30px 15px;

  @media ${device.tablet} {
    padding: 312px 343px 30px 50px;
  }
  @media ${device.desc} {
    padding: 193px 489px 23px 229px;
  }
`;
