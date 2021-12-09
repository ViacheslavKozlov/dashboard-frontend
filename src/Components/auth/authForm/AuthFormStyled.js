import styled from "styled-components";

export const AuthFormContainer = styled.nav`
  .authTitle {
    font-weight: 700;
    font-style: 400;
    font-size: 24 px;
    line-height: 0.99;
    text-align: left;
    color: #00d7ff;
  }

  .authDicsription {
    font-weight: 700;
    font-style: 400;
    font-size: 18 px;
    line-height: 1.61;
    text-align: left;
    color: #15395a;
  }

  .authChooseText {
    font-weight: 400;
    font-style: 400;
    font-size: 14 px;
    line-height: 3.21;
    text-align: left;
    color: #b9c3c8;
  }

  .authForm {
    display: table-caption;
    margin: 20px 40px;
  }
  .btn {
    margin-top: 20px;
    width: 100px;
    height: 25px;
    border: 1px solid;
    border-radius: 5px;
  }
  .inputName {
    font-weight: 300;
    font-style: 400;
    font-size: 18px;
    line-height: 0.99;
    color: #00d7ff;
  }
  .btn:hover,
  .btn:focus {
    background: rgb(177, 122, 20);
    border: rgb(177, 122, 20);
  }
  .input {
    width: 200px;
    height: 25px;
    border: 1px solid;
    border-radius: 5px;
    border-bottom: #00d7ff;
  }
  .inputName:not(:first-child) {
    margin-top: 20px;
  }
  .input:hover,
  .input:focus {
    border: rgb(177, 122, 20);
  }
`;
