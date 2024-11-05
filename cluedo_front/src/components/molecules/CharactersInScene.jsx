import React from "react"
import { Action, Container, Visual } from '../atoms'

const CharactersInScene = ({ characters, setCurrentCharacter }) => {

  return (
    <Container.Row height="100px">
      {characters.map((character, index) => {
        return (
          <Action.Link
            key={index}
            width="100px"
            to={'/discussion'}
            onClick={() => setCurrentCharacter(character.id)}
          >
            <Action.Button width="100px">
              <Visual.Image width='100%' src={`${character.face}`}></Visual.Image>
            </Action.Button>
          </Action.Link>
        )
      })}
    </Container.Row>
  )
}

export default CharactersInScene;
