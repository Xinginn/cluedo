import React from "react";
import { Text } from "../../nanites";

const Label = ({text, ...props}) => {
  return <Text.LabelStyled {...props}>{text}</Text.LabelStyled>;
}

export default Label;