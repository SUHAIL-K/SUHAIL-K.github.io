import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'

export default function Intro() {
  return (
    <Box
    align='left'
    width='70%'
    margin={'auto'}
    paddingTop={20}
    paddingBottom={20}
    >
        <Text
        color={'teal.200'}
        fontSize={20}
        >
            Hi, my name is
        </Text>
        <Heading
        fontSize={60}
         color={'green.200'}
        >
            SUHAIL K.
        </Heading>
        <Heading
        color={'green.300'}
        fontSize={50}
        >
            I build things for the web.
        </Heading>
        <br />
        <Text
         color={'white'}
         fontSize={20}
        >
        I’m a software engineer specializing in building (and occasionally <br /> designing) exceptional digital experiences. Currently, I’m focused on <br /> building accessible, human-centered products at Upstatement.
        </Text>
    </Box>
  )
}
