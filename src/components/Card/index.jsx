import { Box, Image, Button, Badge, Grid, Wrap } from "@chakra-ui/react";

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Card({ key, product }) {
  const truncateOverview = (string, maxLength) => {
    if (!string) return null;
    if (string.length <= maxLength) return string;
    return `${string.substring(0, maxLength)} ...`;
  };
  return (
    <Wrap
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p="3"
      key={product.id}
    >
      <Link to={`/product/${product.id}`}>
        <Image height="35vh" src={product.image} alt="product" />

        <Box p="6">
          <Box d="flex" alignItems="baseline">
            {product.category}
          </Box>

          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            height="10vh"
          >
            {product.title}
          </Box>
          <Box height="20vh">{truncateOverview(product.description, 100)}</Box>

          <Badge colorScheme="green" p="2" flex="r">
            {product.rating.rate}
          </Badge>
        </Box>
      </Link>
      <Wrap align="center" spacing="30px" justify="center">
        <Button colorScheme="pink">Add To Chart</Button>
        <Box align="flex-start">{product.price} TL </Box>
      </Wrap>
    </Wrap>
  );
}

export default Card;
