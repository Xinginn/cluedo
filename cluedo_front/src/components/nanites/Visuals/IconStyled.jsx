import styled from 'styled-components'

const IconStyled = styled.img`
display: block;
width: ${(props) => props.width ?? '100%'};
height: ${(props) => props.height ?? '100%'};
object-fit: cover;
`;

export default IconStyled