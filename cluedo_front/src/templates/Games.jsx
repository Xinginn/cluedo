import React, { useEffect } from 'react'
import GameCard from '../components/molecules/GameCard'
import { Container, Action, Text } from '../components/atoms'
import { useDispatch, useSelector } from 'react-redux'
import { createNewInvestigation } from '../store/investigationStore'
import { useNavigate } from "react-router-dom";
import { updateCharacters } from '../store/currentSceneStore'


const Games = () => {

  const navigate = useNavigate();
  const status = useSelector((state) => state.investigationHistorySlice.status)
  const characters = useSelector((state) => state.investigationHistorySlice.investigation.characters)
  const dispatch = useDispatch()

  useEffect(() => {
    if (status === 'success') {
      const scene = 1
      dispatch(updateCharacters({ characters, scene }))
      navigate('/scene')
    }
  }, [status])


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
    dispatch(createNewInvestigation())


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