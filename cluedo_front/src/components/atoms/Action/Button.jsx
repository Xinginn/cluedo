import React from "react"
import { Action } from "../../nanites"

const Button = ({ children, ...props }) => {
  return <Action.ButtonStyled {...props}>{children}</Action.ButtonStyled>
}

export default Button

