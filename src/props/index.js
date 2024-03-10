import PropTypes from "prop-types";

export const ButtonProps = {
  /** Button's path **(only used if `type` prop equals to `link`)** */
  to: PropTypes.string,
  /** Button's class name */
  className: PropTypes.string,
  /** Determines what HTML tag will be used to render the button */
  type: PropTypes.oneOf(["button", "link", "submit"]),
  /** Determines if the Button's path is an external URL */
  external: PropTypes.bool,
  /** Button's content */
  children: PropTypes.node.isRequired,
  /** Button's Theme */
  theme: PropTypes.oneOf(["light", "dark"]),
  /** Button's fill */
  fill: PropTypes.oneOf(["solid", "bordered"]),
  disabled: PropTypes.bool,
};
