import React from "react";
import { Text } from "../../nanites";

const Name = ({text, ...props}) => {
  return <Text.NameStyled {...props}>{text}</Text.NameStyled>;
}

export default Name;