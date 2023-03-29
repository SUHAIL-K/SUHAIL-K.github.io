import { Box, Flex, Heading, Stack } from "@chakra-ui/react";
import React from "react";
import Logo from "./Logo";
import NavLink from "./NavLink";
import NavMenuTongle from "./NavMenuTongle";

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <Flex
      backgroundColor={"csdark"}
      justifyContent="space-around"
      alignItems="center"
    >
      <Flex alignItems="center">
        <Logo></Logo>
        <Heading color={'cpdark'}>SUHAIL K</Heading>
      </Flex>
      <Stack
        spacing={8}
        align="center"
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
      >
        <NavLink text={" About "}></NavLink>
        <NavLink text={" Experience "}></NavLink>
        <NavLink text={" Work "}></NavLink>
        <NavLink text={" Contact "}></NavLink>
        <NavLink text={"Resume"}></NavLink>
      </Stack>
      <NavMenuTongle toggle={toggle} isOpen={isOpen}></NavMenuTongle>
    </Flex>
  );
}
