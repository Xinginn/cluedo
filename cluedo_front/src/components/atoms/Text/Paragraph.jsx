import React from "react";
import { Text } from "../../nanites";

const Paragraph = ({ children, ...props }) => {
  return <Text.ParagraphStyled {...props}>{children}</Text.ParagraphStyled>;
}

export default Paragraph;