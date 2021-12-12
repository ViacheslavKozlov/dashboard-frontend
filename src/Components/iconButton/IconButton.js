import PropTypes from "prop-types";
import { IconButtonStyled } from "./IconButtonStyled";

const IconButton = ({ children, onClick, className, ...allProps }) => {
  const classList = [className, "IconButton"].join(" ");

  return (
    <IconButtonStyled>
      <button onClick={onClick} className={classList} {...allProps}>
        {children}
      </button>
    </IconButtonStyled>
  );
};

IconButton.defaultProps = {
  onClick: () => null,
  children: null,
};

IconButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  "aria-label": PropTypes.string,
};

export default IconButton;
