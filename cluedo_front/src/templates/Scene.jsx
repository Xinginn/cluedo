import React, { useEffect, useState } from 'react'
import { Header, MovementIcons, CharactersInScene } from '../components/molecules'
import { Container } from '../components/atoms'
import { Visual } from '../components/atoms'

const Scene = () => {

  const [currentScene, setCurrentScene] = useState({})

  useEffect(() => {
    setCurrentScene({
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
  }, [])

  const data = {
    timer: '07:29'
  }

  return (
    <Container.Column width={'100%'}>
      <Header title={currentScene.title} timer={data.timer} />
      <MovementIcons currentScene={currentScene} setCurrentScene={setCurrentScene} />
      <CharactersInScene />
      <Visual.Background url={currentScene.url} />
    </Container.Column>
  )
}

export default Scene