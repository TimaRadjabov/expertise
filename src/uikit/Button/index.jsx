import classNames from "classnames";
import PropTypes from "prop-types";
import "./ButtonStyles.scss"

export const Button = ({ className, children, onClick, ...props }) => {
  return (
    <button
      className={classNames("Button", className)}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
};
