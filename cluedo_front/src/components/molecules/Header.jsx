import React from 'react'
import { Text, Container, Visual, Action } from '../atoms'

const Header = ({ timer = '88:88', title = 'Salle actuelle', icon = 'note' }) => {

  const handleNoteClick = () => {
    alert('open note')
  }

  const handleNoteClose = () => {
    alert('close note')
  }

  return (
    <Container.Row bgColor={'#fcdd62'} width={'calc(100vw - 6px)'} padding={'3px'}>
      <Container.Row bgColor={'#b59d46'} padding={'5px 15px'} width={'4rem'}>
        <Text.Paragraph fontSize={'24px'} textAlign={'center'}>{timer}</Text.Paragraph>
      </Container.Row>
      <Text.Title>{title}</Text.Title>
      {icon === 'close' ?
        <Action.Link href={'/'}>
          <Visual.Icon
            src={'/assets/img/close-circle.svg'}
            width={'40px'}
            height={'40px'}
          />
        </Action.Link>
        :
        <Action.Link href={'/note'}>
          <Visual.Icon
            src={'/assets/img/book1.svg'}
            width={'40px'}
            height={'40px'}
          />
        </Action.Link>
      }
    </Container.Row>
  )
}

export default Header