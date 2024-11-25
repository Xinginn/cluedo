import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateCurrentCharacter } from '../store/currentCharacterStore'

import { Header, MovementIcons, CharactersInScene } from '../components/molecules'
import { Container } from '../components/atoms'
import { Visual } from '../components/atoms'
import { updateCurrentScene } from '../store/currentSceneStore'

const Scene = () => {


  const currentSceneCharacters = useSelector((state) => {
    return state.currentSceneHistorySlice.characters
  })
  const characters = useSelector((state) => {
    return state.investigationHistorySlice.investigation.characters
  })
  const currentScene = useSelector((state) => {
    return state.currentSceneHistorySlice.currentScene
  })

  const dispatch = useDispatch()

  const handleSceneChange = (scene) => {
    dispatch(updateCurrentScene({ characters, scene }))
  }

  const setCurrentCharacter = (character) => {
    dispatch(updateCurrentCharacter(character))
  }

  const timer = '07:29'

  return (
    <Container.Column width={'100%'} bgColor={'transparent'}>
      <Header title={currentScene.title} timer={timer} link={'/note'} icon={'book'} />
      <MovementIcons currentScene={currentScene} setCurrentScene={handleSceneChange} />
      <CharactersInScene characters={currentSceneCharacters} setCurrentCharacter={setCurrentCharacter} />
      <Visual.Background url={currentScene.url} />
    </Container.Column>
  )
}

export default Scene