import React from "react"
import { Container } from "../../nanites"

const Theme = ({ children, ...props }) => {
  return <Container.ThemeStyled {...props}>{children}</Container.ThemeStyled>
}

export default Theme