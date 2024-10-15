import React from 'react'
import GameCard from '../components/molecules/GameCard'
import { Container, Action, Text } from '../components/atoms'

const Games = () => {

  const games = [
    {
      title: 'Partie 1',
    },
    {
      title: 'Partie 2',
    },
    {
      title: 'Partie 3',
    },
    {
      title: 'Partie 4',
    },
  ]

  const handleNewPartie = () => {
    console.log('New Partie')
  }

  return (
    <Container.Grid>
      {games.map((game, index) => (
        <GameCard game={game} key={index} />
      ))}
      <Action.Button onClick={handleNewPartie}>
        <Text.Label>Nouvelle partie</Text.Label>
      </Action.Button>
    </Container.Grid>
  )
}

export default Games