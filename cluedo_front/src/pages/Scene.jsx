import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Header, MovementIcons, CharactersInScene } from '../components/molecules'
import { Container } from '../components/atoms'
import { Visual } from '../components/atoms'

import { updateCurrentCharacter } from '../store/currentCharacterStore'
import { updateCurrentScene } from '../store/currentSceneStore'
import { toggleSummaryShown } from '../store/investigationStore'
import SummaryModal from '../components/molecules/SummaryModal'

const Scene = () => {

  const currentSceneCharacters = useSelector((state) => state.currentSceneHistorySlice.characters)
  const investigation = useSelector((state) => state.investigationHistorySlice.investigation)
  const currentScene = useSelector((state) => state.currentSceneHistorySlice.currentScene)
  const isSummaryShown = useSelector((state) => state.investigationHistorySlice.isSummaryShown)

  const dispatch = useDispatch()

  const handleSceneChange = (scene) => {
    const characters = investigation.characters
    dispatch(updateCurrentScene({ characters, scene }))
  }

  const setCurrentCharacter = (character) => {
    dispatch(updateCurrentCharacter(character))
  }

  const handleSummaryClick = () => {
    dispatch(toggleSummaryShown())
  }

  return (
    <Container.Column width={'100%'} bgColor={'transparent'}>
      {isSummaryShown &&
        <SummaryModal onClick={() => handleSummaryClick()} autopsy={investigation.autopsy}></SummaryModal>
      }
      <Header title={currentScene.title} link={'/note'} icon={'book'} />
      <MovementIcons currentScene={currentScene} setCurrentScene={handleSceneChange} />
      <CharactersInScene characters={currentSceneCharacters} setCurrentCharacter={setCurrentCharacter} />
      <Visual.Background url={currentScene.url} />
    </Container.Column>
  )
}

export default Scene