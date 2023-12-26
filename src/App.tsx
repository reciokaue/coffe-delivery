import { ThemeProvider } from 'styled-components'
import { GlobalStyle, Wrapper } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { Header } from './components/header'
import { Outlet } from 'react-router-dom'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <Wrapper>
        <Header />
        <Outlet />
      </Wrapper>
    </ThemeProvider>
  )
}
