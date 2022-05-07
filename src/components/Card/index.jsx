import { Image, Button, Badge } from "@chakra-ui/react";

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
  );
}

export default Card;
