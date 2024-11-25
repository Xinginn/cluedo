import styled from 'styled-components'

const NameStyled = styled.span`
  color: ${(props) => props.color ?? "blue"};
  font-size: ${(props) => props.fontSize ?? "16px"};
  font-weight: ${(props) => props.fontWeight ?? "700"};
`;

export default NameStyled