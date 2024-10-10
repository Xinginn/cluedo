import styled from 'styled-components'

const RowStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: ${(props) => props.alignItems ?? "center"};
  justify-content: ${(props) => props.justifyContent ?? "space-around"};
  height: ${(props) => props.height ?? '100vh'};
  margin: ${(props) => props.margin ?? '0'};
  padding: ${(props) => props.padding ?? '0'};
  background-color: ${(props) => props.bgColor ?? "transparent"};
`;

export default RowStyled;