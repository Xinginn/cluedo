import React from 'react'
import { Header, MovementIcons, CharactersInScene } from '../components/molecules'
import { Container } from '../components/atoms'
import { Visual } from '../components/atoms'

const Scene = () => {

  const url = '/assets/img/background/cabaret.png'

  return (
    <Container.Column width={'100%'}>
      <Header />
      <MovementIcons />
      <CharactersInScene />
      <Visual.Background url={url} />
    </Container.Column>
  )
}

export default Scene