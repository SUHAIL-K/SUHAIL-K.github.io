import { Box, Card, Flex, Heading, Stack } from '@chakra-ui/react';
import React from 'react';

function TechSkill(props) {
    return (
        <Box>
            <Stack textAlign={"left"} w="70%" margin={"auto"}>
            <Heading fontSize={30} color={"cpdark"}>Where I've Worked</Heading>
            <Flex>
                <Card></Card>
            </Flex>
            </Stack>
        </Box>
    );
}

export default TechSkill;