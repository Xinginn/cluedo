import React from 'react'
import { Header, MovementIcons, CharactersInScene } from '../components/molecules'
import { Container } from '../components/atoms'
import { Visual } from '../components/atoms'

const Scene = () => {

  const data = {
    timer: '07:29',
    currentScene: {
      url: '/assets/img/background/cabaret.png',
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
    <Container.Column width={'100%'}>
      <Header title={data.currentScene.title} timer={data.timer} />
      <MovementIcons currentScene={data.currentScene} />
      <CharactersInScene />
      <Visual.Background url={data.currentScene.url} />
    </Container.Column>
  )
}

export default Scene