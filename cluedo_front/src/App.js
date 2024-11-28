// import { store } from './store'
import { Provider } from 'react-redux'
import { RouterProvider } from "react-router-dom"
import { ThemeProvider } from 'styled-components'
import { useEffect, useState } from 'react'
import { AlternativeThemeProvider } from './provider/AlternativeThemeProvider'
import { router } from './routes/routes'
import { PersistGate } from 'redux-persist/integration/react'
import * as store from './store'
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
    <Provider store={store.store}>
      <ThemeProvider theme={theme}>
        <AlternativeThemeProvider theme={{ toggleTheme: changeAlternativeTheme, wichTheme: wichTheme }}>
          <PersistGate loading={null} persistor={store.persistor}>
            <RouterProvider router={router} />
            <Clock />
          </PersistGate>
        </AlternativeThemeProvider>
      </ThemeProvider >
    </Provider>
  )
}

export default App