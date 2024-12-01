import React, { useContext, useRef, useEffect, useState } from 'react'
import { Container, Text, Visual } from '../atoms'
import { AlternativeThemeProviderContext } from '../../provider/AlternativeThemeProvider'
import { useSelector } from 'react-redux'
import { ScrollTarget } from '../atoms/Container'

const CharacterSpeech = ({ character }) => {

  const currentCharacterId = useSelector((state) => state.currentCharacterHistorySlice.currentCharacter.id)
  const discussions = useSelector((state) => {
    const character = state.investigationHistorySlice.investigation.characters.find(item => item.id === currentCharacterId)
    return character.discussions
  })
  const [isOnline, setIsOnline] = useState(true)

  const { whichTheme } = useContext(AlternativeThemeProviderContext)

  const discussionEndRef = useRef(null)

  const scrollToBottom = () => {
    discussionEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    const handleOnline = () => setIsOnline(true)
    const handleOffline = () => setIsOnline(false)

    setIsOnline(navigator.onLine)

    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)

    return () => {
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
    }
  }, [isOnline])

  useEffect(() => {
    scrollToBottom()
  }, [discussions])

  return (
    <Container.Row bgColor={'transparent'}>
      <Visual.Image height="600px" src={`/assets/img/${whichTheme.slug}/bodies/${character.gender}/${character.body}`}></Visual.Image>
      <Container.Column width="400px" maxHeight="600px" overflowY="auto" bgColor="transparent" >
        {
          !isOnline &&
          <Text.Paragraph width='80%' padding="4px" borderRadius="8px" alignSelf='flex-start' bgColor="rgba(200,200,200,0.8)">Veuillez vous connecter à internet</Text.Paragraph>
        }
        {discussions.length > 0 &&
          discussions.map((item, index) => {
            return (
              <Container.Column key={index} bgColor={'transparent'} padding="4px">
                <Text.Paragraph width='80%' padding="4px" borderRadius="8px" alignSelf='flex-end' bgColor="rgba(200,200,200,0.8)" >{item.prompt}</Text.Paragraph>
                {!!item.answer ?
                  <Text.Paragraph width='80%' padding="4px" borderRadius="8px" alignSelf='flex-start' bgColor="rgba(200,200,200,0.8)">{item.answer}</Text.Paragraph>
                  :
                  <Container.Row width="50px" height="12px" alignSelf='flex-start' className='discussion-loader' bgColor={'transparent'}></Container.Row>
                }
              </Container.Column>
            )
          })
        }
        <ScrollTarget ref={discussionEndRef}></ScrollTarget>
      </Container.Column>
    </Container.Row >
  )
}

export default CharacterSpeech