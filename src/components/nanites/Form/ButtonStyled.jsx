import styled from 'styled-components'

const ButtonStyled = styled.button`
background-color: ${(props) => props.backgroundColor ?? 'black'};
color: ${(props) => props.color ?? 'white'};
padding: 10px;
border: none;
border-radius: 5px;
cursor: pointer;
&:hover {
  opacity: 0.5;
};
transition: all 0.2s;
`;

export default ButtonStyled