import React from 'react'
import { Container, Action, Visual, Text } from '../atoms'

const CharacterList = ({ characters, onClick, accuse }) => {

  return (
    <Container.Column>
      {characters.map((character, index) => (
        <Action.Link key={index} to={!accuse ? `${character.id}` : null} onClick={() => { if (!accuse) onClick(character) }}>
          <Action.Button width="100%">
            <Container.Row justifyContent={'flex-start'} gap={'5%'}>
              <Visual.Image src={`/assets/img/faces/${character.gender}/${character.face}`} width={'8rem'} />
              {
                accuse ?
                  <Text.Paragraph>
                    {character.description}
                  </Text.Paragraph>
                  :
                  <Text.Name>
                    {`${character.name} - ${character.role}`}
                  </Text.Name>
              }
            </Container.Row>
          </Action.Button>
        </Action.Link>
      ))}
    </Container.Column>
  )
}

export default CharacterList