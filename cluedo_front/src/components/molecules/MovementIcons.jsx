import React from 'react'
import { Container, Visual } from '../atoms'

const MovementIcons = () => {

  const handleMovementClick = (movement) => {
    console.log(movement)
  }

  return (
    <Container.Row justifyContent={'space-between'} height={'76vh'} width={'97vw'} padding={'0 5px'}>
      <Visual.Icon src={'/assets/img/arrow-left.svg'} width={'40px'} height={'40px'} onClick={() => handleMovementClick('left')}>
      </Visual.Icon>
      <Visual.Icon src={'/assets/img/arrow-right.svg'} width={'40px'} height={'40px'} onClick={() => handleMovementClick('right')}>
      </Visual.Icon>
    </Container.Row>
  )
}

export default MovementIcons