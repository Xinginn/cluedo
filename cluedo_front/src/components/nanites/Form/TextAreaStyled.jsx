import styled from 'styled-components'

const TextAreaStyled = styled.textarea`
font-family: Arial;
width: 100%;
padding: 0.5rem;
border-radius: 5px;
border: 1px solid black;
&:focus {
  outline: 0;
};
resize: none;
`;

export default TextAreaStyled