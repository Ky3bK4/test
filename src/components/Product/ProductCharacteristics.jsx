import React from 'react';
import TitleCenter from "../UI/TitleCenter";

const ProductCharacteristics = ({characteristics, countToShow}) => {
  const count = countToShow || characteristics.length;
  const characteristicsArray = characteristics.slice(0, count)

  return (
    <div className="mt-2">
      {
        characteristicsArray.length > 0
          ? characteristicsArray.map(({title, value, postfix}) =>
            <p key={title} className="d-flex">
              <span>{title}:</span>
              <span className="ms-2 fw-bold">{value} {postfix}</span>
            </p>)
          : <TitleCenter>Характеристики отсутствуют</TitleCenter>
      }
    </div>
  );
};

export default ProductCharacteristics;