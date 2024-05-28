import React from "react";
import {
  Box,
  Container,
  Stack,
  Text,
  Link,
  useColorModeValue,
  VStack,
  HStack,
  Icon,
} from "@chakra-ui/react";
import { FaInstagram, FaTelegram } from "react-icons/fa";

const Footer = () => {
  return (
    <Box
      bg={useColorModeValue("gray.100", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
      mt={10}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Text>© 2024 Abubeker. All rights reserved.</Text>
        <VStack align={"start"}>
          <Text textDecoration="underline">Contact Me</Text>
          <HStack>
            <Icon as={FaInstagram} />
            <Link href="https://www.instagram.com/corax5888/" isExternal>
              Instagram
            </Link>
          </HStack>
          <HStack>
            <Icon as={FaTelegram} />
            <Link href="https://t.me/Ccoraxx" isExternal>
              Telegram
            </Link>
          </HStack>
        </VStack>
      </Container>
    </Box>
  );
};

export default Footer;
