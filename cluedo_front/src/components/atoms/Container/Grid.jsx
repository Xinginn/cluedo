import React from "react"
import { Container } from "../../nanites"

const Grid = ({ children, ...props }) => {
  return <Container.GridStyled {...props}>{children}</Container.GridStyled>
}

export default Grid