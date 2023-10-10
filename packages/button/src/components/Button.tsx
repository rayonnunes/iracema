import React, { ButtonHTMLAttributes } from "react";
import * as S from './Button.styled'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

function Button(props: ButtonProps) {
  const { children, onClick } = props;
  return <S.Button onClick={onClick}>{children}</S.Button>;
}

export default Button;
