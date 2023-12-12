import React from 'react';
import { ButtonProps } from './Button.types';
import StyledButton from './Button.styles'

const Button: React.FC<ButtonProps> = ({
  text,
  size,
  type,
  variant,
  onClick,
  icon,
  iconPosition,
  ...props
}) => {
  return (
    <StyledButton type={type} size={size} onClick={onClick} disabled={props.disabled} {...props}>{props.children}</StyledButton>
  )
}

export default Button;