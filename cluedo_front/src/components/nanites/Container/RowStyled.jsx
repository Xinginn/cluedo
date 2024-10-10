import styled from 'styled-components'

const RowStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: ${(props) => props.alignItems ?? "center"};
  justify-content: ${(props) => props.justifyContent ?? "space-around"};
`;

export default RowStyled;