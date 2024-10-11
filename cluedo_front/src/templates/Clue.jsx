import React from 'react'
import { Header, ClueList } from '../components/molecules'
import { Container } from '../components/atoms'

const Clue = () => {

  const characters = [
    {
      name: 'John Doe',
      role: 'Père de la victime'
    },
    {
      name: 'Maryse Gregoire',
      role: 'Soeur de la victime'
    },
    {
      name: 'Gaspar Rodrigue',
      role: 'Fiancé de la victime'
    },
  ]

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
    <Container.Column>
      <Header title={data.currentScene.title} timer={data.timer} icon='close' />
      <ClueList characters={characters}></ClueList>
    </Container.Column>
  )
}

export default Clue