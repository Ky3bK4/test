import React from 'react';

const PriceField = ({price, discount, className}) => {
  const priceWithDiscount = price - price * discount / 100

  return (
    <div className={className + ''}>
      <p>
        {
          discount > 0 ? <s>{price} $</s> : price + ' $'
        }
      </p>
      <p className="text-success">
        {
          discount > 0 && priceWithDiscount + ' $'
        }
      </p>
    </div>
  )
};

export default PriceField;