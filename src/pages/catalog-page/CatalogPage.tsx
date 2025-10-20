import { SearchInput } from "@/entities/search-input";
import { useGetAllProducts } from "@/features/get-all-products/useGetAllProducts";
import { useSearchProducts } from "@/features/search-product/useSearchProduct";
import { ProductList } from "@/widgets/product-list";

export const CatalogPage = () => {
  const { products, isLoadingProducts } = useGetAllProducts();
  const { filteredProducts, handleSearch, inputValue } = useSearchProducts({
    products,
  });

  return (
    <>
      <SearchInput value={inputValue} onChange={handleSearch} />
      <ProductList products={filteredProducts} isLoading={isLoadingProducts} />
    </>
  );
};
