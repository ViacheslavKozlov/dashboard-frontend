import styled from "styled-components";

export const CustomRadioListStyled = styled.div`
  ul {
    margin: 0;
    padding: 0;
  }
  li {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  /*Difficulty styles*/
  .difficulty_container {
    display: flex;
    flex-grow: 0;
    flex-direction: column;
    position: absolute;
    z-index: 15;
    top: -7%;
    left: 0;
    width: 90px;
    height: 80px;
    padding: 5px 2px;
    font-size: 15px;
    line-height: 15px;
    letter-spacing: 0.02em;
    color: var(--secondary-text-color);
    background-color: var(--white);
    box-shadow: -3px -4px 4px rgba(21, 57, 90, 0.05),
      3px 4px 4px rgba(21, 57, 90, 0.05);
    border-radius: 10px;
  }

  .dark_container {
    background-color: #3e4e6c;
  }

  .difficulty_label {
    display: inline-flex;
    align-items: center;
    width: 100%;
    cursor: pointer;
    padding: 4px 10px;
  }

  .difficulty_text,
  .difficulty_dark_text {
    display: inline-flex;
    align-items: center;
    text-transform: capitalize;
  }

  .difficulty_text::before {
    content: "";
    display: inline-block;
    width: 8px;
    height: 8px;
    flex-shrink: 0;
    flex-grow: 0;
    border: none;
    border-radius: 50%;
    margin-right: 7px;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 50% 50%;
  }
  .easy::before {
    background-color: var(--accent-color);
  }
  .normal::before {
    background-color: #24d40c;
  }
  .hard::before {
    background-color: #db0837;
  }
  .radio_outline {
    position: absolute;
    left: 12px;
    width: 8px;
    height: 8px;
    opacity: 0;
    border-radius: 50%;
    /* border: 2px dashed; */
  }

  .difficulty_radio:checked ~ .difficulty_text {
    color: var(--main-text-color);
  }
  .difficulty_radio:hover ~ .difficulty_text,
  .difficulty_radio:focus ~ .difficulty_text {
    color: var(--main-text-color);
  }
  .difficulty_dark_radio:checked ~ .difficulty_text {
    color: var(--white);
  }
  .difficulty_dark_radio:hover ~ .difficulty_text,
  .difficulty_dark_radio:focus ~ .difficulty_text {
    color: var(--white);
  }

  .difficulty_radio[value="easy"]:hover ~ .radio_outline,
  .difficulty_radio[value="easy"]:focus ~ .radio_outline {
    /* border-color: var(--primary-color); */
    box-shadow: 0px 0px 3px 1px var(--accent-color);
    opacity: 1;
  }
  .difficulty_radio[value="normal"]:hover ~ .radio_outline,
  .difficulty_radio[value="normal"]:focus ~ .radio_outline {
    /* border-color: var(--main-green); */
    opacity: 1;
    box-shadow: 0px 0px 3px 1px #24d40c;
  }
  .difficulty_radio[value="hard"]:hover ~ .radio_outline,
  .difficulty_radio[value="hard"]:focus ~ .radio_outline {
    /* border-color: #db0837; */
    box-shadow: 0px 0px 3px 1px #db0837;
    opacity: 1;
  }
  .difficulty_radio[value="easy"]:checked ~ .radio_outline {
    box-shadow: 0px 0px 3px 1px var(--accent-color);
    /* border-color: var(--primary-color); */
    opacity: 1;
  }
  .difficulty_radio[value="normal"]:checked ~ .radio_outline {
    box-shadow: 0px 0px 3px 1px #24d40c;
    /* border-color: var(--main-green); */
    opacity: 1;
  }
  .difficulty_radio[value="hard"]:checked ~ .radio_outline {
    box-shadow: 0px 0px 3px 1px #db0837;
    /* border-color: #db0837; */
    opacity: 1;
  }
  .difficulty_dark_radio[value="easy"]:hover ~ .radio_outline,
  .difficulty_dark_radio[value="easy"]:focus ~ .radio_outline {
    box-shadow: 0px 0px 3px 1px var(--accent-color);
    /* border-color: var(--accent-color); */
    opacity: 1;
  }
  .difficulty_dark_radio[value="normal"]:hover ~ .radio_outline,
  .difficulty_dark_radio[value="normal"]:focus ~ .radio_outline {
    box-shadow: 0px 0px 3px 1px var(#24d40c);
    /* border-color: var(#24d40c);   */
    opacity: 1;
  }
  .difficulty_dark_radio[value="hard"]:hover ~ .radio_outline,
  .difficulty_dark_radio[value="hard"]:focus ~ .radio_outline {
    box-shadow: 0px 0px 3px 1px #db0837;
    /* border-color: #db0837; */
    opacity: 1;
  }
  .difficulty_dark_radio[value="easy"]:checked ~ .radio_outline {
    box-shadow: 0px 0px 3px 1px var(--accent-color);
    /* border-color: var(--accent-color); */
    opacity: 1;
  }
  .difficulty_dark_radio[value="normal"]:checked ~ .radio_outline {
    box-shadow: 0px 0px 3px 1px #24d40c;
    /* border-color: var(#24d40c); */
    opacity: 1;
  }
  .difficulty_dark_radio[value="hard"]:checked ~ .radio_outline {
    box-shadow: 0px 0px 3px 1px #db0837;
    /* border-color: #db0837; */
    opacity: 1;
  }

  /*Category styles*/
  .category_container {
    position: absolute;
    top: 55%;
    left: 0;
    display: flex;
    flex-grow: 0;
    flex-direction: column;
    color: var(--main-text-color);
    font-size: 15px;
    line-height: 15px;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    width: 100px;
    height: 130px;
    padding: 4px 2px;
    background-color: var(--white);
    box-shadow: -3px -4px 4px rgba(21, 57, 90, 0.05),
      3px 4px 4px rgba(21, 57, 90, 0.05);
    border-radius: 10px;
    z-index: 15;
  }

  .category_radio,
  .difficulty_radio,
  .difficulty_dark_radio {
    position: absolute;
    opacity: 0;
    z-index: -1;
  }

  .category_label {
    display: inline-flex;
    align-items: center;
    width: 100%;
    cursor: pointer;
    padding: 3px 10px;
  }
  .category_text {
    display: inline-flex;
    align-items: center;
    color: var(--main-text-color);
  }

  .category_radio:checked + .category_text,
  .category_radio:hover + .category_text,
  .category_radio:focus + .category_text {
    color: var(--secondary-text-color);
  }

  @media screen and (min-width: 768px) {
    .category_container {
      font-size: 11px;
      line-height: 11px;
      width: 90px;
      height: 110px;
      padding: 6px 2px;
    }
    .difficulty_container {
      padding: 2px 2px;
      top: -7%;
      /* left: -2%; */
      font-size: 14px;
      line-height: 14px;
    }
    .difficulty_label {
      padding: 6px 10px;
    }
  }
`;
