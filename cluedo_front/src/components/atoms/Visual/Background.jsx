import React from 'react'
import { Visual } from '../../nanites'

const Background = ({ ...props }) => {
  return (
    <Visual.BackgroundStyled {...props}></Visual.BackgroundStyled>
  )
}

export default Background