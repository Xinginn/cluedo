import styled from 'styled-components'

const BackgroundStyled = styled.div`
width: 100%;
height: 100%;
background-image: url(${(props) => props.url ?? '/assets/img/switch1.webp'});
background-size: cover;
background-position: center:
`;

export default BackgroundStyled;