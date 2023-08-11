import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ProductsProvider } from "../context/Products/ProductsProvider";
import { Home } from "../pages/Home";
import { ManufacturerFilters } from '../components/manufacturerFilters/ManufacturerFilters';

import "./App.css"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  }
]);

function App() {
  return (
    
    <ProductsProvider >
    <h1 className='h1-main'>Shop App</h1>  
    <h2>Filtrs:</h2>
      <ManufacturerFilters />

      <RouterProvider router={router}>   
      
      </RouterProvider>
      
    </ProductsProvider>
  );
}

export default App;
