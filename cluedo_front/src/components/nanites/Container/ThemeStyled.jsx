import styled from 'styled-components'

const ThemeStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: ${(props) => props.alignItems ?? "center"};
  justify-content: ${(props) => props.justifyContent ?? "space-around"};
  gap: ${(props) => props.gap ?? '0'};
  margin: ${(props) => props.margin ?? '0'};
  padding: ${(props) => props.padding ?? '0'};
  width: ${(props) => props.width ?? '99vw'};
  height: ${(props) => props.height ?? "fit-content"};
  background-color: ${(props) => props.theme.bgColor.primary};
`;

export default ThemeStyled