import React from 'react'
import { Container, Action, Visual, Text } from '../atoms'

const ClueList = () => {

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

  return (
    <Container.Column>
      {characters.map((character, index) => (
        <Action.Button key={index} width="100%">
          <Container.Row justifyContent={'flex-start'} gap={'5%'}>
            <Visual.Image src={`/assets/img/face_1.png`} width={'8rem'} />
            <Text.Name>
              {`${character.name} - ${character.role}`}
            </Text.Name>
          </Container.Row>
        </Action.Button>
      ))}
    </Container.Column>
  )
}

export default ClueList