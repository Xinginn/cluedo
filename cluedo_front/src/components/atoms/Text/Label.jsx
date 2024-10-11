import React from "react";
import { Text } from "../../nanites";

const Label = ({...props}) => {
  return <Text.LabelStyled {...props}></Text.LabelStyled>;
}

export default Label;