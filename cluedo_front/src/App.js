import { RouterProvider } from "react-router-dom"
import { ThemeProvider } from 'styled-components'
import { useEffect, useState } from 'react'
import { AlternativeThemeProvider } from './provider/AlternativeThemeProvider'
import { router } from './routes/routes'
import { useDispatch, useSelector } from "react-redux"
import { changeSeconds } from "./store/investigationStore"


function App() {

  const dispatch = useDispatch()
  const [wichTheme, setWichTheme] = useState({
    isAlternative: false,
    slug: 'classique'
  })
  const [theme, setTheme] = useState({ bgColor: { primary: '#fcdd62', secondary: "#b59d46" }, slug: 'classique' })
  const { isSummaryShown, remainingSeconds } = useSelector((state) => ({ isSummaryShown: state.investigationHistorySlice.isSummaryShown, remainingSeconds: state.investigationHistorySlice.remainingSeconds }))

  useEffect(() => {
    const interval = setInterval(tick, 1000);

    return () => clearInterval(interval);
  }, [isSummaryShown, remainingSeconds, dispatch]);

  useEffect(() => {
    if (wichTheme.isAlternative)
      setTheme({ bgColor: { primary: '#5cbbf2', secondary: '#5c9ded' }, slug: 'alternative' })
    else setTheme({ bgColor: { primary: '#fcdd62', secondary: "#b59d46" }, slug: 'classique' })
  }, [wichTheme.isAlternative])

  const changeAlternativeTheme = () => {
    if (wichTheme.isAlternative)
      setWichTheme({
        isAlternative: false,
        slug: 'classique'
      })
    else
      setWichTheme({
        isAlternative: true,
        slug: 'alternative'
      })
  }


  function tick() {
    // reduce seconds only if investigationStore has investigation has started (player has closed summary)
    if (!isSummaryShown && remainingSeconds > 0) {
      dispatch(changeSeconds(-1))
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <AlternativeThemeProvider theme={{ toggleTheme: changeAlternativeTheme, wichTheme: wichTheme }}>
        <RouterProvider router={router} />
      </AlternativeThemeProvider>
    </ThemeProvider >
  )
}

export default App