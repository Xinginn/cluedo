import React from 'react'
import { Action, Container, Text } from '../atoms'

const SummaryModal = ({ autopsy, ...props }) => {
  return (
    <Container.Column {...props} width={'100%'} height={'100vh'} bgColor={'rgba(0,0,0,0.7)'} position={'absolute'}>
      <Container.Column width={'100%'} height={'100vh'} justifyContent={'center'} alignItems={'center'} bgColor={'transparent'}>
        <Text.Paragraph width={'70vw'} color={'white'}>{autopsy}</Text.Paragraph>
        <Container.Column>
          <Action.Button>Commencer l'enquête</Action.Button>
        </Container.Column>
      </Container.Column>
    </Container.Column>
  )
}

export default SummaryModal