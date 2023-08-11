import { useSearchParams } from "react-router-dom";
import { useProducts } from "../hooks/useProducts";
import { ProductsList } from "../components/productList/ProductList";
import { ProductFilters } from "../components/productFilters/ProductFilters";

export const Home = () => {
  const [searchParams] = useSearchParams();
  const { products, isError, isLoading } = useProducts();

  const availabilityParam = searchParams.get('is_salable') ?? 1;

  const filteredProducts = products.filter(product => product.is_salable === parseInt(availabilityParam));

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Failed to fetch products...</div>;
  }

  console.log(filteredProducts); // you can check how changing the radio buttons changes the products list

  return (
    <div className="App">
      
      <ProductFilters />
      <ProductsList products={filteredProducts}/>
    </div>
  );
}