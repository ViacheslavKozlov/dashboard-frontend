import PropTypes from "prop-types";
import { CustomRadioListStyled } from "./CustomRadioListStyled";
import { CSSTransition } from "react-transition-group";

const CustomRadioList = ({ isChallenge, type, options, value, handleOptionsChange }) => {
  const isDifficultyType = type === "difficulty";
  const containerStyle =
    isChallenge && isDifficultyType ? [`${type}_container`, "dark_container"].join(" ") : `${type}_container`;
  const radioStyle = isChallenge && isDifficultyType ? `${type}_dark_radio` : `${type}_radio`;

  return (
    <CustomRadioListStyled>
      <CSSTransition in={true} appear={true} timeout={250} classNames="fade">
        <ul className={containerStyle}>
          {options.map(option => (
            <li key={option}>
              <label className={`${type}_label`}>
                <input
                  type="radio"
                  checked={value === option}
                  name={type}
                  value={option}
                  onChange={handleOptionsChange}
                  className={radioStyle}
                />
                {isDifficultyType ? (
                  <>
                    <span className="radio_outline" />
                    <span className={[`${type}_text`, `${option}`].join(" ")}>{option}</span>
                  </>
                ) : (
                  <span className={`${type}_text`}>{option}</span>
                )}
              </label>
            </li>
          ))}
        </ul>
      </CSSTransition>
    </CustomRadioListStyled>
  );
};

export default CustomRadioList;

CustomRadioList.propTypes = {
  isChallenge: PropTypes.bool,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  handleOptionsChange: PropTypes.func.isRequired
};
