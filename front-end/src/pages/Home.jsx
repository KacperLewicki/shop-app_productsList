import { useSearchParams } from "react-router-dom";
import { useProducts } from "../hooks/useProducts";
import { ProductsList } from "../components/productList/ProductList";
import { ProductFilters } from "../components/productFilters/ProductFilters";
import { ManufacturerFilters } from "../components/manufacturerFilters/ManufacturerFilters";

export const Home = () => {
  const [searchParams] = useSearchParams();
  const { products, isError, isLoading } = useProducts();

  const availabilityParam = searchParams.get('is_salable') ?? 1;
  const manufacturerArrayParam = searchParams.getAll('manufacturer[]');

  const filteredProducts = products
    .filter(product => product.is_salable === parseInt(availabilityParam))
    .filter(product => manufacturerArrayParam.length ? manufacturerArrayParam.includes(product.manufacturer) : true);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Failed to fetch products...</div>;
  }

  console.log(filteredProducts); // you can check how changing the radio buttons changes the products list

  return (
    <div className="App">
      <h1 className='h1-main'>Shop App</h1>
      <h2>Filters:</h2>
      <ManufacturerFilters />
      <ProductFilters />
      <ProductsList products={filteredProducts}/>
    </div>
  );
}