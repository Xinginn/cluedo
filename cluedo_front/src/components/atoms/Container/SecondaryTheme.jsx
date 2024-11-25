import React from "react"
import { Container } from "../../nanites"

const SecondaryTheme = ({ children, ...props }) => {
  return <Container.SecondaryThemeStyled {...props}>{children}</Container.SecondaryThemeStyled>
}

export default SecondaryTheme