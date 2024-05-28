import React, { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  Image,
  Stack,
  Text,
  Heading,
  Divider,
  SimpleGrid,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import axios from "axios";
import { BrowserRouter, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const AnimePage = () => {
  const { id } = useParams();

  const [anime, setAnime] = useState({
    title: "",
    images: {
      jpg: {
        image_url: "",
      },
      trailer: {
        embed_url: "",
      },
      score: 0,
      episodes: 0,
      status: "",
      synopsis: "",
      rating: "",
    },
  });

  const [animeCharacters, setAnimeCharacters] = useState([]);
  const character = ["luffy", "deku", "yuki"];
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    axios
      .get("https://api.jikan.moe/v4/anime/" + id + "/characters")
      .then((res) => {
        const temp = res.data.data;
        setAnimeCharacters(temp.slice(0, 6));
      })
      .catch((err) => console.log(err.messages));
  }, []);

  useEffect(() => {
    axios
      .get("https://api.jikan.moe/v4/anime/" + id)
      .then((res) => setAnime(res.data.data))
      .catch((err) => console.log(err.message));
  }, []);
  return (
    <div>
      <Navbar />
      <Grid
        templateAreas={{
          base: `"main" "aside"`,
          lg: `"main aside"`,
        }}
      >
        <GridItem area={"main"}>
          <Card
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="elevated"
            mt="10"
            ml="auto"
            mr="auto"
            w="70%"
          >
            <Image
              objectFit="cover"
              maxW={{ base: "100%", sm: "200px" }}
              src={anime.images.jpg.image_url}
              alt="dd"
              p="2"
              borderRadius={"20"}
            />

            <Stack>
              <CardBody>
                <Heading size="md">
                  {anime.title} || {anime.title_japanese}
                </Heading>
                <Divider></Divider>
                {anime.genres && (
                  <Text py="2">Genre: {anime.genres[0].name}</Text>
                )}

                <Text py="2">Score: {anime.score}</Text>
                <Text py="2">Episodes: {anime.episodes}</Text>
                <Text py="2">Status: {anime.status}</Text>
                <Text py="2">Rating: {anime.rating}</Text>
              </CardBody>
            </Stack>
          </Card>

          <Card
            overflow={"hidden"}
            borderRadius={"10"}
            mt="10"
            ml="auto"
            mr="auto"
            w="70%"
            variant={"outline"}
          >
            <iframe
              height="500px"
              title="naruto"
              src={anime.trailer && anime.trailer.embed_url}
              allowFullScreen
            />
          </Card>
          {/* The synopsis*/}
          <Card mt="10" ml="auto" mr="auto" w="70%">
            <Heading pt="5" pl="5">
              Synopsis
            </Heading>
            <Divider />
            <CardBody>
              <Text textAlign={"justify"}>{anime.synopsis}</Text>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem area={"aside"}>
          {" "}
          <Heading mt={"30"}>Characters</Heading>
          <SimpleGrid columns={{ base: 2, lg: 2, md: 3 }} spacing={"10"}>
            {animeCharacters &&
              animeCharacters.map((character) => {
                return (
                  <Card
                    key={character.character.mal_id}
                    w="160px"
                    overflow={"hidden"}
                    mt="10"
                    mx="2"
                  >
                    <Image
                      p="3"
                      src={character.character.images.jpg.image_url}
                      borderRadius={"10"}
                    ></Image>
                    <Text pl="3" pb="2">
                      {character.character.name}
                    </Text>
                    <Divider></Divider>
                    <Text pl="3" pt="2" pb="1">
                      {character.role}
                    </Text>
                  </Card>
                );
              })}
          </SimpleGrid>
        </GridItem>
      </Grid>
      <Footer />
    </div>
  );
};

export default AnimePage;
