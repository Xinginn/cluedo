import React from "react"
import { Action, Container, Visual } from '../atoms'
import { useNavigate } from "react-router-dom"

const CharactersInScene = ({ characters }) => {

  const navigate = useNavigate()

  const handleNavigation = (character) => {
    navigate('/discussion', { state: { character } })
  }

  return (
    <Container.Row height="100px">
      {characters.map((item, index) => {
        return (
          <Action.Link
            key={index}
            width="100px"
            to={'/discussion'}
          >
            <Action.Button width="100px">
              <Visual.Image width='100%' src={item.face}></Visual.Image>
            </Action.Button>
          </Action.Link>
        )
      })}
    </Container.Row>
  )
}

export default CharactersInScene;
