import React from "react";
import { Text } from "../../nanites";

const Name = ({ ...props }) => {
  return <Text.NameStyled {...props}></Text.NameStyled>;
}

export default Name;