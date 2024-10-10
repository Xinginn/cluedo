import React from 'react'
import { Form } from '../../nanites'

const Input = ({ ...props }) => {
  return (
    <Form.InputStyled {...props} />
  )
}

export default Input