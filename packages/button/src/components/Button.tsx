import React, { ButtonHTMLAttributes } from "react";
import { Button as SButton } from './Button.styled'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

function Button(props: ButtonProps) {
  const { children, onClick } = props;
  return <SButton onClick={onClick}>{children}</SButton>;
}

export default Button;
