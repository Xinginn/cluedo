import React, { useEffect } from 'react'
import { Container } from '../atoms'
import { useDispatch, useSelector } from 'react-redux'
import { changeSeconds } from '../../store/investigationStore'



const Clock = () => {

  const dispatch = useDispatch()
  const isSummaryShown = useSelector((state) => state.investigationHistorySlice.isSummaryShown)


  function tick() {
    // reduce seconds only if investigationStore has investigation has started (player has closed summary)
    if (!isSummaryShown) {
      dispatch(changeSeconds(-1))
    }
  }

  useEffect(() => {
    const interval = setInterval(tick, 1000);

    return () => clearInterval(interval);
  }, []);


  return (
    <Container.Row id="clock" width='0' height='0'></Container.Row>
  )
}

export default Clock