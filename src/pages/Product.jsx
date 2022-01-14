import React, {useEffect, useState} from 'react';
import {Container, Tabs, Tab} from "react-bootstrap";
import ProductInfo from "../components/Product/ProductInfo";
import ProductCarousel from "../components/Product/ProductCarousel";
import ProductDescription from "../components/Product/ProductDescription";
import ProductCharacteristics from "../components/Product/ProductCharacteristics";

import {useSelector} from "react-redux";
import {selectShop} from "../app/shopSlice";
import {useParams} from "react-router-dom";
import {useFetchProducts} from "../hooks/useFetchProducts";
import {useScrollToTop} from "../hooks/useScrollToTop";

const Product = () => {
  // Состояние для переключения табов
  const [key, setKey] = useState('generalInfo');
  const {productLink} = useParams()

  const {products} = useSelector(selectShop)

  // Получение товаров
  useFetchProducts()

  useScrollToTop(productLink)

  useEffect(() => {
    setKey('generalInfo')
  },[productLink])

  // Текущий товар на странице
  const currentProduct = products.find(product => product.link === productLink )
  // Остальные товары
  const otherProducts = products.filter(product => product.id !== currentProduct.id)

  if(!currentProduct) return null

  return (
    <Container className="py-2">
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
      >
        <Tab eventKey="generalInfo" title="Общая информация">
          <ProductInfo product={currentProduct}/>
        </Tab>
        <Tab eventKey="description" title="Описание товара">
          <ProductDescription description={currentProduct.text}/>
        </Tab>
        <Tab eventKey="characteristics" title="Все характеристики">
          <h4>Характеристики {currentProduct.title}</h4>
          <ProductCharacteristics characteristics={currentProduct.characteristic}/>
        </Tab>
      </Tabs>

      <h4 className="mt-5 text-center">Остальные товары</h4>
      <ProductCarousel count={8} products={otherProducts}/>
    </Container>
  );
};

export default Product;