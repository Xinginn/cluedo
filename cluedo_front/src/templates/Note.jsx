import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateCurrentCharacter } from '../store/currentCharacterStore'


import { Header, CharacterList } from '../components/molecules'
import { Container, Visual } from '../components/atoms'

const Note = () => {

  const dispatch = useDispatch()

  const characters = useSelector((state) => {
    return state.investigationHistory.investigation.characters
  })

  const setCurrentCharacter = (character) => {
    dispatch(updateCurrentCharacter({ character }))
  }

  const data = {
    timer: '07:29',
    currentScene: {
      url: '/assets/img/backgrounds/cabaret.png',
      title: 'Cabaret',
      leftScene: {
        title: 'street'
      },
      rightScene: {
        title: 'slum'
      }
    },
  }

  return (
    <Container.Column>
      <Header title={data.currentScene.title} timer={data.timer} link='/scene' icon='go-back' />
      <CharacterList characters={characters} onClick={setCurrentCharacter} />
      <Visual.Background url={'/assets/img/backgrounds/notes.jpg'} />
    </Container.Column>
  )
}

export default Note