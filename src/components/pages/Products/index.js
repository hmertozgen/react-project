import React, { useState, useEffect } from "react";

import { Grid } from "@chakra-ui/react";

import Card from "../../Card";
import "bootstrap/dist/css/bootstrap.min.css";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    // <div>
    //   <div className="container">
    //     <div className="row">
    //       <div className="col">
    //         {products.map((product, key) => (
    //           <Card key={key} product={product} />
    //         ))}
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div>
      <div class="container">
        <Grid templateColumns="repeat(4, 1fr)" gap={2}>
          {products.map((product, key) => (
            <Card key={key} product={product} />
          ))}
        </Grid>
      </div>
    </div>
  );
}

export default Products;
