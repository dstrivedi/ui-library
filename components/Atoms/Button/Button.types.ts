import { MouseEventHandler } from 'react';

type ButtonSize = "sm" | "md" | "lg";
type ButtonVariant = "primary" | "secondary" | "tertiary";
type ButtonType = "button" | "submit" | "reset";
type IconPosition = "left" | "right"


export interface ButtonProps {
  text?: string;
  variant?: ButtonVariant;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  size?: ButtonSize;
  iconPosition?: IconPosition,
  icon?: React.ReactNode;
  disabled?: boolean;
  type?: ButtonType;
  className?: string;
  children?: React.ReactNode
}