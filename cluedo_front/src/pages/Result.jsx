import React, { useContext } from 'react'
import { useSelector } from 'react-redux'

import { Container, Visual, Text, Action } from '../components/atoms'
import { CharacterList } from '../components/molecules'
import { AlternativeThemeProviderContext } from '../provider/AlternativeThemeProvider'

const Result = () => {

  const { wichTheme } = useContext(AlternativeThemeProviderContext)

  const currentCharacter = useSelector((state) => {
    return state.currentCharacterHistorySlice.currentCharacter.character
  })
  const investigation = useSelector((state) => {
    return state.investigationHistorySlice.investigation
  })

  return (
    <Container.Column width={'100%'} bgColor={'transparent'}>
      <Visual.Background url={`/assets/img/${wichTheme.slug}/backgrounds/courtroom.webp`}></Visual.Background>
      <Container.Row width={'100%'} position={'relative'}>
        <Text.Title>
          {currentCharacter.isKiller ? 'Bravo' : 'Perdu'}
        </Text.Title>
        <Container.Column position={'absolute'} right={'5vw'}>
          <Action.Link to={'/games'}>Accueil</Action.Link>
        </Container.Column>
      </Container.Row>
      <Container.Column bgColor={'#dddddda3'}>
        <Text.Paragraph>
          {investigation.events}
        </Text.Paragraph>
      </Container.Column>
      <Container.Column bgColor={'transparent'}>
        <CharacterList characters={investigation.characters} accuse={true} />
      </Container.Column>
    </Container.Column>
  )
}

export default Result