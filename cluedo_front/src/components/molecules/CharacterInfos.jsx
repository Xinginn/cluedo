import React, { useContext } from 'react'

import { Container, Text, Visual } from '../atoms'
import { AlternativeThemeProviderContext } from '../../provider/AlternativeThemeProvider'


const CharacterInfos = ({ character = {} }) => {

  const { wichTheme } = useContext(AlternativeThemeProviderContext)

  return (
    <Container.Row alignItems="flex-start" bgColor={'transparent'}>
      <Visual.Image height="700px" src={`/assets/img/${wichTheme.slug}/bodies/${character.gender}/${character.body}`} ></Visual.Image>
      <Container.Column bgColor="transparent">
        <Container.Column bgColor="rgba(255,255,255,0.7)" padding="8px" width="calc(100% - 16px)">
          <Text.Name>{character.name ?? "No name"}</Text.Name>
          <Text.Label>{character.role ?? "No role"}</Text.Label>
        </Container.Column>

        <Container.Column maxHeight="600px" overflowY="auto" bgColor="transparent">
          {character.discussions.length > 0 &&
            character.discussions.map((item, index) => {
              return (
                <Container.Column key={index} bgColor={'transparent'} padding="4px">
                  <Text.Paragraph width='80%' padding="4px" borderRadius="8px" alignSelf='flex-end' bgColor="rgba(200,200,200,0.8)" >{item.prompt}</Text.Paragraph>
                  <Text.Paragraph width='80%' padding="4px" borderRadius="8px" alignSelf='flex-start' bgColor="rgba(200,200,200,0.8)">{item.answer}</Text.Paragraph>
                </Container.Column>
              )
            })
          }
        </Container.Column>

      </Container.Column>
    </Container.Row >
  )
}

export default CharacterInfos