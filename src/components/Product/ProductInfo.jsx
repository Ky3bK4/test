import React from 'react';
import {Badge, Button, Image, Row} from "react-bootstrap";
import {IMAGE_CAP_URL_BIG} from "../../utils/consts";
import PriceField from "../PriceField";
import ProductCharacteristics from "./ProductCharacteristics";

const ProductInfo = ({product}) => {
  return (
    <Row className="productInfo">
      <h3 className="mb-3">
        {product.title}
        {product.discount > 0 && <Badge className="ms-2" bg="danger">Акция</Badge>}
      </h3>
      <div className="productImg ">
        <Image className="mx-auto d-block" src={product.image || IMAGE_CAP_URL_BIG} />
      </div>
      <div className="d-flex mt-3 justify-content-between align-items-start">
       <div className="fs-3 d-flex align-items-start">
         <span>Цена: </span>
         <PriceField className="ms-2" price={product.price} discount={product.discount}/>
       </div>
       <Button
         className="buyBtn"
       >
         Купить
       </Button>
      </div>
      <div  className="mt-5">
        <h4>Краткие характеристики</h4>
        <ProductCharacteristics countToShow={3} characteristics={product.characteristic} />
      </div>
    </Row>
  );
};

export default ProductInfo;