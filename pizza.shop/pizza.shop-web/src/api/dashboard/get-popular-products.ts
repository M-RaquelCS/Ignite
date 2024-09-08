import { api } from "../../lib/axios";

export type getPopularProductsResponseBody = {
  amount: number;
  product: string
}[]

export async function getPopularProducts(){
  const response = await api.get<getPopularProductsResponseBody>('/metrics/popular-products');
  return response.data
}