import React, { createContext, useState } from "react"
import { ThemeProvider } from "styled-components"
import useLocalStorage, { STORED_VALUES } from "../../Hooks/useLocalStorage"

interface Props {
  children: JSX.Element
}

interface IThemeContext {
  dark: boolean
  toggleDark?: () => void
}

const defaultState = {
  dark: false,
}

const responsive = {
  sm: "600px",
  md: "768px",
  lg: "992px",
  xl: "1200px",
}
const light = {
  colors: {
    header: "#1C3738",
    button: "#8BAAAD",
    body: "#1C3738",
    footer: "#1C3738",
    text: "#F4FFF8",
    dropdown: "#adadad",
    authCard: "rgba(139, 170, 172, 0.5)",
    pagination: "#e8fcfc",
    table: "#ddd",
    listItem: "#E6E4DF",
  },
  responsive: responsive,
}
const dark = {
  colors: {
    header: "#1d1d1d",
    button: "#75b4c7",
    body: "#121212",
    footer: "#1d1d1d",
    text: "#fff",
    dropdown: "#3a3a3a",
    authCard: "#414141",
    pagination: "#393939",
    table: "#2d2d2d",
    listItem: "#121212",
  },
  responsive: responsive,
}

export type ThemeType = typeof dark

export const ThemeContext = createContext<IThemeContext>(defaultState)

function ThemeContextProvider({ children }: Props) {
  const { value, setValue } = useLocalStorage(
    STORED_VALUES.THEME,
    defaultState.dark
  )
  const [isDarkTheme, setDarkTheme] = useState(value === "dark")

  const themeToggle = () => {
    if (isDarkTheme) {
      setDarkTheme(false)
      setValue("light")
    } else {
      setDarkTheme(true)
      setValue("dark")
    }
  }

  const themeObj: IThemeContext = {
    dark: isDarkTheme,
    toggleDark: themeToggle,
  }

  return (
    <ThemeContext.Provider value={themeObj}>
      <ThemeProvider theme={isDarkTheme ? dark : light}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider
