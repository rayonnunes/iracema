import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

function Button(props: ButtonProps) {
  const { children, onClick } = props;
  return <button onClick={onClick}>{children}</button>;
}

export default Button;
