import React from 'react'
import { Container, Action, Visual, Text } from '../atoms'

const CharacterList = ({ characters, onClick }) => {

  return (
    <Container.Column>
      {characters.map((character, index) => (
        <Action.Link to={`${character.id}`} onClick={() => onClick(character.id)}>
          <Action.Button key={index} width="100%">
            <Container.Row justifyContent={'flex-start'} gap={'5%'}>
              <Visual.Image src={`${character.face}`} width={'8rem'} />
              <Text.Name>
                {`${character.name} - ${character.role}`}
              </Text.Name>
            </Container.Row>
          </Action.Button>
        </Action.Link>
      ))}
    </Container.Column>
  )
}

export default CharacterList