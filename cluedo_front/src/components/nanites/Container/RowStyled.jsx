import styled from 'styled-components'

const RowStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: ${(props) => props.alignItems ?? "center"};
  justify-content: ${(props) => props.justifyContent ?? "space-around"};
  background-color: ${(props) => props.bgColor ?? "white"};
  margin: ${(props) => props.margin ?? '0'};
  padding: ${(props) => props.padding ?? '0'};
  height: ${(props) => props.height ?? "fit-content"};
`;

export default RowStyled;