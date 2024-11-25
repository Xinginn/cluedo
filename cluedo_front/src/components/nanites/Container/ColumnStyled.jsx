import styled from 'styled-components'

const ColumnStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => props.alignItems ?? "center"};
  justify-content: ${(props) => props.justifyContent ?? "flex-start"};
  gap: ${(props) => props.gap ?? "8px"};
  width: ${(props) => props.width ?? 'fit-content'};
  height: ${(props) => props.height ?? 'fit-content'};
  background-color: ${(props) => props.bgColor ?? "transparent"};
  padding: ${(props) => props.padding ?? '0'};
  position: ${(props) => props.position ?? 'initial'}
`;

export default ColumnStyled