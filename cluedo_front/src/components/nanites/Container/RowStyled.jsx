import styled from 'styled-components'

const RowStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: ${(props) => props.alignItems ?? "center"};
  justify-content: ${(props) => props.justifyContent ?? "space-around"};
  gap: ${(props) => props.gap ?? '0'};
  margin: ${(props) => props.margin ?? '0'};
  padding: ${(props) => props.padding ?? '0'};
  width: ${(props) => props.width ?? '99vw'};
  height: ${(props) => props.height ?? "fit-content"};
  background-color: ${(props) => props.bgColor ? props.bgColor : props.theme.bgColor.primary ?? props.theme.bgColor.primary};
  position: ${(props) => props.position ?? 'initial'};
  top: ${(props) => props.top ?? ''};
  bottom: ${(props) => props.bottom ?? ''};
  left: ${(props) => props.left ?? ''};
  right: ${(props) => props.right ?? ''};
  align-self: ${(props) => props.alignSelf ?? ""};
`;

export default RowStyled