import React from 'react'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const ProtectionRoutes = ({ children }) => {

  const { isConnected, status } = useSelector((state) => ({ isConnected: state.userHistorySlice.isConnected, status: state.userHistorySlice.status, }))

  if (status === 'loading') {
    return <div>Chargement...</div>
  }

  if (!isConnected && status !== 'loading') {
    return <Navigate to="/" replace />
  }

  return children
}

export default ProtectionRoutes