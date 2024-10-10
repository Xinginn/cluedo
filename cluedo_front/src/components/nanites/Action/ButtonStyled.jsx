import styled from 'styled-components'

const ButtonStyled = styled.button`
  border: ${(props) => props.border ?? "none"};
  padding: ${(props) => props.padding ?? "2px"}; 
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default ButtonStyled;