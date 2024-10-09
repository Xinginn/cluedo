import React from 'react'
import { Form } from '../../nanites'

const Button = ({ children, ...props }) => {
  return (
    <Form.ButtonStyled {...props}>{children}</Form.ButtonStyled>
  )
}

export default Button