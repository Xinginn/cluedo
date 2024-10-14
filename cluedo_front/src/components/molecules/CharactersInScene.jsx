import React from "react";
import { Action, Container, Visual } from '../atoms';

const CharactersInScene = ({ characters }) => {

  return (
    <Container.Row height="100px">
      {characters.map((item, index) => {
        return (
          <Action.Link width="100px" href={'/discussion'}>
            <Action.Button width="100px" key={index}>
              <Visual.Image width='100%' src={item.face}></Visual.Image>
            </Action.Button>
          </Action.Link>
        )
      })}
    </Container.Row>
  )
}

export default CharactersInScene;