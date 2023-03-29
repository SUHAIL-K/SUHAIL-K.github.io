import React from 'react'
import {Box,Text,Image} from '@chakra-ui/react'


export default function Logo(props) {
  return (
    <Box
    padding={'5'}
    {...props}>
        <Image
        borderRadius='full'
        boxSize='50px'
        src='images/suhail.jpeg'
        alt='SUHAIL K'
        objectFit={'cover'}
        >

        </Image>
    </Box>
  )
}
