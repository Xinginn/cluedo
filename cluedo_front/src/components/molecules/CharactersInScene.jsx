import React, { useContext } from "react"
import { Action, Container, Visual } from '../atoms'
import { AlternativeThemeProviderContext } from "../../provider/AlternativeThemeProvider"

const CharactersInScene = ({ characters, setCurrentCharacter }) => {

  const { isAlternative } = useContext(AlternativeThemeProviderContext)
  return (
    <Container.Row height="100px">
      {characters.map((character, index) => {
        return (
          <Action.Link
            key={index}
            width="100px"
            to={'/discussion'}
            onClick={() => setCurrentCharacter(character)}
          >
            <Action.Button width="100px">
              <Visual.Image width='100%' src={`/assets/img/${isAlternative ? 'alternative' : 'classique'}/faces/${character.gender}/${character.face}`}></Visual.Image>
            </Action.Button>
          </Action.Link>
        )
      })}
    </Container.Row>
  )
}

export default CharactersInScene
