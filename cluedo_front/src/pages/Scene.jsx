import React from 'react'
import { Header, MovementIcons, CharactersInScene } from '../components/molecules'
import { Container } from '../components/atoms'
import { Visual } from '../components/atoms'

const Scene = () => {

  const data = {
    url: '/assets/img/background/cabaret.png',
    title: 'Cabaret',
    timer: '07:29'
  }

  return (
    <Container.Column width={'100%'}>
      <Header title={data.title} timer={data.timer} />
      <MovementIcons />
      <CharactersInScene />
      <Visual.Background url={data.url} />
    </Container.Column>
  )
}

export default Scene