export type ProductId = string;

export interface Product {
  id: ProductId;
  name: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

export type ProductCardProps = {
  product: Product;
  children: React.ReactNode;
};
