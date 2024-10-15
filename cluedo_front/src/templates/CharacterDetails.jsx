import React from "react";
import { CharacterInfos, Header } from "../components/molecules";
import { Action, Container, Visual } from "../components/atoms";

const CharacterDetails = () => {

  const handleDenounceClick = () => {
    console.log("TODO Click on denounce")
  }

  const data = {
    character: {
      name: "John Doe",
      bodyPicture: "/assets/img/bodies/body_1.png",
      role: "Frère de la victime",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
  }

  return (
    <Container.Column justifyContent="space-between" height="100vh">
      <Header title="Dossier du suspect" icon="close"></Header>
      <Container.Row justifyContent="flex-end" >
        <Action.Button width="60px" height="60px">
          <Visual.Icon
            src={'/assets/img/icons/close-circle.svg'}
            width={'40px'}
            height={'40px'}
            onClick={handleDenounceClick}/>
        </Action.Button>
      </Container.Row>
      <Container.Row>
        <CharacterInfos character={data.character}/>
      </Container.Row>
      <Visual.Background url="/assets/img/backgrounds/notes.jpg" />
    </Container.Column>
  )
}

export default CharacterDetails;