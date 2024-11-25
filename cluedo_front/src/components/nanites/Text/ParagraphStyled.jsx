import styled from 'styled-components'

const ParagraphStyled = styled.p`
  width: ${(props) => props.width ?? "100%"};
  color: ${(props) => props.color ?? "black"};
  font-size: ${(props) => props.fontSize ?? "16px"};
  text-align: ${(props) => props.textAlign ?? "start"};
`;

export default ParagraphStyled