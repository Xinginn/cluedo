import React from "react";
import { Action } from "../../nanites";

const Button = ({children, ...props}) => {
  return <Action.ButtonStyled>{children}</Action.ButtonStyled>;
}

export default Button;

