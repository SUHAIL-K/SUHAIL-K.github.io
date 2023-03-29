import { Box, Flex, Text, transition } from "@chakra-ui/react";
import React from "react";
import Link from "react-scroll/modules/components/Link";

export default function NavLink({ text, to }) {
  return (
    <Link>
      <Flex
      role={"group"}
       
      >
        <Text color={"cplite"}
         _groupHover={{
            color: "white",
            transition: 10,
            cursor: "pointer",
          }}
        >{"< "}</Text>
       
        &nbsp;
        <Text color={"white"}
        transition="all .25s ease"
         _groupHover={{
            color: "cplite",
            transition: 10,
            cursor: "pointer",
            transform:'scale(1.1)'
          }}
        >{text}</Text>
        
        &nbsp;
        <Text color={"cplite"}
         _groupHover={{
            color: "white",
            transition: 10,
            cursor: "pointer",
          }}
        >{" />"}</Text>
      </Flex>
    </Link>
  );
}
