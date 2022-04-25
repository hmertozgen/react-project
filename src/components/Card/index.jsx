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
    // <>
    //   <div className="container">
    //     <div className="row ">
    //       <div className="col">
    //         <div className="card" style={{}}>
    //           <Link to={`/product/${product.id}`}>
    //             <img src={product.image} alt="" className="card-img-top" />
    //             <div className="card-body">
    //               <h5 className="card-title">
    //                 {truncateOverview(product.title, 60)}
    //               </h5>
    //               <p className="card-text">
    //                 {truncateOverview(product.description, 100)}
    //               </p>
    //             </div>
    //             <ul className="list-group list-group-flush">
    //               <h3>
    //                 <span className="badge bg-secondary">
    //                   {product.rating.rate}
    //                 </span>
    //               </h3>
    //               <li className="list-group-item">{product.price} TL</li>
    //             </ul>
    //           </Link>

    //           <button className="btn btn-primary">Add To Cart</button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </>

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
            {truncateOverview(product.title, 60)}
          </Box>
          <Box height="20vh">{truncateOverview(product.description, 100)}</Box>

          <Badge colorScheme="green" p="2" flex="r">
            {product.rating.rate}
          </Badge>
        </Box>
      </Link>
      <Wrap align="center" spacing="30px" justify="center">
        <Button colorScheme="pink" onClick={() => handleAddProduct(product)}>
          Add To Chart
        </Button>
        <Box align="flex-start">{product.price} TL </Box>
      </Wrap>
    </Wrap>
  );
}

export default Card;
