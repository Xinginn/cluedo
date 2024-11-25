import styled from 'styled-components'

const ButtonStyled = styled.button`
  border: ${(props) => props.border ?? "none"};
  padding: ${(props) => props.padding ?? "2px"}; 
  height: ${(props) => props.height ?? "100%"}; 
  width: ${(props) => props.width ?? "100%"}; 
  display: flex;
  justify-content: center;
  align-items: center;
  margin: ${(props) => props.margin ?? '0'};
  background-color: ${(props) => props.bgColor ?? '#e2e2e6'};
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.bgColorHover ?? '#d0d0d7'};
  }
`;

export default ButtonStyled