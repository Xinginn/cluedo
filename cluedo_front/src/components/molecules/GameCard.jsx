import React from 'react'
import { Container, Text } from '../atoms'

const GameCard = ({ game, ...props }) => {

  return (
    <Container.Column {...props} height={'7rem'} bgColor={'grey'} padding={'1rem'} justifyContent={'center'}>
      <Text.Title fontSize={'15px'}>{`Affaire ${game.victimName} ${game.setting}`}</Text.Title>
    </Container.Column >
  )
}

export default GameCard