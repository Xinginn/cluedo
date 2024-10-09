import styled from 'styled-components'

const NameStyled = styled.span`
  color: ${(props) => props.color ?? "black"};
  font-size: ${(props) => props.fontSize ?? "14px"};
`;

export default NameStyled;