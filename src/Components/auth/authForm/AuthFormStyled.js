import styled from "styled-components";

export const AuthFormContainer = styled.nav`
  .authTitle {
    font-weight: 700;
    font-style: 400;
    font-size: 24 px;
    line-height: 0.99;
    margin-top: 60px;
    margin-left: 15px;
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
    margin-top: 60px;
    margin-left: 15px;
    margin-right: 15px;
    text-align: left;
    letter-spacing: 0.02em;
    color: #15395a;
  }

  .authChooseText {
    font-weight: 400;
    font-style: 400;
    font-size: 14 px;
    line-height: 3.21;
    margin-top: 30px;
    margin-left: 15px;
    text-align: left;

    color: #b9c3c8;
  }

  .authForm {
    display: table-caption;
    margin-top: 30px;
    margin-left: 15px;
    margin-right: 15px;
    /* margin: 30px 15px 15px; */
  }
  /* 
  .inputName {
    font-weight: 300;
    font-style: 400;
    font-size: 18px;
    line-height: 0.99;
    color: #00d7ff;
  } */

  input::placeholder {
    font-size: 18px;
    font-weight: 300;
    font-style: 400;
    line-height: 0.99;
    color: #00d7ff;
  }

  .input {
    font-weight: 300;
    font-style: 400;
    line-height: 0.99;
    width: 290px;
    height: 18px;
    border: none;
    /* border-bottom: #00d7ff; */
    /* background-color: inherit; */

    /* outline: none; */
  }
  /* .inputName:not(:first-child) {
    margin-top: 20px;
  } */
  .input:hover,
  .input:focus {
    border: #00d7ff;
  }

  .input_line {
    width: 290px;
    color: #00d7ff;
  }

  .btn {
    margin-top: 20px;
    width: 100px;
    height: 25px;
    border: 1px solid;
    border-radius: 5px;
  }
  .btn:hover,
  .btn:focus {
    background: rgb(177, 122, 20);
    border: rgb(177, 122, 20);
  }
`;
