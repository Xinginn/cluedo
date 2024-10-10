import styled from 'styled-components'

const ParagraphStyled = styled.p`
  width: 100%;
  color: ${(props) => props.color ?? "black"};
  font-size: ${(props) => props.fontSize ?? "16px"};
  text-align: start;
`;

export default ParagraphStyled;