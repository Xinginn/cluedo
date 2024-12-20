import React from 'react'
import { Container, Text, Visual } from '../atoms'

const Loader = ({ text }) => {
  return (
    <Container.Column width={'100%'} height={'100vh'} bgColor={'rgba(0, 0, 0, 0.4)'} position={'absolute'}>
      <Container.Column width={'100%'} height={'100vh'} justifyContent={'center'} alignItems={'center'} bgColor={'transparent'}>
        <Visual.Image width={'15vw'} height={'15vw'} src={'/assets/img/loader.svg'} />
        <Text.Label color={'white'}>{text}</Text.Label>
      </Container.Column>
    </Container.Column>
  )
}

export default Loader