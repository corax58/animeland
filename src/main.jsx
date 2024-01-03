import * as React from 'react'
import { ChakraProvider,ColorModeScript } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'

import * as ReactDOM from 'react-dom/client'
import App from './App'
import AnimePage from './Components/AnimePage'
import theme from './theme'

const rootElement = document.getElementById('root')
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <BrowserRouter>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
            <App />
    </ChakraProvider></BrowserRouter>
  </React.StrictMode>,
)