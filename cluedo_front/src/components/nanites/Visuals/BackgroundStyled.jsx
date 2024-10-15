import styled from 'styled-components'

const BackgroundStyled = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-image: url(${(props) => props.url ?? '/assets/img/switch1.webp'});
background-size: cover;
background-position: center;
z-index: -1;
`;

export default BackgroundStyled;