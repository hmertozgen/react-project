import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Text, Button } from "@chakra-ui/react";
import ImageGallery from "react-image-gallery";
//id'ye erişmek için use params kullandık
//react-image-gallery
function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  const images = [
    {
      original: product.image,
      thumbnail: product.image,
    },
    {
      original: product.image,
      thumbnail: product.image,
    },
  ];
  return (
    <div>
      <Button colorScheme="pink">Add To Chart</Button>

      <Text as="h2" fontSize="3xl">
        {product.price} TL
      </Text>

      <Text as="h2" fontSize="3xl">
        {product.title}
      </Text>
      <Text fontSize="xl">{product.description}</Text>
      <Box margin="10px">
        <ImageGallery items={images} />
      </Box>
    </div>
  );
}

export default ProductDetail;
