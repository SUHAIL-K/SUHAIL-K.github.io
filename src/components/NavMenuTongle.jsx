import { Box } from '@chakra-ui/react'
import React from 'react'
import {CloseIcon,} from '@chakra-ui/icons'
import Logo from './Logo'

export default function NavMenuTongle({toggle,isOpen}) {
    return (
        <Box display={{ base: "block", md: "none" }} onClick={toggle}>
          {isOpen ? <CloseIcon /> : <Logo></Logo>}
        </Box>
      )
  
}
