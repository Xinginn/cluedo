import React, { useEffect, useState } from 'react'
import LoginForm from '../components/molecules/LoginForm'
import RegisterForm from '../components/molecules/RegisterForm'
import { Action, Container } from '../components/atoms'
import { useDispatch, useSelector } from 'react-redux'
import { connectUser, registerUser } from '../store/userStore'
import { useNavigate } from 'react-router-dom'

const Auth = () => {

  const [username, setUsername] = useState(undefined)
  const [password, setPassword] = useState(undefined)
  const [form, setForm] = useState('login')
  const navigate = useNavigate()


  const { isConnected, status } = useSelector((state) => ({ isConnected: state.userHistorySlice.isConnected, status: state.userHistorySlice.status, }))

  const dispatch = useDispatch()

  useEffect(() => {
    if (isConnected && status === 'success')
      navigate('/games')
  }, [status, isConnected, navigate])

  const handleLogin = () => {
    dispatch(connectUser({ username, password }))
  }

  const handleRegister = () => {
    dispatch(registerUser({ username, password }))
  }

  const changeForm = () => {
    if (form === 'login')
      setForm('register')
    if (form === 'register')
      setForm('login')
  }

  return (
    <Container.Column bgColor={'transparent'} width={'100vw'} height={'100vh'} justifyContent={'center'}>
      {form === 'login' ?
        <LoginForm username={username} password={password} setUsername={setUsername} setPassword={setPassword} handleLogin={handleLogin} />
        : form === 'register' ?
          <RegisterForm username={username} password={password} setUsername={setUsername} setPassword={setPassword} handleRegister={handleRegister} />
          : null
      }
      <Container.Column>
        <Action.Button onClick={changeForm}>
          {form === 'login' ? 'Inscription' : 'Connexion'}
        </Action.Button>
      </Container.Column>
    </Container.Column>
  )
}

export default Auth