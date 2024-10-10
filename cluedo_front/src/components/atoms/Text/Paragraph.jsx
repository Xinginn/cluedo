import React from "react";
import { Text } from "../../nanites";

const Paragraph = ({text, ...props}) => {
  return <Text.ParagraphStyled {...props}>{text}</Text.ParagraphStyled>;
}

export default Paragraph;