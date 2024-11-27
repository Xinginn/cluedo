import React from 'react'
import { useDispatch } from 'react-redux'
import { disconnectUser } from '../../store/userStore'
import { Text, Container, Visual, Action } from '../atoms'

const Header = ({ timer = '88:88', title = 'Salle actuelle', link = '/', icon }) => {

  const dispatch = useDispatch()

  const handleDisconnect = () => {
    dispatch(disconnectUser())
  }

  return (
    <Container.Row width={'calc(100vw - 6px)'} padding={'3px'}>
      <Action.Link to={`${link}`}>
        <Visual.Icon
          src={`/assets/img/icons/${icon}.svg`}
          width={'40px'}
          height={'40px'}
        />
      </Action.Link>
      <Container.Column padding={'5px 15px'} width={'4rem'}>
        <Text.Paragraph fontSize={'24px'} textAlign={'center'}>{timer}</Text.Paragraph>
      </Container.Column>
      <Action.Button width={'5rem'} to={`${link}`} onClick={handleDisconnect}>
        <Visual.Icon
          src={`/assets/img/icons/logout.svg`}
          width={'40px'}
          height={'40px'}
        />
      </Action.Button>
    </Container.Row>
  )
}

export default Header