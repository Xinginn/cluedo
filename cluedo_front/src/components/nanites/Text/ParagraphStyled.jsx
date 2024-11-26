import styled from 'styled-components'

const ParagraphStyled = styled.p`
  width: ${(props) => props.width ?? "100%"};
  color: ${(props) => props.color ?? "black"};
  font-size: ${(props) => props.fontSize ?? "16px"};
  text-align: ${(props) => props.textAlign ?? "start"};
  align-self: ${(props) => props.alignSelf ?? ""};
  padding: ${(props) => props.padding ?? "0"};
  border-radius: ${(props) => props.borderRadius ?? "0"};
  background-color: ${(props) => props.bgColor ? props.bgColor : props.theme.bgColor.primary ?? props.theme.bgColor.primary};
`;

export default ParagraphStyled