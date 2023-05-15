import { ThemeProvider } from 'styled-components';
import GlobalStyle from './theme/GlobalStyle';
import Landing from './pages/Landing';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <main>
        <Landing />
        {/* <h1>Holaayrtytrya</h1> */}
      </main>
    </ThemeProvider>
  )
}

export default App
