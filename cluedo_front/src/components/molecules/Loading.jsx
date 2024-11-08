import React from 'react'
import { Container, Text } from '../atoms'

const Loading = () => {
  return (
    <Container.Column width={'100%'} height={'100vh'} bgColor={'rgba(0, 0, 0, 0.4)'} position={'absolute'}>
      <Container.Column width={'100%'} height={'100vh'} justifyContent={'center'} alignItems={'center'}>
        <Text.Title>LOADING</Text.Title>
      </Container.Column>
    </Container.Column>
  )
}

export default Loading