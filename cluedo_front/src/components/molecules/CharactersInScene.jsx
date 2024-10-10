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
          <Action.Button width="100px" key={index}>
            <Visual.Image src={`/assets/img/${item.face}`}></Visual.Image>
          </Action.Button>
        )
      })}
    </Container.Row>
  )
}

export default CharactersInScene;