import React, { useContext, useEffect } from 'react'
import GameCard from '../components/molecules/GameCard'
import { Container, Action, Text } from '../components/atoms'
import { useDispatch, useSelector } from 'react-redux'
import { createNewInvestigation, fetchInvestigationById } from '../store/investigationStore'
import { useNavigate } from "react-router-dom"
import { updateCurrentScene } from '../store/currentSceneStore'
import { AlternativeThemeProviderContext } from '../provider/AlternativeThemeProvider'
import { Loader } from '../components/molecules'
import { disconnectUser } from '../store/userStore'


const Games = () => {

  const navigate = useNavigate()
  const { characters, status } = useSelector((state) => ({ characters: state.investigationHistorySlice.investigation.characters, status: state.investigationHistorySlice.status }))
  const { token, user } = useSelector((state) => ({ token: state.userHistorySlice.token, user: state.userHistorySlice.user }))
  const dispatch = useDispatch()
  const { wichTheme, toggleTheme } = useContext(AlternativeThemeProviderContext)

  useEffect(() => {
    if (status === 'success') {
      const scene = 1
      dispatch(updateCurrentScene({ characters, scene }))
      navigate('/scene')
    }
  }, [status])

  const handleNewPartie = () => {
    dispatch(createNewInvestigation(token))
  }

  const handleDisconnect = () => {
    dispatch(disconnectUser())
  }

  const handleSetInvestigation = (id) => {
    dispatch(fetchInvestigationById({ id }))
  }

  return (
    <Container.Column width={'100%'}>
      {status === 'loading' ?
        <Loader text={'Création de la partie. Cela peut prendre quelques instants...'}></Loader>
        : null}
      <Action.Button onClick={toggleTheme}>Changer de theme</Action.Button>
      <Action.Button onClick={handleNewPartie}>
        <Text.Label>Nouvelle partie</Text.Label>
      </Action.Button>
      <Container.Column>
        {user.investigations.map((game, index) => (
          <GameCard onClick={() => handleSetInvestigation(game.id)} game={game} key={index} />
        ))}
      </Container.Column>
      <Text.Label>
        Theme {wichTheme.slug}
      </Text.Label>
      <Action.Button onClick={handleDisconnect}>Déconnection</Action.Button>
    </Container.Column>
  )
}

export default Games