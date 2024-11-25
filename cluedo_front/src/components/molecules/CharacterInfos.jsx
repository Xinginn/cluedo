import React, { useContext } from 'react'
import { Container, Text, Visual } from '../atoms'
import { AlternativeThemeProviderContext } from '../../provider/AlternativeThemeProvider'


const CharacterInfos = ({ character = {} }) => {

  const { isAlternative } = useContext(AlternativeThemeProviderContext)

  return (
    <Container.Row alignItems="flex-start">
      <Visual.Image src={`/assets/img/${isAlternative ? 'alternative' : 'classique'}/bodies/${character.gender}/${character.body}`} ></Visual.Image>
      <Container.Column bgColor="rgba(255,255,255,0.5)" padding="8px">
        <Text.Name>{character.name ?? "No name"}</Text.Name>
        <Text.Label>{character.role ?? "No role"}</Text.Label>
        <Text.Paragraph >{character.description ?? "No description"}</Text.Paragraph>
      </Container.Column>
    </Container.Row >
  )
}

export default CharacterInfos