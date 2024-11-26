import styled from 'styled-components'

const ColumnStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => props.alignItems ?? "center"};
  justify-content: ${(props) => props.justifyContent ?? "flex-start"};
  gap: ${(props) => props.gap ?? "8px"};
  width: ${(props) => props.width ?? 'fit-content'};
  height: ${(props) => props.height ?? 'fit-content'};
  max-height: ${(props) => props.maxHeight ?? ''};
  background-color: ${(props) => props.bgColor ? props.bgColor : props.theme.bgColor.primary ?? props.theme.bgColor.primary};
  padding: ${(props) => props.padding ?? '0'};
  position: ${(props) => props.position ?? 'initial'};
  top: ${(props) => props.top ?? ''};
  bottom: ${(props) => props.bottom ?? ''};
  left: ${(props) => props.left ?? ''};
  right: ${(props) => props.right ?? ''};
  overflow-y: ${(props) => props.overflowY ?? 'visible'};
`;

export default ColumnStyled