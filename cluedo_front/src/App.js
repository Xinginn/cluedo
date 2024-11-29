import { RouterProvider } from "react-router-dom"
import { ThemeProvider } from 'styled-components'
import { useEffect, useState } from 'react'
import { AlternativeThemeProvider } from './provider/AlternativeThemeProvider'
import { router } from './routes/routes'
import Clock from './components/molecules/Clock'


function App() {

  const [wichTheme, setWichTheme] = useState({
    isAlternative: false,
    slug: 'classique'
  })
  const [theme, setTheme] = useState({ bgColor: { primary: '#fcdd62', secondary: "#b59d46" }, slug: 'classique' })

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

  return (
    <ThemeProvider theme={theme}>
      <AlternativeThemeProvider theme={{ toggleTheme: changeAlternativeTheme, wichTheme: wichTheme }}>
        <RouterProvider router={router} />
        {/* <Clock /> */}
      </AlternativeThemeProvider>
    </ThemeProvider >
  )
}

export default App