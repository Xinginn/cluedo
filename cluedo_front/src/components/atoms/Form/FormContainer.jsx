import React from 'react'
import { Form } from '../../nanites'

const FormContainer = ({ children, ...props }) => {
  return (
    <Form.FormContainerStyled {...props}>{children}</Form.FormContainerStyled>
  )
}

export default FormContainer