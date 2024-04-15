import React from "react";

interface CheckboxProps extends HTMLInputElement {}

function Checkbox(_: CheckboxProps) {
  return <input type="checkbox" />;
}

export default Checkbox;
