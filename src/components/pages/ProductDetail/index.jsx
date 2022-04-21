import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Text, Button } from "@chakra-ui/react";
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
  return (
    <div>
      <Button colorScheme="pink">Add To Chart</Button>

      <Text as="h2" fontSize="2xl">
        {product.title}
      </Text>
      <p>{product.description}</p>
    </div>
  );
}

export default ProductDetail;
