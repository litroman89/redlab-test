import { useParams } from "react-router-dom";
import { useGetProductById } from "@/features/get-product-by-id/useGetProductById";
import { ProductDetails } from "@/widgets/product-details";
import { NotFoundPage } from "@/pages/not-found-page/NotFoundPage";

export const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const { product, loading, error } = useGetProductById(id);

  if (loading) {
    return <div>Завантаження...</div>;
  }

  if (error) {
    return <div>Помилка: {error}</div>;
  }

  if (!product) {
    return <NotFoundPage />;
  }

  return <ProductDetails product={product} />;
};
