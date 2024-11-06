import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateCurrentCharacter } from '../store/characterStore'

import { Header, MovementIcons, CharactersInScene } from '../components/molecules'
import { Container } from '../components/atoms'
import { Visual } from '../components/atoms'

const Scene = () => {


  const characters = useSelector((state) => {
    return state.investigationHistory.investigation.characters
  })

  const [currentScene, setCurrentScene] = useState({
    url: '/assets/img/backgrounds/cabaret.png',
    title: 'Cabaret',
    leftScene: {
      title: 'street',
      url: '/assets/img/backgrounds/street.png'
    },
    rightScene: {
      title: 'slum',
      url: '/assets/img/backgrounds/slum.png'
    }
  })

  const dispatch = useDispatch()

  const setCurrentCharacter = (character) => {
    dispatch(updateCurrentCharacter(character))
  }

  const timer = '07:29'

  return (
    <Container.Column width={'100%'}>
      <Header title={currentScene.title} timer={timer} link={'/note'} icon={'book'} />
      <MovementIcons currentScene={currentScene} setCurrentScene={setCurrentScene} />
      <CharactersInScene characters={characters} setCurrentCharacter={setCurrentCharacter} />
      <Visual.Background url={currentScene.url} />
    </Container.Column>
  )
}

export default Scene