import React, { useEffect, useRef, useState } from "react";
import Navbar from "./Components/Navbar";
import { Grid, GridItem, Show, Input } from "@chakra-ui/react";
import AnimeGrid from "./Components/AnimeGrid";
import GenreGrid from "./Components/GenreGrid";
import axios from "axios";
import { Route, Routes, Link } from "react-router-dom";
import AnimePage from "./Components/AnimePage";
import Footer from "./Components/Footer";

const App = () => {
  const ref = useRef(null);

  const [topAnime, setTopAnime] = useState([]);
  const [search, setSearch] = useState([]);

  useEffect(() => {
    axios.get("https://api.jikan.moe/v4/top/anime").then((res) => {
      setTopAnime(res.data.data);
    });
  }, []);

  const handleSearch = async (query) => {
    const temp = await axios
      .get("https://api.jikan.moe/v4/anime?q=" + query)
      .then((res) => res.data.data);
    setTopAnime(temp.slice(0, 10));
  };

  return (
    <Routes>
      <Route path="/:id" element={<AnimePage></AnimePage>}></Route>

      <Route
        path="/"
        element={
          <div>
            <Grid
              templateAreas={{
                base: `"header" "main" "footer"`,
                lg: `"header" "main" "footer"`,
              }}
            >
              <GridItem pl="2" area={"header"}>
                <Navbar search={(search) => handleSearch(search)} />

                <form
                  style={{ width: "100% ", marginRight: "10" }}
                  onSubmit={(event) => {
                    event.preventDefault();
                    if (ref) handleSearch(ref.current.value);
                  }}
                >
                  <Input
                    ref={ref}
                    m={"3"}
                    borderRadius={"20"}
                    placeholder="Search anime..."
                    variant={"filled"}
                    style={{
                      width: "80%",
                      marginLeft: "7%",
                      marginRight: "auto",
                    }}
                  ></Input>
                </form>
              </GridItem>
              <GridItem pl="2" area={"main"}>
                <AnimeGrid topAnime={topAnime} />
              </GridItem>
            </Grid>
            <Footer />
          </div>
        }
      ></Route>
    </Routes>
  );
};

export default App;
