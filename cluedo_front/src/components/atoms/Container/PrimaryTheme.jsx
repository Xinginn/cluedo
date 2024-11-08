import React from "react"
import { Container } from "../../nanites"

const PrimaryTheme = ({ children, ...props }) => {
  return <Container.PrimaryThemeStyled {...props}>{children}</Container.PrimaryThemeStyled>
}

export default PrimaryTheme