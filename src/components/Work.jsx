import { ExternalLinkIcon } from "@chakra-ui/icons";

import { MdRoom, MdCalendarMonth } from "react-icons/md";
import {
  Box,
  Center,
  Divider,
  Flex,
  Heading,
  Link,
  ListItem,
  Stack,
  Text,
  Icon,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";

function Work(props) {
  return (
    <Box>
      <Stack textAlign={"left"} w="70%" margin={"auto"}>
        <Heading fontSize={30} color={"cpdark"}>Where I've Worked</Heading>
        <Stack direction={["column", "row"]} w={"100%"}>
          <Stack textAlign={"right"} w={"30%"}>
            <Heading fontWeight={500} color={"white"} fontSize={"20px"}>
            IT Administrator & <br></br> Android Developer
            </Heading>
            <Link
              textColor={"white"}
              fontSize="16px"
              fontWeight={600}
              href="https://chakra-ui.com"
              isExternal
            >
              Yusuf Malabar Trading LLP <ExternalLinkIcon mx="2px" />
            </Link>
            <Flex justifyContent={"right"} alignItems={"center"}>
              <Icon as={MdRoom} color="white"></Icon>
              <Text ml={1} color={"white"}>Malappuram, Kerala</Text>
            </Flex>
            <Flex justifyContent={"right"} alignItems={"center"}>
              <Icon as={MdCalendarMonth} color="white"></Icon>
              <Text ml={1} color={"white"}>April 2019 - Present</Text>
            </Flex>
          </Stack>
          <Center>
            <Divider orientation="vertical" />
          </Center>
          <Stack w={"70%"} textColor="white">
            <UnorderedList>
              <ListItem>
                IT Administrator with 4+ years of experience managing complex
                computer systems and networks for a large organization.
              </ListItem>
              <ListItem>
                Skilled in network administration, system maintenance, and
                database management.
              </ListItem>
              <ListItem>
                Excellent communicator and team player, with a proven ability to
                troubleshoot complex IT problems and provide innovative
                solutions.
              </ListItem>
              <ListItem>
                Developed an Android application for inventory and billing
                management, using Java, Android SDK (Android Studio), and MS
                SQL. The application provided inventory tracking, order
                management, billing, and reporting features. Playstore link
              </ListItem>
            </UnorderedList>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}

export default Work;
