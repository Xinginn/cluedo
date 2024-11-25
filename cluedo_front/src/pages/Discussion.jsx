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

  console.log(currentScene)

  const data = {
    timer: '07:36',
  }


  return (
    <Container.Column justifyContent="space-between" height="100vh">
      <Header title={currentScene.title} timer={data.timer} link='/scene' icon='go-back' />
      <CharacterSpeech character={currentCharacter} />
      <PromptInput />
      <Visual.Background url={currentScene.url} />
    </Container.Column>
  )
}

export default Discussion