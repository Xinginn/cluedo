import React from 'react'
import { Container, Visual, Action } from '../atoms'

const MovementIcons = ({ currentScene }) => {

  const handleMovementClick = (movement) => {
    console.log(movement)
  }

  return (
    <Container.Row justifyContent={'space-between'} height={'76vh'} width={'97vw'} padding={'0 5px'}>
      <Action.Button width={'60px'} height={'60px'}>
        <Visual.Icon src={'/assets/img/arrow-left.svg'} width={'40px'} height={'40px'} onClick={() => handleMovementClick(currentScene.leftScene.title)} />
      </Action.Button>
      <Action.Button width={'60px'} height={'60px'}>
        <Visual.Icon src={'/assets/img/arrow-right.svg'} width={'40px'} height={'40px'} onClick={() => handleMovementClick(currentScene.rightScene.title)} />
      </Action.Button>
    </Container.Row>
  )
}

export default MovementIcons