import React from 'react';
import { Container, Text, Visual } from '../atoms';

const CharacterSpeech = (props) => {
  const character = { name: "toto", picture: "body_2.png" }
  const text = "Bonjour, inspecteur. J'aurai adoré répondre à vos questions, mais je trouve que vous êtes moche, donc dommage en fait."

  return (
    <Container.Column>
      <Visual.Image height="600px" src={`/assets/img/${character.picture}`}></Visual.Image>
      <Container.Row width="400px" bgColor="rgba(200,200,200,0.7)" padding="4px">
        <Text.Paragraph >{text}</Text.Paragraph>
      </Container.Row>
    </Container.Column>
  )
}

export default CharacterSpeech;