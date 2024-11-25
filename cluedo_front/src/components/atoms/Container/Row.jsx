import React from "react"
import { Container } from "../../nanites"

const Row = ({ children, ...props }) => {
  return <Container.RowStyled {...props}>{children}</Container.RowStyled>
}

export default Row