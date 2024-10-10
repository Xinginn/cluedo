import styled from 'styled-components'

const ImageStyled = styled.img`
display: block;
<<<<<<< HEAD
width: ${(props) => props.width ?? '100%'};
height: 100%;
=======
width: ${(props) => props.width ?? "auto"};
height: ${(props) => props.height ?? "100%"};
>>>>>>> 3140997 (wip sizing)
object-fit: cover;
`;

export default ImageStyled;