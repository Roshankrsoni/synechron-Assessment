import React from "react";
import {
  Card,
  Image,
  Stack,
  CardBody,
  Heading,
  Text,
  CardFooter,
  Button
} from "@chakra-ui/react";

export const MovieRow = ({ movie }) => {
  function viewMovie() {
    const url = "https://www.themoviedb.org/movie/" + movie.id;
    window.open(url, "_blank");
  }
  const overview = movie.overview;
  const slicedOverview = overview?.slice(0, 100);

  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
    >
      <Image
        objectFit="cover"
        maxW={{ base: "100%", sm: "200px" }}
        src={movie.poster_src}
        alt="Caffe Latte"
      />

      <Stack>
        <CardBody>
          <Heading size="md">{movie.title}</Heading>

          <Text py="2">{slicedOverview}...</Text>
        </CardBody>

        <CardFooter>
          <Button
            variant="solid"
            colorScheme="blue"
            onClick={() => viewMovie()}
          >
            View More
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  );
};
