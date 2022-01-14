import React from 'react';
import {Pagination} from "react-bootstrap"
import {selectShop, setPage} from "../../app/shopSlice";
import {useDispatch, useSelector} from "react-redux";

const ProductPagination = () => {
  const {page, limit, totalCountProducts} = useSelector(selectShop)
  const dispatch = useDispatch()

  const pagesCount = Math.ceil(totalCountProducts / limit)
  const pages = []

  for(let i = 0; i < pagesCount; i++) {
    pages.push(i+1)
  }

  return (
    <Pagination className="mt-4">
      {pages.map(pageNumber=>
        <Pagination.Item
          style={{cursor:'pointer'}}
          key={pageNumber}
          active={pageNumber === page}
          onClick={() => dispatch(setPage(pageNumber))}
        >
          {pageNumber}
        </Pagination.Item>
      )}
    </Pagination>
  );
};

export default ProductPagination;