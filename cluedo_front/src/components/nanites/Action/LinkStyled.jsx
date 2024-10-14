import styled from 'styled-components'

const LinkStyled = styled.a`
  text-decoration: none;
  color: ${(props) => props.color ?? 'black'};
  width: ${(props) => props.width ?? 'fit-content'}
`;

export default LinkStyled