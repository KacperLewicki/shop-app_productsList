import React from 'react';
import { getProductGrossPrice } from '../../utils/getProductGrossPrice';

export const Product = ({ product }) => {
  const availabilityStatus = product.is_salable === 1 ? 'dostepny' : 'niedostepny';

  return (
    <li>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>{product.manufacturer}</p>
      <p>Availabilty: {availabilityStatus}</p>
      <p>Gross Price: ${getProductGrossPrice(product)}</p>
      <p>Stock: {product.stock}</p>
    </li>
  )
}