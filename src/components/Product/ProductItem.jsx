import React from 'react';
import {Badge, Card} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
import {IMAGE_CAP_URL_SMALL} from "../../utils/consts";
import PriceField from "../PriceField";

const ProductItem = ({product}) => {
  const {
    price,
    discount,
    image,
    title,
    categoryLink,
    link
  } = product

  const productLink = categoryLink + '/' + link
  const productImg = image || IMAGE_CAP_URL_SMALL

  return (
    <Card className="h-100 productItem">
      <Card.Img variant="top" src={productImg}/>
      {product.discount > 0 && <Badge className="ms-2 discountBadge" bg="danger">Акция</Badge>}
      <Card.Body className="px-3 pt-2 pb-1">
        <Card.Title className="fs-6">{title}</Card.Title>
      </Card.Body>
      <Card.Footer
        className={`${discount > 0 ? 'cardFooter': ''}`}
      >
        <div className="d-flex justify-content-between align-items-center">
          <div className="fs-5 text-primary">
            <PriceField price={price} discount={discount} />
          </div>
          <NavLink
            to={productLink}
            className={`btn btn-primary ${discount > 0 ? 'mt-2' : ''}`}
          >
            Купить
          </NavLink>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default ProductItem;