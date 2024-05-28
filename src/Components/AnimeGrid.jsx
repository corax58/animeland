import React, { useEffect, useState } from "react";
import AnimeCard from "./AnimeCard";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { Route, Routes, Link } from "react-router-dom";
import AnimePage from "./AnimePage";

const AnimeGrid = (topAnime) => {
  return (
    <div>
      <SimpleGrid columns={{ lg: 3, xl: 5, sm: 1, md: 2 }} spacing={10}>
        {topAnime.topAnime.map((anime) => (
          <Link to={"/" + anime.mal_id} key={anime.mal_id}>
            {" "}
            <Card m="2" maxW="sm" borderRadius={10} overflow={"hidden"}>
              <Image height={"400px"} src={anime.images.jpg.image_url}></Image>
              <CardBody>
                <Text>{anime.title}</Text>
              </CardBody>
            </Card>
          </Link>
        ))}
      </SimpleGrid>
    </div>
  );
};

export default AnimeGrid;
