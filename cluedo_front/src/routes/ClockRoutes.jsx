import React from 'react'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const ClockRoutes = ({ children }) => {

  const remainingSeconds = useSelector((state) => state.investigationHistorySlice.remainingSeconds)

  if (remainingSeconds < 1) {
    return <Navigate to="/note" replace />
  }

  return children
}

export default ClockRoutes