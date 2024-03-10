import styled, { css } from "styled-components";

// Props
import { ButtonProps } from "../../props";

const ButtonStyle = css`
  font-family: inherit;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 40px;
  transition: all 0.3s ease;
  cursor: pointer;
  color: white;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.4em;
  letter-spacing: .2rem;

 
`;

const StyledButtonList = styled.button`
  ${ButtonStyle};
`;

const Button = (props) => {
  const { children, variant, to }  = props;

  return <StyledButtonList variant={variant} href={to}>{children}</StyledButtonList>;
};

export default Button;
Button.propTypes = ButtonProps;

Button.defaultProps = {
  variant: "light",
}

