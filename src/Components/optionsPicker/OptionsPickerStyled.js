import styled from "styled-components";

export const OptionsPickerStyled = styled.div`
  .difficulty_button {
    display: inline-flex;
    align-items: center;
    width: 120px;
    height: 16px;
    padding: 0 2px 0 21px;
    /* border-radius: 0px 25px 25px 0px; */
    cursor: pointer;
    font-size: 16px;
    line-height: 16px;
    letter-spacing: 0.02em;
    text-transform: capitalize;
  }

  .category_button:hover,
  .category_button:focus {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    transition: box-shadow 300ms ease-in-out;
  }

  .difficulty_buttonLabel_challenge {
    color: var(--secondary-text-color);
  }

  .difficulty_buttonLabel {
    margin-right: 7px;
    color: var(--secondary-text-color);
  }

  .d_level_easy {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: var(--accent-color);
    margin-right: 7px;
  }
  .d_level_normal {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: var(--accent-color);
    margin-right: 7px;
    background-color: #24d40c;
  }
  .d_level_hard {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: var(--accent-color);
    margin-right: 7px;
    background-color: #db0837;
  }
  /*Category styles*/

  .category_button {
    display: inline-flex;
    align-items: center;
    width: 120px;
    height: 35px;
    padding: 10px 2px 10px 21px;
    border-radius: 0px 25px 25px 0px;
    cursor: pointer;
    letter-spacing: 0.02em;

    text-transform: uppercase;
    font-size: 14px;
    line-height: 14px;
    transition: box-shadow 300ms ease-in-out;
  }
  .category_buttonLabel {
    margin-right: 3px;
  }

  .stuff {
    background-color: var(--stuff-bg-color);
  }
  .family {
    background-color: var(--family-bg-color);
  }
  .health {
    background-color: var(--health-bg-color);
  }
  .learning {
    background-color: var(--learning-bg-color);
  }
  .leisure {
    background-color: var(--leisure-bg-color);
  }
  .work {
    background-color: var(--work-bg-color);
  }

  @media screen and (min-width: 768px) {
    .d_level_easy,
    .d_level_normal,
    .d_level_hard {
      width: 8px;
      height: 8px;
    }

    .difficulty_button {
      font-size: 14px;
      line-height: 14px;
      width: 120px;
      height: 25px;
      padding: 6px 2px 6px 21px;
      border-radius: 0px 15px 15px 0px;
    }
    .category_button {
      height: 35px;
      width: 95px;
      font-size: 11px;
      line-height: 11px;
    }
    .d_level_easy {
      width: 8px;
      height: 8px;
    }
  }
`;
