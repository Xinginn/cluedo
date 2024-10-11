import React from "react";
import { CharacterInfos, Header } from "../components/molecules";
import { Action, Container, Visual } from "../components/atoms";

const CharacterDetails = () => {

  const handleDenounceClick = () => {
    console.log("Click on denounce")
  }

  const data = {
    character: {
      name: "John Doe",
      bodyPicture: "body_1.png",
      role: "Frère de la victime",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
  }

  return (
    <Container.Column justifyContent="space-between" height="100vh">
      <Header></Header>
      <Container.Row>
        <CharacterInfos character={data.character}></CharacterInfos>
        <Action.Button>
          <Visual.Icon 
            src={'/assets/img/close-circle.svg'}
            width={'40px'}
            height={'40px'}
            onClick={handleDenounceClick}></Visual.Icon>
        </Action.Button>
      </Container.Row>
    </Container.Column>
  )
}

export default CharacterDetails;