import React from "react"
import { Container } from "../../nanites"

const Column = ({ children, ...props }) => {
  return <Container.ColumnStyled {...props}>{children}</Container.ColumnStyled>
}

export default Column