import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { MovieRow } from "../components/MoviewRow";
import { Container, Heading, Stack, Text, Button } from "@chakra-ui/react";

export default withRouter(({ history }) => {
  const [movies, setMovies] = useState([]);
  const logout = (e) => {
    e.preventDefault();
    history.push("/logout");
  };

  useEffect(() => {
    performSearch("a");
  }, []);

  function performSearch(searchTerm) {
    const url =
      "https://api.themoviedb.org/3/movie/popular?api_key=b6b3aaa39e9b8519d35c42addbdba973&language=en-US&page=1" +
      searchTerm;
    fetch(url)
      .then((data) => {
        console.log("fetched data successfully");
        return data.json();
      })
      .then((searchResults) => {
        const results = searchResults.results;
        setMovies(results);
      })
      .catch((err) => {
        console.error("Failed to fetch data");
      });
  }

  return (
    <Container maxW={"5xl"}>
      <Stack
        textAlign={"center"}
        align={"center"}
        spacing={{ base: 18, md: 10 }}
      >
        <br />
        <Heading
          fontWeight={600}
          fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
        >
          Meeting scheduling{" "}
          <Text as={"span"} color={"orange.400"}>
            made easy
          </Text>
        </Heading>
        <Button
          leftIcon={"❌"}
          onClick={logout}
          colorScheme="yellow"
          variant="solid"
        >
          Logout
        </Button>
        {movies?.map((movie) => {
          movie.poster_src =
            "https://image.tmdb.org/t/p/w200" + movie.poster_path;
          return <MovieRow movie={movie} key={movie.id} />;
        })}
      </Stack>
    </Container>
  );
});
