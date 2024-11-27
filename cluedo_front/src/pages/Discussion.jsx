import React from 'react'
import { useSelector } from 'react-redux'

import { Container, Visual } from '../components/atoms'
import { CharacterSpeech, Header, PromptInput } from '../components/molecules'

const Discussion = () => {

  const currentCharacter = useSelector((state) => {
    return state.currentCharacterHistorySlice.currentCharacter
  })
  const currentScene = useSelector((state) => {
    return state.currentSceneHistorySlice.currentScene
  })

  return (
    <Container.Column justifyContent="space-between" height="100vh" bgColor={'transparent'}>
      <Header title={currentScene.title} link='/scene' icon='go-back' />
      <CharacterSpeech character={currentCharacter} />
      <PromptInput />
      <Visual.Background url={currentScene.url} />
    </Container.Column>
  )
}

export default Discussion