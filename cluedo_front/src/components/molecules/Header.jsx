import React from 'react'
import { Text, Container, Visual } from '../atoms'

const Header = ({ timer = '88:88', title = 'Salle actuelle' }) => {
  return (
    <Container.Row bgColor={'#fcdd62'} padding={'3px'}>
      <Container.Row bgColor={'#b59d46'} padding={'5px 15px'}>
        <Text.Paragraph fontSize={'24px'}>{timer}</Text.Paragraph>
      </Container.Row>
      <Text.Title>{title}</Text.Title>
      <Visual.Icon src={'/assets/img/book1.svg'} width={'40px'} height={'40px'}></Visual.Icon>
    </Container.Row>
  )
}

export default Header