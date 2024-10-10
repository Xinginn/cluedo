import React from "react";
import { Text } from "../../nanites";

const Title = ({text, ...props}) => {
  return <Text.TitleStyled {...props}>{text}</Text.TitleStyled>
}

export default Title;