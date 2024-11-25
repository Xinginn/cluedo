import React, { useContext } from 'react'
import { Container, Text, Visual } from '../atoms'
import { AlternativeThemeProviderContext } from '../../provider/AlternativeThemeProvider'
import { useSelector } from 'react-redux'

const CharacterSpeech = ({ character }) => {

  const currentCharacterId = useSelector((state) => state.currentCharacterHistorySlice.currentCharacter.id)

  const discussions = useSelector((state) => {
    const character = state.investigationHistorySlice.investigation.characters.find(item => item.id === currentCharacterId)
    return character.discussions
  })

  const { wichTheme } = useContext(AlternativeThemeProviderContext)

  return (
    <Container.Row bgColor={'transparent'}>
      <Visual.Image height="600px" src={`/assets/img/${wichTheme.slug}/bodies/${character.gender}/${character.body}`}></Visual.Image>
      <Container.Column width="400px" bgColor="rgba(200,200,200,0.7)" padding="4px">
        {
          discussions.map((item, index) => {
            return (
              <Container.Column key={index} bgColor={'transparent'}>
                <Text.Paragraph>{item.prompt}</Text.Paragraph>
                <Text.Paragraph>{item.answer}</Text.Paragraph>
              </Container.Column>
            )
          })
        }
      </Container.Column>
    </Container.Row >
  )
}

export default CharacterSpeech