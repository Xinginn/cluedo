import styled from 'styled-components'

const ParagraphStyled = styled.p`
  color: ${(props) => props.color ?? "black"};
  font-size: ${(props) => props.fontSize ?? "16px"};
`;

export default ParagraphStyled;