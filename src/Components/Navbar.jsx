import React, { useRef, useState } from 'react'
import '../Components/Components.css'
import logo from '../assets/images/logo.png'
import {HStack,Text} from '@chakra-ui/react'
import { Switch,Image,useColorMode,Input } from '@chakra-ui/react'


const Navbar = () => {
  const {toggleColorMode, colorMode} = useColorMode();

  return (
    <HStack  justifyContent={'space-between'}> 
    <HStack>
      <div className='image-container'>
    <img width={'100px'} src={logo}></img></div>
    
    </HStack>
    
      <HStack ml='10'> <Switch  isChecked={colorMode==='dark'} colorScheme='teal' onChange={toggleColorMode}></Switch><Text whiteSpace={'nowrap'}>Dark mode</Text>
 </HStack>   </HStack>
  )
}

export default Navbar