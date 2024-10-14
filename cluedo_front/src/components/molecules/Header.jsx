import React from 'react'
import { Text, Container, Visual, Action } from '../atoms'

const Header = ({ timer = '88:88', title = 'Salle actuelle', icon = 'note' }) => {

  return (
    <Container.Row bgColor={'#fcdd62'} width={'calc(100vw - 6px)'} padding={'3px'}>
      <Container.Row bgColor={'#b59d46'} padding={'5px 15px'} width={'4rem'}>
        <Text.Paragraph fontSize={'24px'} textAlign={'center'}>{timer}</Text.Paragraph>
      </Container.Row>
      <Text.Title>{title}</Text.Title>
      {icon === 'close' ?
        <Action.Link to={'/'}>
          <Visual.Icon
            src={'/assets/img/icons/close-circle.svg'}
            width={'40px'}
            height={'40px'}
          />
        </Action.Link>
        :
        <Action.Link to={'/note'}>
          <Visual.Icon
            src={'/assets/img/icons/book1.svg'}
            width={'40px'}
            height={'40px'}
          />
        </Action.Link>
      }
    </Container.Row>
  )
}

export default Header