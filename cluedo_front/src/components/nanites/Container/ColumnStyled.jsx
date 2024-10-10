import styled from 'styled-components'

const ColumnStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => props.alignItems ?? "center"};
  justify-content: ${(props) => props.justifyContent ?? "flex-start"};
  gap: ${(props) => props.gap ?? "8px"};
`;

export default ColumnStyled;