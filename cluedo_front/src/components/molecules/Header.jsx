import React from 'react'
import { Text, Container, Visual, Action } from '../atoms'

const Header = ({ timer = '88:88', title = 'Salle actuelle', link = '/', icon }) => {

  return (
    <Container.PrimaryTheme width={'calc(100vw - 6px)'} padding={'3px'}>
      <Container.SecondaryTheme padding={'5px 15px'} width={'4rem'}>
        <Text.Paragraph fontSize={'24px'} textAlign={'center'}>{timer}</Text.Paragraph>
      </Container.SecondaryTheme>
      <Text.Title>{title}</Text.Title>
      <Action.Link to={`${link}`}>
        <Visual.Icon
          src={`/assets/img/icons/${icon}.svg`}
          width={'40px'}
          height={'40px'}
        />
      </Action.Link>
    </Container.PrimaryTheme>
  )
}

export default Header