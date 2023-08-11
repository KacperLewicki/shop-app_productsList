import React from 'react';
import { Product } from './Product';

export const ProductsList = ({ products }) => {
  return (
    <div>
        <h1>Products List</h1>
        <ul>
            {products.map(product => (
              <Product key={product.entity_id} product={product} />
            ))}
        </ul>
    </div>
  );
};

