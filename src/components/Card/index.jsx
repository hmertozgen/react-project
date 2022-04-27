import { Box, Image, Button, Badge, Wrap } from "@chakra-ui/react";
import { Col, Container, Row } from "react-bootstrap";

import { Link } from "react-router-dom";

function Card({ key, product, handleAddProduct }) {
  const truncateOverview = (string, maxLength) => {
    if (!string) return null;
    if (string.length <= maxLength) return string;
    return `${string.substring(0, maxLength)} ...`;
  };
  return (
    <>
      <div className="container">
        <div className="row mb-5">
          <div className="col mb-2 p-2">
            <Link to={`/product/${product.id}`}>
              <Image height="35vh" src={product.image} alt="product" />

              <div className="des mb-2">{product.category}</div>
              <h5 className="smaller mb-2">
                {truncateOverview(product.title, 60)}
              </h5>
              <div className="description mb-2">
                {truncateOverview(product.description, 100)}
              </div>
              <div className="mb-2">
                <Badge colorScheme="green" p="2" flex="r">
                  {product.rating.rate}{" "}
                </Badge>
              </div>
            </Link>
            <Button
              colorScheme="pink"
              onClick={() => handleAddProduct(product)}
            >
              Add To Chart{" "}
            </Button>
            <span className="ms-3 h4 ">{product.price} TL</span>
            <div></div>
          </div>
        </div>
      </div>
    </>

    // <Wrap
    //   borderWidth="1px"
    //   borderRadius="lg"
    //   overflow="hidden"
    //   p="3"
    //   key={product.id}
    // >
    //   <Link to={`/product/${product.id}`}>
    //     <Image height="35vh" src={product.image} alt="product" />

    //     <Box p="6">
    //       <Box d="flex" alignItems="baseline">
    //         {product.category}
    //       </Box>

    //       <Box
    //         mt="1"
    //         fontWeight="semibold"
    //         as="h4"
    //         lineHeight="tight"
    //         height="10vh"
    //       >
    //         {truncateOverview(product.title, 60)}
    //       </Box>
    //       <Box height="20vh">{truncateOverview(product.description, 100)}</Box>

    //       <Badge colorScheme="green" p="2" flex="r">
    //         {product.rating.rate}
    //       </Badge>
    //     </Box>
    //   </Link>
    //   <Wrap align="center" spacing="30px" justify="center">
    //     <Button colorScheme="pink" onClick={() => handleAddProduct(product)}>
    //       Add To Chart
    //     </Button>
    //     <Box align="flex-start">{product.price} TL </Box>
    //   </Wrap>
    // </Wrap>
  );
}

export default Card;
