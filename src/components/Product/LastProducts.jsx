import React from 'react';
import {useSelector} from "react-redux";
import {selectShop} from "../../app/shopSlice";
import ProductItem from "./ProductItem";
import {Row, Col} from "react-bootstrap";
import {useFetchProducts} from "../../hooks/useFetchProducts";
import Loader from "../UI/Loader";

const LastProducts = ({count = 4}) => {
  const {products, isLoading} = useSelector(selectShop)
  const lastProducts = products.slice(-count)

  useFetchProducts()

  if (isLoading) return <Loader />

  return (
    <Row className="mt-5">
      <h3 className="text-black-50 text-center mb-3">Последние товары</h3>
      {lastProducts && lastProducts.map(product=> (
        <Col md={4} lg={3} className="mb-4" key={product.id}>
          <ProductItem product={product}/>
        </Col>
      ))}
    </Row>
  );
};

export default LastProducts;