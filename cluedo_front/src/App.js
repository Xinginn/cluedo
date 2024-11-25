import { store } from './store'
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from "react-router-dom"

import Games from "./pages/Games"
import Discussion from './pages/Discussion'
import Note from './pages/Note'
import CharacterDetails from './pages/CharacterDetails'
import Scene from './pages/Scene'
import Result from './pages/Result'
import { ThemeProvider } from 'styled-components'
import { useEffect, useState } from 'react'
import { AlternativeThemeProvider } from './provider/AlternativeThemeProvider'


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Games />,
    },
    {
      path: "/scene",
      element: <Scene />,
    },
    {
      path: "/note",
      element: <Note />,
    },
    {
      path: "/discussion",
      element: <Discussion />,
    },
    {
      path: "/note/:id",
      element: <CharacterDetails />,
    },
    {
      path: "/result",
      element: <Result />,
    },
  ])

  const [isAlternative, setIsAlternative] = useState(false)
  const [theme, setTheme] = useState({ bgColor: { primary: '#fcdd62', secondary: "#b59d46" } })

  useEffect(() => {
    if (isAlternative)
      setTheme({ bgColor: { primary: '#5cbbf2', secondary: '#5c9ded' } })
    else setTheme({ bgColor: { primary: '#fcdd62', secondary: "#b59d46" } })
  }, [isAlternative])

  const changeAlternativeTheme = () => {
    setIsAlternative(!isAlternative)
  }

  return (
    <ThemeProvider theme={theme}>
      <AlternativeThemeProvider theme={{ toggleTheme: changeAlternativeTheme, isAlternative: isAlternative }}>
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </AlternativeThemeProvider>
    </ThemeProvider >
  )
}

export default App