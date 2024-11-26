import React, { useContext } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateCurrentCharacter } from '../store/currentCharacterStore'

import { Header, CharacterList } from '../components/molecules'
import { Container, Visual } from '../components/atoms'
import { AlternativeThemeProviderContext } from '../provider/AlternativeThemeProvider'

const Note = () => {

  const dispatch = useDispatch()

  const characters = useSelector((state) => {
    return state.investigationHistorySlice.investigation.characters
  })

  const setCurrentCharacter = (character) => {
    dispatch(updateCurrentCharacter({ character }))
  }

  const { wichTheme } = useContext(AlternativeThemeProviderContext)

  const data = {
    timer: '07:29',
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
      <Header title="Notes" timer={data.timer} link='/scene' icon='go-back' />
      <CharacterList characters={characters} onClick={setCurrentCharacter} />
      <Visual.Background url={`/assets/img/${wichTheme.slug}/backgrounds/notes.webp`}></Visual.Background>
    </Container.Column>
  )
}

export default Note