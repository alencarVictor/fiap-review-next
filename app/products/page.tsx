
import ButtonLogout from "@/components/ButtonLogout";
import ProductList from "@/components/ProductList";
import { ResponseProductsApi } from "@/types/product.type";

export const instant = false;

async function getData(): Promise<ResponseProductsApi> {
  const response = await fetch(
    "https://dummyjson.com/products?limit=15"
  );

  if (!response.ok) {
    throw new Error("Erro ao buscar produtos");
  }

  return response.json();
}

export default async function ProductsPage() {
  const response = await getData();
  const products = response.products;

  return (
    <div>
      <h1>
        Products Page <ButtonLogout />
      </h1>

      <ProductList products={products} />
    </div>
  );
}
