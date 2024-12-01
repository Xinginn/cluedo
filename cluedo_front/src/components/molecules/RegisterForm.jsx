import React from 'react'
import { Container, Form, Text } from '../atoms'

const RegisterForm = ({ username, password, setUsername, setPassword, handleRegister }) => {
  return (
    <Container.Column bgColor={'transparent'}>
      <Text.Title>Inscription</Text.Title>
      <Form.Input placeholder={'Nom d\'utilisateur'} value={username} required onChange={(e) => setUsername(e.target.value)} />
      <Form.Input placeholder={'Mot de passe'} type={'password'} value={password} required onChange={(e) => setPassword(e.target.value)} />
      <Form.Button onClick={() => handleRegister()}>S'inscrire</Form.Button>
    </Container.Column>
  )
}

export default RegisterForm