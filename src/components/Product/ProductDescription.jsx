import React from 'react';
import createMarkup from "../../utils/createMarkup";
import TitleCenter from "../UI/TitleCenter";

const ProductDescription = ({description}) => {
  if(!description.length) return <TitleCenter>Описание отсутствует</TitleCenter>

  return (
    <div className="productDescription" dangerouslySetInnerHTML={createMarkup(description)}/>
  );
};

export default ProductDescription;