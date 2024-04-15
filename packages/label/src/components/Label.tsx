import React, { LabelHTMLAttributes } from "react";

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {}

function Label(props: LabelProps) {
  return <label {...props} />
}

export default Label;
