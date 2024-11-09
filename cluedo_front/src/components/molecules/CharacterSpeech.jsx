import React, { useContext } from 'react';
import { Container, Text, Visual } from '../atoms';
import { AlternativeThemeProviderContext } from '../../provider/AlternativeThemeProvider';

const CharacterSpeech = ({ character, ...props }) => {

  const { isAlternative } = useContext(AlternativeThemeProviderContext)
  const text = "Bonjour, inspecteur. J'aurai adoré répondre à vos questions, mais je trouve que vous êtes moche, donc dommage en fait."

  return (
    <Container.Column>
      <Visual.Image height="600px" src={`/assets/img/${isAlternative ? 'alternative' : 'classique'}/bodies/${character.gender}/${character.body}`}></Visual.Image>
      <Container.Row width="400px" bgColor="rgba(200,200,200,0.7)" padding="4px">
        <Text.Paragraph>{text}</Text.Paragraph>
      </Container.Row>
    </Container.Column>
  )
}

export default CharacterSpeech;