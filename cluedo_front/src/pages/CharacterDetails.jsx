import React from "react"
import { useSelector } from "react-redux"

import { CharacterInfos, Header } from "../components/molecules"
import { Action, Container, Visual } from "../components/atoms"

const CharacterDetails = () => {

  const character = useSelector((state) => {
    return state.currentCharacterHistorySlice.currentCharacter.character
  })

  return (
    <Container.Column justifyContent="space-between" height="100vh" bgColor={'transparent'}>
      <Header title="Dossier du suspect" link="/note" icon="go-back"></Header>
      <Container.Row justifyContent="flex-end" bgColor={'transparent'}>
        <Action.Link to={'/result'}>
          <Action.Button width="60px" height="60px">
            <Visual.Icon
              src={'/assets/img/icons/hammer-law.svg'}
              width={'40px'}
              height={'40px'} />
          </Action.Button>
        </Action.Link>
      </Container.Row>
      <Container.Row bgColor={'transparent'}>
        <CharacterInfos character={character} />
      </Container.Row>
      <Visual.Background url="/assets/img/backgrounds/notes.jpg" />
    </Container.Column>
  )
}

export default CharacterDetails