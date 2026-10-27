export interface Product {
  id: number;
  title: string;
  thumbnail: string;
  category: string;
  price: number;
  rating: number;
  stock: number;
}

export interface ProductsResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}