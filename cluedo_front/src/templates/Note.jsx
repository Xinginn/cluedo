import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateCurrentCharacter } from '../store'


import { Header, CharacterList } from '../components/molecules'
import { Container } from '../components/atoms'

const Note = () => {
  
  const dispatch = useDispatch()

  const characters = useSelector((state) => {
    return state.characterHistory.characters;
  })
  
  const setCurrentCharacter = (id) => {
    dispatch(updateCurrentCharacter({ id }))
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
      <Header title={data.currentScene.title} timer={data.timer} icon='close' />
      <CharacterList characters={characters} onClick={setCurrentCharacter}/>
    </Container.Column>
  )
}

export default Note