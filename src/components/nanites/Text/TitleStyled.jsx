import styled from 'styled-components'

const TitleStyled = styled.h1`
  color: ${(props) => props.color ?? "black"};
  font-size: ${(props) => props.fontSize ?? "40px"};
  font-weight: ${(props) => props.fontWeight ?? "700"};
`;

export default TitleStyled;