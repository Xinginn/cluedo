import React from 'react'
import { useSelector } from 'react-redux'

import { Container, Visual } from '../components/atoms'
import { CharacterSpeech, Header, PromptInput } from '../components/molecules'

const Discussion = () => {

  const currentCharacter = useSelector((state) => {
    return state.currentCharacterHistorySlice.currentCharacter;
  })

  const data = {
    timer: '07:36',
    currentScene: {
      url: '/assets/img/backgrounds/cabaret.png',
      title: 'Cabaret',
      leftScene: {
        title: 'street'
      },
      rightScene: {
        title: 'slum'
      }
    }
  }


  return (
    <Container.Column justifyContent="space-between" height="100vh">
      <Header title={data.currentScene.title} timer={data.timer} link='/scene' icon='go-back' />
      <CharacterSpeech character={currentCharacter} />
      <PromptInput />
      <Visual.Background url={data.currentScene.url} />
    </Container.Column>
  )
}

export default Discussion