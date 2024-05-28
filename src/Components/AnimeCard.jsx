import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Heading,
} from "@chakra-ui/react";

const AnimeCard = ({ title: string }) => {
  return (
    <Card m="2" maxW="sm">
      <Image></Image>
      <CardBody>
        <Heading>hallo</Heading>
      </CardBody>
    </Card>
  );
};

export default AnimeCard;
