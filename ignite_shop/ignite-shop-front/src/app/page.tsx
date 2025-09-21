"use client"

import 'keen-slider/keen-slider.min.css'

import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "@/services/stripe/products/get-all-products";

import Products from "./(products)/page";


export default function Home() {

  const { data: products } = useQuery({
    queryKey: ['products'],
    queryFn: getAllProducts
  })

  return (
    <Products products={products} />
  );
}