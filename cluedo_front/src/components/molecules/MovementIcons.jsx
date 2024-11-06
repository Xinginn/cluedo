import React from 'react'
import { Container, Visual, Action } from '../atoms'

const MovementIcons = ({ currentScene, setCurrentScene }) => {

  return (
    <Container.Row justifyContent={'space-between'} height={'76vh'} width={'97vw'} padding={'0 5px'}>
      <Action.Button width={'60px'} height={'60px'}>
        <Visual.Icon src={'/assets/img/icons/arrow-left.svg'} width={'40px'} height={'40px'} onClick={() => setCurrentScene(currentScene.leftScene)} />
      </Action.Button>
      <Action.Button width={'60px'} height={'60px'}>
        <Visual.Icon src={'/assets/img/icons/arrow-right.svg'} width={'40px'} height={'40px'} onClick={() => setCurrentScene(currentScene.rightScene)} />
      </Action.Button>
    </Container.Row>
  )
}

export default MovementIcons