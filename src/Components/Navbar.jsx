import React, { useRef, useState } from "react";
import "../Components/Components.css";
import logo from "../assets/images/logo.png";
import { HStack, Link, Text, useColorModeValue } from "@chakra-ui/react";
import { Switch, Image, useColorMode, Input } from "@chakra-ui/react";

const Navbar = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack
      bg={useColorModeValue("gray.100", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
      justifyContent={"space-between"}
    >
      <HStack>
        <Link href="/">
          <div className="image-container">
            <img width={"100px"} src={logo}></img>
          </div>
        </Link>
      </HStack>
      <HStack ml="10">
        {" "}
        <Switch
          isChecked={colorMode === "dark"}
          colorScheme="teal"
          onChange={toggleColorMode}
        ></Switch>
        <Text whiteSpace={"nowrap"}>Dark mode</Text>
      </HStack>{" "}
    </HStack>
  );
};

export default Navbar;
