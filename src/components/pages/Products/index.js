import React, { useState, useEffect } from "react";

import { Grid } from "@chakra-ui/react";

import Card from "../../Card";

function Products() {
  // https://fakestoreapi.com/products

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <Grid templateColumns="repeat(4, 1fr)" gap={4}>
        {products.map((product, key) => (
          <Card key={key} product={product} />
        ))}
      </Grid>
    </div>
  );
}

export default Products;
