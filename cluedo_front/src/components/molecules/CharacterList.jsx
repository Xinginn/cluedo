import React, { useContext } from 'react'
import { Container, Action, Visual, Text } from '../atoms'
import { AlternativeThemeProviderContext } from '../../provider/AlternativeThemeProvider'

const CharacterList = ({ characters, onClick, accuse }) => {

  const { wichTheme } = useContext(AlternativeThemeProviderContext)

  return (
    <Container.Column bgColor={'transparent'}>
      {characters.map((character, index) => (
        <Action.Link key={index} to={!accuse ? `${character.id}` : null} onClick={() => { if (!accuse) onClick(character) }}>
          <Action.Button width="100%">
            <Container.Row justifyContent={'flex-start'} gap={'5%'} bgColor={'transparent'}>
              <Visual.Image src={`/assets/img/${wichTheme.slug}/faces/${character.gender}/${character.face}`} width={'8rem'} />
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