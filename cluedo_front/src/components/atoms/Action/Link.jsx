import React from 'react'
import { Link as RouterLink } from 'react-router-dom'

const Link = ({ to, ...props }) => {
  return (
    <RouterLink to={{ pathname: to }} {...props}></RouterLink>
  )
}


export default Link
