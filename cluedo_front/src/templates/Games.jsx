import React from 'react'
import GameCard from '../components/molecules/GameCard'
import { Container } from '../components/atoms'

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

  return (
    <Container.Grid>
      {games.map((game, index) => (
        <GameCard game={game} key={index} />
      ))}
    </Container.Grid>
  )
}

export default Games