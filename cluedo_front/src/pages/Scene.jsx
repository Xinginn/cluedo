import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateCurrentCharacter } from '../store/currentCharacterStore'

import { Header, MovementIcons, CharactersInScene } from '../components/molecules'
import { Container } from '../components/atoms'
import { Visual } from '../components/atoms'
import { updateCurrentScene } from '../store/currentSceneStore'
import SummaryModal from '../components/molecules/SummaryModal'

const Scene = () => {

  const [summaryDisplay, setSummaryDisplay] = useState(true)

  const currentSceneCharacters = useSelector((state) => {
    return state.currentSceneHistorySlice.characters
  })
  const investigation = useSelector((state) => {
    return state.investigationHistorySlice.investigation
  })
  const currentScene = useSelector((state) => {
    return state.currentSceneHistorySlice.currentScene
  })

  const dispatch = useDispatch()

  const handleSceneChange = (scene) => {
    const characters = investigation.characters
    dispatch(updateCurrentScene({ characters, scene }))
  }

  const setCurrentCharacter = (character) => {
    dispatch(updateCurrentCharacter(character))
  }

  const displaySummary = () => {
    setSummaryDisplay(!summaryDisplay)
  }

  const timer = '07:29'

  return (
    <Container.Column width={'100%'} bgColor={'transparent'}>
      {summaryDisplay &&
        <SummaryModal displaySummary={displaySummary}>{investigation.autopsy}</SummaryModal>
      }
      <Header title={currentScene.title} timer={timer} link={'/note'} icon={'book'} />
      <MovementIcons currentScene={currentScene} setCurrentScene={handleSceneChange} />
      <CharactersInScene characters={currentSceneCharacters} setCurrentCharacter={setCurrentCharacter} />
      <Visual.Background url={currentScene.url} />
    </Container.Column>
  )
}

export default Scene