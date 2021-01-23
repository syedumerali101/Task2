import React, { useState, useEffect } from "react";
import { Row } from "react-bootstrap";
import { Card } from "react-bootstrap";

import axios from "axios";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  const newProduct = products
    .sort(() => Math.random() - Math.random())
    .find(() => true);
  console.log(newProduct, "NewProduct");

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("/retrieve-img");

      setProducts(data);
    };

    fetchProducts();
  }, []);
  return (
    <>
      <h1>Our Products</h1>
      <Row>
        {newProduct && (
          <Card className="my-3 p-3 rounded">
            <Card.Img src={newProduct.image} variant="top" />

            <Card.Body>
              <Card.Title as="div">
                <strong>Product Name: {newProduct.name}</strong>
              </Card.Title>

              <Card.Text as="div">
                <strong>Brand Name: {newProduct.brand}</strong>
              </Card.Text>
              <Card.Text as="div">
                <strong>Description : {newProduct.description}</strong>
              </Card.Text>
            </Card.Body>
          </Card>
        )}
      </Row>
      }
    </>
  );
};
export default HomeScreen;
