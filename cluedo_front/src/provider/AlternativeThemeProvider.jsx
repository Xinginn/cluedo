import { createContext } from "react"

const AlternativeThemeProviderContext = createContext(null)

const AlternativeThemeProvider = ({ theme, ...props }) => {
  return (
    <AlternativeThemeProviderContext.Provider value={theme} {...props} />
  )
}

export { AlternativeThemeProviderContext, AlternativeThemeProvider }