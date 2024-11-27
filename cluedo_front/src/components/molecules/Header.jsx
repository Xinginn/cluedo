import React, { useEffect, useState } from 'react'
import { Text, Container, Visual, Action } from '../atoms'
import { useDispatch, useSelector } from 'react-redux'
import { disconnectUser } from '../../store/userStore'

const Header = ({ title = 'Salle actuelle', link = '/', icon }) => {

  const [timer, setTimer] = useState("10:00")

  const remainingSeconds = useSelector((state) => {
    return state.investigationHistorySlice.remainingSeconds
  })

  function updateTimer() {
    const minutes = Math.floor(remainingSeconds / 60)
    const seconds = remainingSeconds % 60
    setTimer(`${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`)
  }

  useEffect(() => {
    updateTimer()
  }, [remainingSeconds])


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
      {!['Notes', 'Dossier du suspect'].includes(title) &&
        <Container.Column borderRadius={'150px'} width={'15rem'} height={'3rem'} position={'absolute'} top={'100px'} justifyContent={'center'} alignItem={'center'}>
          <Text.Title fontSize={'30px'}>{title}</Text.Title>
        </Container.Column>
      }
    </Container.Row>
  )
}

export default Header