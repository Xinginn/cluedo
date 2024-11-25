import React from "react"
import { Text } from "../../nanites"

const Paragraph = ({ ...props }) => {
  return <Text.ParagraphStyled {...props}></Text.ParagraphStyled>
}

export default Paragraph