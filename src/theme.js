// theme.js

// 1. import `extendTheme` function
import { extendTheme } from '@chakra-ui/react'

// 2. Add your color mode config
const config = {
  initialColorMode: 'dark',
  
}

// 3. extend the theme
const theme = extendTheme({ config,
colors:{
  gray:{
    50: "#def8ff",
    100:"#b4e0fe",
    200:"#86c6f7",
    300:"#59aaf3",
    400:"#2e9fee",
    500:"#1791d4",
    600:"#0c7da6",
    700:"#046278",
    800:"#00414a",
    900:"#001a1e"
  }
} })

export default theme