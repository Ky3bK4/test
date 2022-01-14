import React from 'react';
import {Container} from "react-bootstrap";
import ProductList from "../components/Product/ProductList";
import {useSelector} from "react-redux";
import {selectShop} from "../app/shopSlice";
import ProductPagination from "../components/Product/ProductPagination";
import SortBar from "../components/SortBar";
import {useFetchProducts} from "../hooks/useFetchProducts";
import Loader from "../components/UI/Loader";
import {useScrollToTop} from "../hooks/useScrollToTop";

const Category = () => {
  const {products, isLoading, page, limit, sortCurrent} = useSelector(selectShop)

  const offset = (page * limit) - limit
  const productsArr = products.slice(offset, page * limit)

  useScrollToTop(page)
  useFetchProducts(sortCurrent)

  if(isLoading) return <Loader />

  return (
    <Container>
      <h2 className="text-center text-black-50 mb-5">Список товаров</h2>
      {
        products.length
          ? <>
              <SortBar/>
              <ProductList products={productsArr}/>
              <ProductPagination/>
            </>
          : <h3 className="text-center text-black">Список товаров пуст</h3>
      }

    </Container>
  );
};

export default Category;