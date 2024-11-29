import React, { useContext } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateCurrentCharacter } from '../store/currentCharacterStore'

import { Header, CharacterList } from '../components/molecules'
import { Container, Text, Visual } from '../components/atoms'
import { AlternativeThemeProviderContext } from '../provider/AlternativeThemeProvider'

const Note = () => {

  const dispatch = useDispatch()

  const investigation = useSelector((state) => {
    return state.investigationHistorySlice.investigation
  })

  const setCurrentCharacter = (character) => {
    dispatch(updateCurrentCharacter({ character }))
  }

  const { whichTheme } = useContext(AlternativeThemeProviderContext)

  const data = {
    currentScene: {
      url: '/assets/img/backgrounds/cabaret.webp',
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
    <Container.Column bgColor={'transparent'}>
      <Header title="Notes" link='/scene' icon='go-back' />
      <Container.Column width="90%" padding="8px" >
        <Text.Title>Affaire {investigation.victimName}</Text.Title>
        <Text.Paragraph width="90%" >{investigation.autopsy}</Text.Paragraph>
      </Container.Column>
      <CharacterList characters={investigation.characters} onClick={setCurrentCharacter} />
      <Visual.Background url={`/assets/img/${wichTheme.slug}/backgrounds/notes.webp`}></Visual.Background>
    </Container.Column>
  )
}

export default Note