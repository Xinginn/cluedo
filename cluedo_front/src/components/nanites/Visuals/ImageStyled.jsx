import styled from 'styled-components'

const ImageStyled = styled.img`
display: block;
width: ${(props) => props.width ?? '100%'};
height: 100%;
object-fit: cover;
`;

export default ImageStyled;