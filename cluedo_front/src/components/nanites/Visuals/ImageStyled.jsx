import styled from 'styled-components'

const ImageStyled = styled.img`
display: block;
width: ${(props) => props.width ?? "auto"};
height: ${(props) => props.height ?? "100%"};
object-fit: cover;
`;

export default ImageStyled