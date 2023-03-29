import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

export default function AboutMe() {
  return (
    <Box
      align="left"
      width="70%"
      margin={"auto"}
      paddingTop={20}
      paddingBottom={20}
    >
      <Flex alignItems={"center"} justifyContent={"center"}>
        <Box>
          <Heading color={"blue.200"}>About Me</Heading>

          <br />
          <Text color={"white"} paddingRight={40}>
            Software professional with expertise in MERN technology, HTML, CSS,
            and JavaScript, and experienced in solving more than 450+ DSA
            problems. Looking forward to being a part of an organization that
            allows constant learning and development of my technical and
            management skills
          </Text>
        </Box>
        <Box>
          <Box
            position={"absolute"}
            borderRadius="10"
            height={300}
            width={235}
            bottom={20}
            right={60}
            zIndex={-1}
            backgroundColor={"blue.400"}
          ></Box>
          <Image
            src="/images/suhail.jpeg"
            borderRadius="10"
            height={300}
            width={600}
            alt="SUHAIL K"
            objectFit={"cover"}
            zIndex={1}
          ></Image>
        </Box>
      </Flex>
    </Box>
  );
}
