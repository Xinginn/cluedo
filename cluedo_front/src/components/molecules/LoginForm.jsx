import React from 'react'
import { Container, Form, Text } from '../atoms'

const LoginForm = ({ username, password, setUsername, setPassword, handleLogin }) => {
  return (
    <Container.Column bgColor={'transparent'}>
      <Text.Title>Connexion</Text.Title>
      <Form.Input placeholder={'Nom d\'utilisateur'} value={username} required onChange={(e) => setUsername(e.target.value)} />
      <Form.Input placeholder={'Mot de passe'} type={'password'} value={password} required onChange={(e) => setPassword(e.target.value)} />
      <Form.Button onClick={() => handleLogin()}>Se connecter</Form.Button>
    </Container.Column>
  )
}

export default LoginForm