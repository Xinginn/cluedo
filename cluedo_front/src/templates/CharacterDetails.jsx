import React from "react"
import { useSelector } from "react-redux"

import { CharacterInfos, Header } from "../components/molecules"
import { Action, Container, Visual } from "../components/atoms"

const CharacterDetails = () => {

  const character = useSelector((state) => {
    return state.characterHistory.currentCharacter
  })

  const handleDenounceClick = () => {
    console.log("TODO Click on denounce")
  }

  return (
    <Container.Column justifyContent="space-between" height="100vh">
      <Header title="Dossier du suspect" icon="close"></Header>
      <Container.Row justifyContent="flex-end" >
        <Action.Button width="60px" height="60px">
          <Visual.Icon
            src={'/assets/img/icons/hammer-law.svg'}
            width={'40px'}
            height={'40px'}
            onClick={handleDenounceClick} />
        </Action.Button>
      </Container.Row>
      <Container.Row>
        <CharacterInfos character={character} />
      </Container.Row>
      <Visual.Background url="/assets/img/backgrounds/notes.jpg" />
    </Container.Column>
  )
}

export default CharacterDetails;