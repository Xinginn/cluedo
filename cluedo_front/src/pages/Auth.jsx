import React, { useEffect, useState } from 'react'
import LoginForm from '../components/molecules/LoginForm'
import { Container } from '../components/atoms'
import { useDispatch, useSelector } from 'react-redux'
import { connectUser } from '../store/userStore'
import { useNavigate } from 'react-router-dom'

const Auth = () => {

  const [username, setUsername] = useState(undefined)
  const [password, setPassword] = useState(undefined)
  const navigate = useNavigate()


  const { isConnected, status } = useSelector((state) => ({ isConnected: state.userHistorySlice.isConnected, status: state.userHistorySlice.status, }))

  const dispatch = useDispatch()

  useEffect(() => {
    if (isConnected && status === 'success')
      navigate('/games')
  }, [status])

  const handleLogin = () => {
    dispatch(connectUser({ username, password }))
  }

  return (
    <Container.Column bgColor={'transparent'} width={'100vw'} height={'100vh'} justifyContent={'center'}>
      <LoginForm username={username} password={password} setUsername={setUsername} setPassword={setPassword} handleLogin={handleLogin} />
    </Container.Column>
  )
}

export default Auth