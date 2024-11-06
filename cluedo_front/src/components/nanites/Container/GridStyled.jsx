import styled from 'styled-components'

const GridStyled = styled.div`
  display: grid;
  gap: ${(props) => props.gap ?? "8px"};
  grid-template-columns: ${(props) => props.gridTemplateColumns ?? "repeat(3, 1fr)"};
  justify-items: center;
`;

export default GridStyled;