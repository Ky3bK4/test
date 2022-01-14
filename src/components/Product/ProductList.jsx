import React from 'react';
import {Col, Row} from "react-bootstrap";
import ProductItem from "./ProductItem";

const ProductList = ({products}) => {
  return (
    <Row>
      {
        products && products.map(product =>
          <Col className="mb-4" md={4} key={product.id}>
            <ProductItem product={product}/>
          </Col>
        )
      }
    </Row>
  );
};

export default ProductList;