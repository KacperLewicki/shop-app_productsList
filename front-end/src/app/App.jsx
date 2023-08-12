import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ProductsProvider } from "../context/Products/ProductsProvider";
import { Home } from "../pages/Home";


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

      <RouterProvider router={router} />
      
    </ProductsProvider>
  );
}

export default App;
