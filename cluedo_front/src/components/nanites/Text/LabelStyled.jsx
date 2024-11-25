import styled from 'styled-components'

const LabelStyled = styled.span`
  color: ${(props) => props.color ?? "black"};
  font-size: 14px;
`;

export default LabelStyled