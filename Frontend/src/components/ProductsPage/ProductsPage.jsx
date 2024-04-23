import CategoryCarousel from "../HomePage/CategoryCarousel";
import ProductsGrid from "./ProductsGrid";

const ProductPage = () => {
  return (
    <>
      <CategoryCarousel />
      <ProductsGrid limit={8} /> 
    </>
  );
};

export default ProductPage;
