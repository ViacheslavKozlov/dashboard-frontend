import PropTypes from "prop-types";
import { useState } from "react";
import CustomRadioList from "../customRadioList/CustomRadioList";
import Icon from "../Icon";
import PickerPopup from "../pickerPopup/PickerPopup";
import { OptionsPickerStyled } from "./OptionsPickerStyled";

const DIFFICULTY = ["easy", "normal", "hard"];
const CATEGORY = ["stuff", "family", "health", "learning", "leisure", "work"];

const OptionsPicker = ({ type, getOptionValue, initialValue, isChallenge }) => {
  const [value, setValue] = useState(initialValue);
  const [showModal, setShowModal] = useState(false);

  const options = type === "difficulty" ? DIFFICULTY : CATEGORY;
  const isDifficultyType = type === "difficulty";

  function handleOptionsChange(e) {
    setValue(e.target.value);
    getOptionValue(e.target.value);
    setShowModal(false);
  }

  const btnClasses = isDifficultyType
    ? `${type}_button`
    : [`${type}_button`, `${value}`].join(" ");

  const btnLabelClasses =
    isChallenge && isDifficultyType
      ? [`${type}_buttonLabel`, `${type}_buttonLabel_challenge`].join(" ")
      : `${type}_buttonLabel`;

  return (
    <OptionsPickerStyled>
      <button
        type="button"
        value={value}
        className={btnClasses}
        onClick={() => setShowModal(true)}
      >
        {isDifficultyType && <span className={`d_level_${value}`}></span>}
        <span className={btnLabelClasses}>{value}</span>
        <Icon name="triangle-down" size={12} color="#00d7ff" />
      </button>

      {showModal && (
        <PickerPopup onClose={() => setShowModal(false)}>
          <CustomRadioList
            isChallenge={isChallenge}
            type={type}
            options={options}
            value={value}
            handleOptionsChange={handleOptionsChange}
          />
        </PickerPopup>
      )}
    </OptionsPickerStyled>
  );
};

OptionsPicker.defaultProps = {
  type: "category",
  isChallenge: false,
};

OptionsPicker.propTypes = {
  type: PropTypes.string,
  getOptionValue: PropTypes.func.isRequired,
  initialValue: PropTypes.string.isRequired,
  isChallenge: PropTypes.bool,
};

export default OptionsPicker;
