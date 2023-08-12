import React from 'react';
import { getProductGrossPrice } from '../../utils/getProductGrossPrice';
import './Product.css'; 

export const Product = ({ product }) => {
  const availabilityStatus = product.is_salable === 1 ? 'available' : 'inaccessible';
  const isNewProduct = product.new_product > 0;

  return (
    <li className={`Product ${availabilityStatus} ${isNewProduct ? 'new' : ''}`}>
      <h2>Product: {product.name}</h2>
      <p>Description: {product.description}</p>
      <p>Producer: {product.manufacturer}</p>
      <p>Availabilty: {availabilityStatus}</p>
      <p>Net Price: {product.price}</p>
      <p>{`Gross Price: ${getProductGrossPrice(product)}`}</p>
      {isNewProduct && <p className='p-new-product'>New Product !!!!!!</p>}
    </li>
  );
}
