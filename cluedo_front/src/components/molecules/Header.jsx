import React, { useEffect, useState } from 'react'
import { Text, Container, Visual, Action } from '../atoms'
import { useSelector } from 'react-redux'

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


  return (
    <Container.Row width={'calc(100vw - 6px)'} padding={'3px'}>
      <Container.Column padding={'5px 15px'} width={'4rem'}>
        <Text.Paragraph fontSize={'24px'} textAlign={'center'}>{timer}</Text.Paragraph>
      </Container.Column>
      <Text.Title>{title}</Text.Title>
      <Action.Link to={`${link}`}>
        <Visual.Icon
          src={`/assets/img/icons/${icon}.svg`}
          width={'40px'}
          height={'40px'}
        />
      </Action.Link>
    </Container.Row>
  )
}

export default Header