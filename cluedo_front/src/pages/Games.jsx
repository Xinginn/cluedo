import React, { useContext, useEffect } from 'react'
import GameCard from '../components/molecules/GameCard'
import { Container, Action, Text } from '../components/atoms'
import { useDispatch, useSelector } from 'react-redux'
import { createNewInvestigation } from '../store/investigationStore'
import { useNavigate } from "react-router-dom"
import { updateCurrentScene } from '../store/currentSceneStore'
import Loader from '../components/molecules/Loader'
import { AlternativeThemeProviderContext } from '../provider/AlternativeThemeProvider'


const Games = () => {

  const navigate = useNavigate()
  const status = useSelector((state) => state.investigationHistorySlice.status)
  const characters = useSelector((state) => state.investigationHistorySlice.investigation.characters)
  const dispatch = useDispatch()
  const { wichTheme, toggleTheme } = useContext(AlternativeThemeProviderContext)

  useEffect(() => {
    if (status === 'success') {
      const scene = 1
      dispatch(updateCurrentScene({ characters, scene }))
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
    <Container.Column width={'100%'}>
      {status === 'loading' ?
        <Loader text={'Création de la partie. Cela peut prendre quelques instants...'}></Loader>
        : null}
      <Action.Button onClick={toggleTheme}>Changer de theme</Action.Button>
      <Container.Grid>
        {games.map((game, index) => (
          <GameCard game={game} key={index} />
        ))}
        <Action.Button onClick={handleNewPartie}>
          <Text.Label>Nouvelle partie</Text.Label>
        </Action.Button>
      </Container.Grid>
      {
        wichTheme.slug ? 'Theme alternatif' : 'Theme classique'
      }
    </Container.Column>
  )
}

export default Games