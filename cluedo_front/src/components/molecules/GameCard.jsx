import React from 'react'
import { Container, Text } from '../atoms'

const GameCard = ({ game }) => {

  return (
    <Container.Column width={'7rem'} bgColor={'grey'} padding={'1rem'} justifyContent={'center'}>
      <Text.Title>{game.title}</Text.Title>
    </Container.Column >
  )
}

export default GameCard