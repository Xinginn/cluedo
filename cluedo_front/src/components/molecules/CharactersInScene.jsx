import React from "react";
import { Action, Container, Visual } from '../atoms';

const CharactersInScene = () => {
  const characters = [
    { name: "toto", face: "face_1.png" },
    { name: "toto", face: "stitch1.webp" },
    { name: "toto", face: "face_1.png" },

  ];

  return (
    <Container.Row height="100px">
      {characters.map((item, index) => {
        return (
          <Action.Link width="100px" href={'/discussion'}>
            <Action.Button width="100px" key={index}>
              <Visual.Image width='100%' src={`/assets/img/${item.face}`}></Visual.Image>
            </Action.Button>
          </Action.Link>
        )
      })}
    </Container.Row>
  )
}

export default CharactersInScene;