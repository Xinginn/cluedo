import React, { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Container, Visual, Text, Action } from '../components/atoms'
import { CharacterList } from '../components/molecules'
import { AlternativeThemeProviderContext } from '../provider/AlternativeThemeProvider'
import { resetInvestigationStore } from '../store/investigationStore'
import { resetCurrentSceneStore } from '../store/currentSceneStore'
import { resetCurrentCharacterStore } from '../store/currentCharacterStore'
import { addLastInverstigation } from '../store/userStore'

const Result = () => {

  const { whichTheme } = useContext(AlternativeThemeProviderContext)
  const dispatch = useDispatch()

  const currentCharacter = useSelector((state) => {
    return state.currentCharacterHistorySlice.currentCharacter.character
  })
  const investigation = useSelector((state) => {
    return state.investigationHistorySlice.investigation
  })

  const redirect = () => {
    dispatch(addLastInverstigation(investigation))
    dispatch(resetInvestigationStore())
    dispatch(resetCurrentSceneStore())
    dispatch(resetCurrentCharacterStore())
  }

  return (
    <Container.Column width={'100%'} bgColor={'transparent'}>
      <Visual.Background url={`/assets/img/${whichTheme.slug}/backgrounds/courtroom.webp`}></Visual.Background>
      <Container.Row width={'100%'} position={'relative'}>
        <Text.Title>
          {currentCharacter.isKiller ? 'Bravo' : 'Perdu'}
        </Text.Title>
        <Container.Column position={'absolute'} right={'5vw'}>
          <Action.Link onClick={redirect} to={'/games'}>Accueil</Action.Link>
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