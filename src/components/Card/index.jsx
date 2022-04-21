import { Box, Image, Button } from "@chakra-ui/react";

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Card({ key, product }) {
  return (
    <Box
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

          <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
            {product.title}
          </Box>
          <Box>{product.description}</Box>

          <Box>
            {product.price} TL <span>{product.rating.rate}</span>
          </Box>
        </Box>
      </Link>
      <Button colorScheme="pink">Add To Chart</Button>
    </Box>
  );
}

export default Card;
